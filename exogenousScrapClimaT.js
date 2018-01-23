// Create the User interface
function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('ExogenousData')
        .addItem('ClimaTempo', 'climaTempo')
        .addToUi();
}
// Clima Tempo Scrapper
function climaTempo() {
    var sh0 = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Rio de Janeiro
    sh0.getRange("C2").setFormula('{IMPORTXML("https://www.climatempo.com.br/previsao-do-tempo/cidade/321/riodejaneiro-rj";"//p[@id=""momento-temperatura""]")}');
    sh0.getRange("C3").setFormula('{IMPORTXML("https://www.climatempo.com.br/previsao-do-tempo/cidade/321/riodejaneiro-rj";"//p[@id=""momento-condicao""]")}');
    sh0.getRange("C4").setFormula('{IMPORTXML("https://www.climatempo.com.br/previsao-do-tempo/cidade/321/riodejaneiro-rj";"//li[@id=""momento-sensacao""]")}');
    sh0.getRange("C5").setFormula('{IMPORTXML("https://www.climatempo.com.br/previsao-do-tempo/cidade/321/riodejaneiro-rj";"//li[@id=""momento-humidade""]")}');
    sh0.getRange("C6").setFormula('{IMPORTXML("https://www.climatempo.com.br/previsao-do-tempo/cidade/321/riodejaneiro-rj";"//li[@id=""momento-pressao""]")}');
    sh0.getRange("C7").setFormula('{IMPORTXML("https://www.climatempo.com.br/previsao-do-tempo/cidade/321/riodejaneiro-rj";"//a[@id=""momento-vento""]")}');

    // São Paulo
    sh0.getRange("F2").setFormula('{IMPORTXML("https://www.climatempo.com.br/previsao-do-tempo/cidade/558/saopaulo-sp";"//p[@id=""momento-temperatura""]")}');
    sh0.getRange("F3").setFormula('{IMPORTXML("https://www.climatempo.com.br/previsao-do-tempo/cidade/558/saopaulo-sp";"//p[@id=""momento-condicao""]")}');
    sh0.getRange("F4").setFormula('{IMPORTXML("https://www.climatempo.com.br/previsao-do-tempo/cidade/558/saopaulo-sp";"//li[@id=""momento-sensacao""]")}');
    sh0.getRange("F5").setFormula('{IMPORTXML("https://www.climatempo.com.br/previsao-do-tempo/cidade/558/saopaulo-sp";"//li[@id=""momento-humidade""]")}');
    sh0.getRange("F6").setFormula('{IMPORTXML("https://www.climatempo.com.br/previsao-do-tempo/cidade/558/saopaulo-sp";"//li[@id=""momento-pressao""]")}');
    sh0.getRange("F7").setFormula('{IMPORTXML("https://www.climatempo.com.br/previsao-do-tempo/cidade/558/saopaulo-sp";"//a[@id=""momento-vento""]")}');
}

