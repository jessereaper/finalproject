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
  $('forgotPassw').on('click')() =>{
    $('#alert').addClass('alert');
      $('#alert').removeClass('none');
  }
})
