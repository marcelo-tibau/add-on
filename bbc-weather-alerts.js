
function Start() {
  var link = 'http://www.bbc.co.uk/weather/3451190';

    link = link.substring(link.indexOf("r/")+2,link.length);
    var url = 'http://open.live.bbc.co.uk/weather/feeds/en/'+link+'/3dayforecast.rss';
    var xml = UrlFetchApp.fetch(url).getContentText();
    
    xml = xml.substring(xml.indexOf("</image>")+34,xml.length);
    xml = xml.substring(0,xml.indexOf("</title>"));
    
    for(var i=0;i<4;i++)
        xml=xml.replace("°"," ");

    var forecast=xml.substring(0,xml.indexOf(','));
    
    var c = xml.replace("imum Temperature","");
    c = c.replace("imum Temperature","");
    var output=c.substring(c.indexOf("day:")+5,c.length);
    
    var now = new Date().getTime();
    CalendarApp.createEvent(output,new Date(now+60000),
                     new Date(now+60000)).addSmsReminder(0); 

}

function Install(){
    ScriptApp.newTrigger("Start")
        .timeBased()
        .atHour(9)
        .everyDays(1) 
        .create();
    
    ScriptApp.newTrigger("Start")
        .timeBased()
        .atHour(20)
        .everyDays(1) 
        .create();
}

function Uninstall() {
    var triggers = ScriptApp.getScriptTriggers();
    for (var i=0; i<triggers.length; i++) {
            ScriptApp.deleteTrigger(triggers[i]);
        }
}
