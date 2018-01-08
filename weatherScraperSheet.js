//Trigger to activate the menu
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
    ui.createMenu('WeatherScraper')
        .addItem('ClimaTempo', 'importClimaTempoRJ')
        .addToUi();
}

//Function to import Clima Tempo data to Rio de Janeiro
function importClimaTempoRJ() {
    var sh0 = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1];
    sh0.getRange("A1").setFormula('{IMPORTHTML("https://www.timeanddate.com/weather/brazil/rio-de-janeiro/historic";"table";2)}'); 
}
