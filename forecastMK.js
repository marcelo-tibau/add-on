//Trigger to activate the menu
function createSpreadsheetOpenTrigger() {
    var ss = SpreadsheetApp.getActive();
    ScriptApp.newTrigger('createSpreadsheetMenu')
        .forSpreadsheet(ss)
        .onOpen()
        .create();
}

//Function to create the menu to be displayed at Spreadsheet
function createSpreadsheetMenu () {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('MaryKay')
        .addItem('Consolidado', 'add')
        .addItem('Lancamentos', 'lancamentos')
        .addToUi();
}

// Copy from one spreadsheet, sum the values and paste at another spreadsheet
function add() {
    var ss = SpreadsheetApp.openById('12R1TY1Zt3vFVK6CniUxkz11jQMDw0ekHSYGJZH8JTTs');
    var sss = ss.getSheetByName('consolidadoFev2018');
    var parameter = sss.getRange('E2').getValue();

    var sheet = SpreadsheetApp.openById('1oj4fCUTX8Iznk5T_8gIYILguoWtm2fTt1_Kuob30SwM');
    var vendas = sheet.getSheetByName(parameter);
    var forecast = sheet.getSheetByName(parameter);

    var num1 = vendas.getRange('D6').getValue();
    var num2 = vendas.getRange('D7').getValue();
    var num3 = vendas.getRange('D8').getValue();
    var num4 = vendas.getRange('D9').getValue();
    var num5 = vendas.getRange('D10').getValue();
    var for1 = forecast.getRange('E6').getValue();
    var for2 = forecast.getRange('E7').getValue();
    var for3 = forecast.getRange('E8').getValue();
    var for4 = forecast.getRange('E9').getValue();
    var for5 = forecast.getRange('E10').getValue();

    var num6 = vendas.getRange('D12').getValue();
    var num7 = vendas.getRange('D13').getValue();
    var num8 = vendas.getRange('D14').getValue();
    var for6 = forecast.getRange('E12').getValue();
    var for7 = forecast.getRange('E13').getValue();
    var for8 = forecast.getRange('E14').getValue();

    var num9 = vendas.getRange('D16').getValue();
    var num10 = vendas.getRange('D17').getValue();
    var num11 = vendas.getRange('D18').getValue();
    var num12 = vendas.getRange('D19').getValue();
    var num13 = vendas.getRange('D20').getValue();
    var num14 = vendas.getRange('D21').getValue();
    var num15 = vendas.getRange('D22').getValue();
    var num16 = vendas.getRange('D23').getValue();
    var num17 = vendas.getRange('D24').getValue();
    var num18 = vendas.getRange('D25').getValue();
    var num19 = vendas.getRange('D26').getValue();
    var num20 = vendas.getRange('D27').getValue();
    var num21 = vendas.getRange('D28').getValue();
    var num22 = vendas.getRange('D29').getValue();
    var for9 = forecast.getRange('E16').getValue();
    var for10 = forecast.getRange('E17').getValue();
    var for11 = forecast.getRange('E18').getValue();
    var for12 = forecast.getRange('E19').getValue();
    var for13 = forecast.getRange('E20').getValue();
    var for14 = forecast.getRange('E21').getValue();
    var for15 = forecast.getRange('E22').getValue();
    var for16 = forecast.getRange('E23').getValue();
    var for17 = forecast.getRange('E24').getValue();
    var for18 = forecast.getRange('E25').getValue();
    var for19 = forecast.getRange('E26').getValue();
    var for20 = forecast.getRange('E27').getValue();
    var for21 = forecast.getRange('E28').getValue();
    var for22 = forecast.getRange('E29').getValue();

    var num23 = vendas.getRange('D31').getValue();
    var num24 = vendas.getRange('D32').getValue();
    var num25 = vendas.getRange('D33').getValue();
    var num26 = vendas.getRange('D34').getValue();
    var num27 = vendas.getRange('D35').getValue();
    var num28 = vendas.getRange('D36').getValue();
    var num29 = vendas.getRange('D37').getValue();
    var num30 = vendas.getRange('D38').getValue();
    var for23 = forecast.getRange('E31').getValue();
    var for24 = forecast.getRange('E32').getValue();
    var for25 = forecast.getRange('E33').getValue();
    var for26 = forecast.getRange('E34').getValue();
    var for27 = forecast.getRange('E35').getValue();
    var for28 = forecast.getRange('E36').getValue();
    var for29 = forecast.getRange('E37').getValue();
    var for30 = forecast.getRange('E38').getValue();

    var num31 = vendas.getRange('D40').getValue();
    var num32 = vendas.getRange('D41').getValue();
    var num33 = vendas.getRange('D42').getValue();
    var num34 = vendas.getRange('D43').getValue();
    var for31 = forecast.getRange('E40').getValue();
    var for32 = forecast.getRange('E41').getValue();
    var for33 = forecast.getRange('E42').getValue();
    var for34 = forecast.getRange('E43').getValue();

    var num35 = vendas.getRange('D45').getValue();
    var num36 = vendas.getRange('D46').getValue();
    var num37 = vendas.getRange('D47').getValue();
    var for35 = forecast.getRange('E45').getValue();
    var for36 = forecast.getRange('E46').getValue();
    var for37 = forecast.getRange('E47').getValue();

    sss.getRange('C2').setValue(num1+num2+num3+num4+num5);
    sss.getRange('B2').setValue(for1+for2+for3+for4+for5);
    sss.getRange('C3').setValue(num6+num7+num8);
    sss.getRange('B3').setValue(for6+for7+for8);
    sss.getRange('C4').setValue(num9+num10+num11+num12+num13+num14+num15+num16+num17+num18+num19+num20+num21+num22);
    sss.getRange('B4').setValue(for9+for10+for11+for12+for13+for14+for15+for16+for17+for18+for19+for20+for21+for22);
    sss.getRange('C5').setValue(num23+num24+num25+num26+num27+num28+num29+num30);
    sss.getRange('B5').setValue(for23+for24+for25+for26+for27+for28+for29+for30);
    sss.getRange('C6').setValue(num31+num32+num33+num34);
    sss.getRange('B6').setValue(for31+for32+for33+for34);
    sss.getRange('C7').setValue(num35+num36+num37);
    sss.getRange('B7').setValue(for35+for36+for37);
}

