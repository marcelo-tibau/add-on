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
    ui.createMenu('ExogenousData')
        .addItem('OpenWeatherMap', 'openweathermap')
        .addToUi();
}

//openweathermap
function openweathermap() {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=[location]&apikey=[apikey]";
    var location = 'Xxx,xx'; // your location (e.g. London,gb)
    var apikey = 'XXXXXXXXXX'; // your API Key
    var currentWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + 
        location + '&apikey=' + apikey;
    var response = UrlFetchApp.fetch(currentWeatherUrl);
    var json = response.getContentText();
    var weatherData = JSON.parse(json);
    var dataSet = weatherData;

    var rows = [],
        data;

            for (i = 0; i < Object.keys(dataSet).length; i++) {
                data = dataSet[Object.keys(dataSet)[i]];
                rows.push([data]);
            }
    var tss = SpreadsheetApp.openById('YYYYYYYYY'); // replace with destination ID
    var ts = tss.getSheetByName('worksheetName'); // replace with worksheet name
    ts.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
}

