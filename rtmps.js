var convertToRtmps = (selector) => {
    var t = $(selector).text();
    t = t.replace("rtmp:", "rtmps:");
    t = t.replace(":1935", ":443");
    $(selector).text(t);
}
var PRIMARY = "#KwebcastAdvancedOptions-pane > table > tbody > tr:nth-child(1) > td:nth-child(2)";
var BACKUP = "#KwebcastAdvancedOptions-pane > table > tbody > tr:nth-child(2) > td:nth-child(2)";
if ($(PRIMARY).length > 0) {
    console.log("+++++ switched")
    convertToRtmps(PRIMARY);
    convertToRtmps(BACKUP);
} else { console.log("----- NO SWITCH"); }