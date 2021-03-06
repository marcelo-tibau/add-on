function doGet(e) {
  return HtmlService.createTemplateFromFile("index.html")
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function getChartData() {
    var spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/XXXXXputYourSpreadsheetIdHereXXX/';
    var sheetName = 'VisaoGeral';
    var ss = SpreadsheetApp.openByUrl(spreadsheetUrl);
    var sheet = ss.getSheetByName(sheetName);
    var headings = sheet.getRange(1,2,1, sheet.getLastColumn()).getValues()[0].map(function(heading) {
        return heading;
    });
    Logger.log(headings);
    var values = sheet.getRange(2,2, sheet.getLastRow()-3, sheet.getLastColumn()).getValues();
    var data = [];
    for (var i=0; i < values.length; i++) {
        var obj = {};
        for (var j=0; j < values[i].length; j++) {
            obj[headings[j]] = values[i][j];
        }
        data.push(obj);
    }
    return data;
}
