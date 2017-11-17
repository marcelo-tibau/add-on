/// Facebook scraper to Google Spreadsheet
///// Codes to create and authorize OAuth2 tokens as well as refresh them when they expire

// /// Access info
 var CLIENT_ID = '216939128837482';
 var APP_SECRET = '9bfce89c5b5569da73fe89e7871397b0';
 var PAGE_ID = getActiveCell('B2');
 var api_version = 'v2.10';
 var post_id = getActiveCell('B3');
 var token = getActiveCell('B4');
 var redirect_uri = 'https://www.facebook.com/connect/login_success.html'

//// Trigger to activate the menu
function createSpreadsheetOpenTrigger() {
  var ss = SpreadsheetApp.getActive();
  ScriptApp.newTrigger('createSpreadsheetMenu')
      .forSpreadsheet(ss)
      .onOpen()
      .create();
}

//// Function to create the menu to be displayed at Spreadsheet
function createSpreadsheetMenu () {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('FB Scraper')
      .addItem('FB Scraper', 'run')
      .addToUi();
}

///// Function to get an active cell
function getActiveCell() {
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];
 // Returns the active cell
 var cell = sheet.getActiveCell();
 }

 /// Authorize and make a request to Facebook API     
function run(e) {
 var service = getService();
 var html = 'https://graph.facebook.com/{api_version}/{PAGE_ID}_{post_id}/reactions?summary=1&type={reaction_type}&limit=1&access_token={token}';
 if (service.hasAccess()) {
    var url = 'https://graph.facebook.com/{api_version}/{PAGE_ID}_{post_id}/reactions?summary=1&type={reaction_type}&limit=1&access_token={token}';
    var response = UrlFetchApp.fetch(url, {
                 headers: {
                                  'Authorization': 'Bearer ' + service.getAccessToken()
                              }
             });
    var result = JSON.parse(response.getContentText());
    Logger.log(JSON.stringify(result, null, 2));  
    
  }   else {
       var authorizationUrl = service.getAuthorizationUrl();
         Logger.log('Open the following URL and re-run the script: %s', authorizationUrl);
   }  
 }

/// Reset the authorization state
function reset() {
  var service = getService();
  service.reset();
 }

/// Service configuration
function getService() {
  return OAuth2.createService('facebookScraper')
    // Set the endpoint URLs
     .setAuthorizationBaseUrl('https://www.facebook.com/{api_version}/dialog/oauth?client_id={CLIENT_ID}&redirect_uri={redirect_uri}')
     .setTokenUrl('https://graph.facebook.com/{api_version}/access_token={token}')
    // Set the client ID and App  secret
     .setClientId(CLIENT_ID)
     .setClientSecret(APP_SECRET)
    // Set the name of the callback function that should be invoked to complete the oath flow
    .setCallbackFunction('authCallback')
    // Set the property store where authorized tokens should be persisted
    .setPropertyStore(PropertiesService.getUserProperties());
}

/// Handles the OAuth callback
function authCallback(request) {
  var service = getService();
  var authorized = service.handleCallback(request);
  if (authorized) {
      return HtmlService.createHtmlOutput('Success!');
    } else {
        return HtmlService.createHtmlOutput('Denied.')
      }
}

/// Logs the redict URI to register
function logRedirectUri() {
  var service = getService();
  Logger.log(service.getRedirectUri());
}

/// Codes to create the scraper
function fbScraper() {
    var response = UrlFetchApp.fetch('https://graph.facebook.com/v2.10/5281959998_10151375024894999/reactions?summary=1&&fields=reactions.type(LIKE).limit(0).summary(total_count).as(reactions_like),reactions.type(LOVE).limit(0).summary(total_count).as(reactions_love),reactions.type(WOW).limit(0).summary(total_count).as(reactions_wow),reactions.type(SAD).limit(0).summary(total_count).as(reactions_sad),reactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha),reactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry)&access_token=EAACEdEose0cBACZBZB8zum2NcPNLz2zBieUedIpwVTZC12rcLU0RBn1YZAJEu5ZBELUSWmv9YhCRZA5e9px9szM39ybsylcs6XZAmu2oUn1snEeRNKmQCB4EtdpgtkJmCxhhUQ0fSLeLRqm6TKLszqakCNroh5lSFQ0arbNK78myqJOFcpU1PB5MkwZB1AhWulIZD');
  var json = response.getContentText();
  var rawdata = JSON.parse(json);
  var rawdata = JSON.parse(response.getContentText());
  Logger.log(rawdata);
  var data = [];
  data.push(rawdata);
  SpreadsheetApp.getActiveSheet().appendRow(data);
}

/// Scraper parsing csv file
function fbScraperCsv() {
    var response = UrlFetchApp.fetch('https://graph.facebook.com/v2.10/5281959998_10151375024894999/reactions?summary=1&&fields=reactions.type(LIKE).limit(0).summary(total_count).as(reactions_like),reactions.type(LOVE).limit(0).summary(total_count).as(reactions_love),reactions.type(WOW).limit(0).summary(total_count).as(reactions_wow),reactions.type(SAD).limit(0).summary(total_count).as(reactions_sad),reactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha),reactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry)&access_token=EAACEdEose0cBAKGGoFZAUuQ4VaGGZAONuThmiLZBpgzm8lsmJQ54UwyWoM96qLlxiZCIqGn3Svs0v6IDKs6iPAI9mJ5bpRXUaG6Og3OMZBCgBc2FskY8zls34yX4MHTBUEfZBZBUYXQ1xv4ZBnAyUVNd0IEOGAZBujCKrtEwtqTTP1QJ4R56eLfc9QZCKwN99agF4ZD');
    var csvFile = "";
    csvFile = response.getContentText();
    var csvData = CSVToArray(csvFile, ",");
    Logger.log(csvData);
    SpreadsheetApp.getActiveSpreadsheet().appendRow(csvData);
}

function CSVToArray(strData, strDelimiter) {
    Logger.log(strData);
    strDelimiter = (strDelimiter || ",");
    /// a regular expression to parse the CSV values
    var objPattern = new RegExp(("(\\" + strDelimiter + "|\\r?\\n|\\r|^ )" + 
        "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|"  + 
        "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
    // Create an array to hold our data and give  a default empty first row
    var arrData =[[]];
    // Create an array to hold our individual pattern and  matching groups
    var arrMatches = null;
    // Keep looping over the regular expression matches  until we can no longer find a match
        while (arrMatches = objPattern.exec(strData)){
            ///Get the delimiter that was found
            var strMatchedDelimiter = arrMatches[ 1 ];
            // Check to see if the given delimiter has a length and if matches fild delimiter
            // if not, delimiter is a row delimiter and we add an empty row to our data array
            if (strMatchedDelimiter.length && strMatchedDelimiter != strDelimiter){
                arrData.push([]);
            }
            // Check the kind of value captured (quoted or unquoted)
            if (arrMatches[ 2 ]){
                var strMatchedValue = arrMatches[ 2 ].replace(new RegExp( "\"\"", "g" ), "\"");
            } else {
                // non-quoted value type
                var strMatchedValue = arrMatches[ 3 ];
            }
            // Add value string to data array
            arrData[ arrData.length - 1 ].push( strMatchedValue );
        }
    // Return the parsed data
    return( arrData );
}



