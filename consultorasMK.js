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
    ui.createMenu('ConsultorasMK')
        .addItem('Atualizacao', 'consultorasMK')
        .addToUi();
}
//Function to grab spreadsheet data and paste it in another spreadsheet
function consultorasMK() {
    var zz = SpreadsheetApp.openById('1CR_AWInR66sU8sxwPbpel-K5wvh3vTB1K7WQQhUuf2Q');
    var rangezz = zz.getSheetByName('FEV').getRange('C9:G36');
    var datazz = rangezz.getValues();

    var yy = SpreadsheetApp.openById('1z29PRkKy4cUuScRoItmtqeMP3SmmfmZmhXiDHOmvGpA');
    var dyy = yy.getSheetByName('FEV');
    dyy.getRange('B2:F29').setValues(datazz);
}

