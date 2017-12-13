var date = new Date();
var year = date.getFullYear();
var day = date.getDate();
var monthList = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
var monthName = monthList[date.getMonth()];
var dayList = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
var dayOfWeek = dayList[date.getDay()];

document.write(dayOfWeek + "," + monthName + " " + day + "," + year);