// Specify range from parameters
function lancamentos() {
    var ss = SpreadsheetApp.openById('12R1TY1Zt3vFVK6CniUxkz11jQMDw0ekHSYGJZH8JTTs');
    var sss = ss.getSheetByName('LancamentosDiaADiaFev2018');
    var parameter1 = sss.getRange('M2').getValue();
    var parameter2 = sss.getRange('N2').getValue();
    var parameter3 = sss.getRange('O2').getValue();
    var parameter4 = sss.getRange('P2').getValue();
    var parameter5 = sss.getRange('Q2').getValue();
    var parameter6 = sss.getRange('R2').getValue();
    var parameter7 = sss.getRange('S2').getValue();
    var parameter8 = sss.getRange('T2').getValue();
    var parameter9 = sss.getRange('U2').getValue();
    var parameter10 = sss.getRange('V2').getValue();
    var parameter11 = sss.getRange('W2').getValue();

    var sheet = SpreadsheetApp.openById('1oj4fCUTX8Iznk5T_8gIYILguoWtm2fTt1_Kuob30SwM');
    var worksheet = sheet.getSheetByName(parameter11);
    var sales1 = worksheet.getRange('D6').getValue();
    var estimate1 = worksheet.getRange('E6').getValue();
    var sales2 = worksheet.getRange('D7').getValue();
    var estimate2 = worksheet.getRange('E7').getValue();
    var sales3 = worksheet.getRange('D8').getValue();
    var estimate3 = worksheet.getRange('E8').getValue();
    var sales4 = worksheet.getRange('D9').getValue();
    var estimate4 = worksheet.getRange('E9').getValue();
    var sales5 = worksheet.getRange('D10').getValue();
    var estimate5 = worksheet.getRange('E10').getValue();

    sss.getRange(parameter1).setValue(estimate1);
    sss.getRange(parameter2).setValue(sales1);
    sss.getRange(parameter3).setValue(estimate2);
    sss.getRange(parameter4).setValue(sales2);
    sss.getRange(parameter5).setValue(estimate3);
    sss.getRange(parameter6).setValue(sales3);
    sss.getRange(parameter7).setValue(estimate4);
    sss.getRange(parameter8).setValue(sales4);
    sss.getRange(parameter9).setValue(estimate5);
    sss.getRange(parameter10).setValue(sales5);
}
