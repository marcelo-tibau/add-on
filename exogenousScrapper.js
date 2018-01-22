// Create the User interface
function onOpen() {
    DocumentApp.getUi() 
        .createMenu('ExogenousData')
        .addItem('Enter URL', 'showPrompt')
        .addToUi();
}

function showPrompt() {
    var ui = DocumentApp.getUi();
    var result = ui.prompt(
        'Entre a url do website (com http(s)://):',
        ui.ButtonSet.OK_CANCEL);

 // Process user's response
    var button = result.getSelectedButton();
    var url = result.getResponseText();
    var links = [];
    var base_url = url;

    if (button == ui.Button.OK) { // user clicked 'OK'
        if(!isValidURL(url))
        {
            ui.alert('Sua url é válida');
        }
        else{
            // gather initial links
            var inner_links_arr = scrapeAndPaste(url, 1); // first run and clear the document
            links = links.concat(inner_links_arr); // append an array to all the links
            var new_links = []; // array for new links
            var processed_urls = [url]; // processed links
            var link, current;

            while (links.length)
            {
            link = links.shift(); // get the most left link (inner url)
            processed_urls.push(link);
            current = base_url + link;
            new_links = scrapeAndPaste(current, 0); // to  second and consecutive runs if we do not clear up the document -> code:  //ui.alert('Processed... '+ current+ '\nReturned links: ' + new_links.join('\n') );
             // add new links into links array (stack) if appropriate
                for (var i in new_links) {
                    var item = new_links[i];
                    if (links.indexOf(item) === -1 && processed_urls.indexOf(item) === -1) links.push(item);
                }
            }
        }
    }
}

function scrapeAndPaste(url, clear) {
    var text;
    try {
        var html = UrlFetchApp.fetch(url).getContentText();
        // some html pre-processing
        if (html.indexOf('</head>') !== -1) {
            html = html.split('</head>')[1];
        }
        if (html.indexOf('</body>') !== -1) { // we split only the body
            html = html.split('</body>')[0] + '</body>';
        }
        // fetch inner links
        var inner_links_arr = [];
        var linkRegExp = /href="(.*?)"/gi; // regex expression object
        var match = linkRegExp.exec(html);
        while (match != null) {
            // matched text: match[0]
            if (match[1].indexOf('#') !== 0
                && match[1].indexOf('http') !== 0
                && match[1].indexOf('https://') !== 0
                && match[1].indexOf('mailto:') !== 0
                && match[1].indexOf('.pdf') === -1) {
                inner_links_arr.push(match[1]);
            }
              //match start: match.index
             //capturing group n: match[n]
                match = linkRegExp.exec(html);
        }
        text = getTextFromHtml(html);
        outputText(url, text, clear); // output text into current document with given url
        return inner_links_arr; // return all inner links of this doc as an array
    } catch (e) {
        MailApp.sendEmail(Session.getActiveUser().getEmail(), "Scrape report de erro em "
            + Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd HH:mm:ss"),
            "\r\nMessage: " + e.message
            + "\r\nFile: " +  e.fileName+ '.gs'
            + "\r\nWeb page under scrape: " + url
            + "\r\nLine: " +  e.lineNumber);
        outputText(url, 'Erro no scrape para esta pagina causado por html malformado', clear);
    }
}

function getTextFromHtml(html) {
    return getTextFromNode(Xml.parse(html, true).getElement());
}
function getTextFromNode(x) {
    switch(x.toString()) {
        case 'XmlText': return x.toXmlString();
        case 'XmlElement': return x.getNodes().map(getTextFromNode).join(' ');
        default: return '';
    }
}

function outputText(url, text, clear) {
    var body = DocumentApp.getActiveDocument().getBody();
    if (clear) {
        body.clear();
    }
    else {
        body.appendHorizontalRule();
    }
    var section = body.appendParagraph(' * ' + url);
    section.setHeading(DocumentApp.ParagraphHeading.HEADING2);
    body.appendParagraph(text);
}

function isValidURL(url) {
    var RegExp = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/;
    if (RegExp.test(url)) {
    return true;
    } else {
    return false;
    }
}


