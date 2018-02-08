function histDataTest() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var t = ss.getSheetByName('histDataTest');
    var dataToRecord = ss.getSheetByName('extractedData').getRange(2,1,12,3).getValues();
    var r = t.insertRows(1,12);
    var sv = t.getRange(2,1,12,3).setValues(dataToRecord);
}

function historyData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[3];
  var a1 = sheet.getRange('savedData!A1').getValue();
  var b1 = sheet.getRange('savedData!B1').getValue();
  var c1 = sheet.getRange('savedData!C1').getValue();
  var d1 = sheet.getRange('savedData!D1').getValue();
  var e1 = sheet.getRange('savedData!E1').getValue();
  var f1 = sheet.getRange('savedData!F1').getValue();
  var g1 = sheet.getRange('savedData!G1').getValue();
  var h1 = sheet.getRange('savedData!H1').getValue();
  var i1 = sheet.getRange('savedData!I1').getValue();
  var j1 = sheet.getRange('savedData!J1').getValue();
  var k1 = sheet.getRange('savedData!K1').getValue();
  var l1 = sheet.getRange('savedData!L1').getValue();
  var m1 = sheet.getRange('savedData!M1').getValue();
  var n1 = sheet.getRange('savedData!N1').getValue();
  var o1 = sheet.getRange('savedData!O1').getValue();
  var p1 = sheet.getRange('savedData!P1').getValue();
  var q1 = sheet.getRange('savedData!Q1').getValue();
  var r1 = sheet.getRange('savedData!R1').getValue();
  var s1 = sheet.getRange('savedData!S1').getValue();
  sheet.appendRow([a1,b1,c1,d1,e1,f1,g1,h1,i1,j1,k1,l1,m1,n1,o1,p1,q1,r1,s1]);

  var a2 = sheet.getRange('savedData!A2').getValue();
  var b2 = sheet.getRange('savedData!B2').getValue();
  var c2 = sheet.getRange('savedData!C2').getValue();
  var d2 = sheet.getRange('savedData!D2').getValue();
  var e2 = sheet.getRange('savedData!E2').getValue();
  var f2 = sheet.getRange('savedData!F2').getValue();
  var g2 = sheet.getRange('savedData!G2').getValue();
  var h2 = sheet.getRange('savedData!H2').getValue();
  var i2 = sheet.getRange('savedData!I2').getValue();
  var j2 = sheet.getRange('savedData!J2').getValue();
  var k2 = sheet.getRange('savedData!K2').getValue();
  var l2 = sheet.getRange('savedData!L2').getValue();
  var m2 = sheet.getRange('savedData!M2').getValue();
  var n2 = sheet.getRange('savedData!N2').getValue();
  var o2 = sheet.getRange('savedData!O2').getValue();
  var p2 = sheet.getRange('savedData!P2').getValue();
  var q2 = sheet.getRange('savedData!Q2').getValue();
  var r2 = sheet.getRange('savedData!R2').getValue();
  var s2 = sheet.getRange('savedData!S2').getValue();
  sheet.appendRow([a2,b2,c2,d2,e2,f2,g2,h2,i2,j2,k2,l2,m2,n2,o2,p2,q2,r2,s2]);

  // Set timestamp
  var a3 = sheet.getRange('dataHistTwo!A3').setValue(new Date()).setNumberFormat("dd/MM/yyyy | HH:mm:ss");
  sheet.appendRow([a3]);
  Logger.log(a3)
}