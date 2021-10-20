function doGet(e) {
  //データdata1,data2を取り出す
  var value1  = e.parameter.data1;
  var value2  = e.parameter.data2;
 
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // シート名で指定する
  var sheet_NamaData = spreadsheet.getSheetByName("生データ");
  
  //1列目に日時、2列目に1、３行目に送信されたデータ値　を追記
  sheet_NamaData.appendRow([new Date(), value1, value2]);
}
