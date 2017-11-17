/// Facebook scraper to Google Spreadsheet

////Trigger to activate the menu
function createSpreadsheetOpenTrigger() {
    var ss = SpreadsheetApp.getActive();
    ScriptApp.newTrigger('createSpreadsheetMenu')
        .forSpreadsheet(ss)
        .onOpen()
        .create();
}

//Function to create the menu to be displayed at Spreadsheet
function createSpreadsheetMenu() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('FB Scraper')
        .addItem('FB Scraper', 'fbScraper2')
        .addToUi();
}

//To get data from spreasheet's cells
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

//Facebook access token needed to access the Graph API
var access_token = sheet.getRange("B2").getValue();

//Facebook post ID needed to retrieve the reactions for
var post_id = sheet.getRange("B1").getValue();

function fbScraper2() {
    var response = UrlFetchApp.fetch('https://graph.facebook.com/v2.10/' + post_id + '?access_token=' + access_token + '&fields=     reactions.type(LIKE).summary(total_count).limit(0).as(like),     reactions.type(LOVE).summary(total_count).limit(0).as(love),     reactions.type(WOW).summary(total_count).limit(0).as(wow),     reactions.type(HAHA).summary(total_count).limit(0).as(haha),     reactions.type(SAD).summary(total_count).limit(0).as(sad),     reactions.type(ANGRY).summary(total_count).limit(0).as(angry)');
    var json = response.getContentText();
    var rawdata = JSON.parse(json);
    Logger.log(rawdata);
    var data = [];
    data.push(rawdata);
    SpreadsheetApp.getActiveSheet().appendRow(data);
}
