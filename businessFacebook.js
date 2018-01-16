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
    ui.createMenu('Facebook')
        .addItem('Business', 'Copy')
        .addToUi();
}

// Constants
var PARAMETERS_SHEET_NAME = 'parameters';

// Global parameters (Values will be read from the parameters sheet)
var gDidFillParameters = false;
var gSheetID = 'Your sheet ID value from the parameters sheet';

// ---- Initialization ----
//Function to copy from one spreadsheet to another using parameter data as sheet ID
function Copy() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var parametersSheet = ss.getSheetByName(PARAMETERS_SHEET_NAME);

    //Fetch the range of cells B2:B10
    var parametersDataRange = parametersSheet.getRange(2, 1, 9, 2);

    //Fetch cell value for each row in the range
    var parametersData = parametersDataRange.getValues()
    gSheetID = parametersData[0][1];

    var sss = SpreadsheetApp.openById(gSheetID);

    var range = sss.getRange('A1:R2'); //assign the range you want to copy

    var data = range.getValues();

    var tss = SpreadsheetApp.openById('1EdwVkrn_TRJszU8OrD1Vy_bX9dsFEZ63Y3LjbIbLtCQ'); //replace with destination ID

    var ts = tss.getSheetByName('savedData'); // replace with destination Sheet tab name
    ts.getRange(ts.getLastRow()+1, 1, data.length, data[0].length).setValues(data); // already defined to get the size of the copied data automatically
}
