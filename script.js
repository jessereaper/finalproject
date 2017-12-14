//logout
//gethelp
$(document).ready(() => {
  $('#getHelpButton').on('click', () =>{
    $('#alert').addClass('alert');
      $('#alert').removeClass('none');
    $('#getHelp').removeClass('none');

  })
  $('#alert').on('click'), () =>{
    $('#getHelp').hide('gethelp');
    $('#alert').removeClass('alert');
  }
})
