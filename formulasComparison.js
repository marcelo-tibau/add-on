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
    ui.createMenu('Comparativo')
        .addItem('Check', 'minusFunction')
        .addToUi();
}

//Function to paste (C-B) to column D
function minusFunction() {
    var sh0 = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1];
    sh0.getRange("D2").setFormula('{ARRAYFORMULA(C2:C-B2:B)}');
    }
}
