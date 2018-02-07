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

//openweathermap II
function openweathermapII() {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=[location]&apikey=[apikey]";
    var location = 'Rio,br';
    var apikey = 'XXXXXXXXXX'; // replace with your api key
    var currentWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' +
            location + '&apikey=' + apikey;
    var response = UrlFetchApp.fetch(currentWeatherUrl);
    // parse response and get sheet
    var json = response.getContentText();
    var weatherData = JSON.parse(json);
    var spreadsheet = SpreadsheetApp.openById('XXXXXXXXX').getSheetByName('YYYYYYYYY');
        if (spreadsheet === nul) {
            // Error here
        }
    var keys = [];
        for (var k in weatherData) keys.push(weatherData[k]);
    // Loop through data and add it to spreadsheet
    keys.forEach(function( row, index ) {
        // This function will be executed for every row in the rows array
        // Set the row's index to the first column in the sheet
        // 2 is added to index because it starts at 0 and we want to start adding data at row 2
        spreadsheet.getRange(index + 2, 1).setValue(index);
        // set the string value to second column
        spreadsheet.getRange(index + 2, 2).setValue(row);
        // set timestamp
        spreadsheet.getRange(index + 2, 3).setValue(new Date()).setNumberFormat("dd/MM/yyyy | HH:mm:ss");
    });
}
