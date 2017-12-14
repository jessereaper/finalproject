var date = new Date();
var year = date.getFullYear();
var day = date.getDate();
var monthList = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
var monthName = monthList[date.getMonth()];
var dayList = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
var dayOfWeek = dayList[date.getDay()];

document.write(dayOfWeek + "," + monthName + " " + day + "," + year);
//logout
//gethelp
$(document).ready(() => {
  $('#getHelpButton').on('click', () =>{
    $('#alert').addClass('alert');
      $('#alert').removeClass('none');
    $('#getHelp').removeClass('none');


  })
  $('#alert').on('click'), () =>{
    $('#alert').addClass('none');
  }
})
