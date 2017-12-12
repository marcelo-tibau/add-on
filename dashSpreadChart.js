function doGet() {
    var spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1gw2yfY0_-RUxGqO6tGUSsB-JoVoNWJp21c1TxVztLUw/';
    var sheetName = 'VisaoGeral';
    var ss = SpreadsheetApp.openByUrl(spreadsheetUrl);
    var sheet = ss.getSheetByName(sheetName);
    var data = sheet.getDataRange().getValues();
    var dataTable = Charts.newDataTable()

    var conteudoFilter = Charts.newCategoryFilter()
        .setFilterColumnLabel("Conteudo")
        .build();

    var planejadoFilter = Charts.newCategoryFilter()
        .setFilterColumnLabel("Planejado")
        .build();

    var investimentoFilter = Charts.newCategoryFilter()
        .setFilterColumnLabel("Investimento")
        .build();

    var columnChart = Charts.newColumnChart()
        .setDataViewDefinition(Charts.newDataViewDefinition().setColumns([2, 3]))
        .setStyleAttribute('blue', 'silver')
        .build();

    var tableChart = Charts.newTableChart()
        .build();

    var dashboard = Charts.newDashboardPanel()
        .setDataTable(data)
        .bind([conteudoFilter, planejadoFilter, investimentoFilter], [columnChart, tableChart])
        .build();

    ///This method bellow is not used anymore, it was deprecated in 2014
    var uiApp = UiApp.createApplication();

    dashboard.add(uiApp.createVerticalPanel()
                    .add(uiApp.createHorizontalPanel()
                        .add(conteudoFilter).add(planejadoFilter).add(investimentoFilter).setSpacing(80))
                    .add(uiApp.createHorizontalPanel()
                        .add(columnChart).add(tableChart).setSpacing(20)));
    uiApp.add(dashboard);
    return uiApp;

}
