$(document).ready(function() {

  $('#name').val(' ');
  $('#last-name').val(' ');
  $('#iemail').val(' ');
  var $name = $('#name');
  var $lastName = $('#last-name');
  var $email = $('#email');
  var $checked = $('input[type="checkbox"]');
    
  var validateEmail = false;
  var validateName = false; 
  var validateLastName = false; 
  var validateChecked = false;  
  
  
  function activeButton() {
    if (validateEmail && validateName && validateLastName && validateChecked) {
      $('#button-next').attr('disabled', false);
    }
  }
  
  function desactiveButton() {
    $('#button-next').attr('disabled', 'disabled');
  } 
  
  // para ingresar un correo electronico y validarlo
  $email.on('input', function(event) {
    var errorMessage = $('#error-message');
    var txtMenssage = '<h5 style=\'color:#FF1493\';>Ingrese un correo electronico valido por ejemplo: usuario@dominio.com</h5>';
    // console.log(event.target.value);
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    // console.log(REGEXEMAIL.test($(this).val()));
    // console.log($(this).val());
    
      
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton(); 
    } else {
      errorMessage.html(txtMenssage); 
      desactiveButton();
    }
  });
  
  // Para validar nombre
  $name.on('input', function() {
    // console.log($(this).val());
    if ($(this).val().length >= 3) {
      validateName = true;
      activeButton(); 
    } else {
      desactiveButton(); 
    }
  });
  // para validar apellido
  $lastName.on('input', function() {
    // console.log($(this).val());
    if ($(this).val().length >= 3) {
      validateLastName = true;
      activeButton(); 
    } else {
      desactiveButton(); 
    }
  });
   
  $checked.on('click', function(event) {
    if (event.target.checked) {
      validateChecked = true;
      activeButton();
    } else {
      alert('entre');
      desactiveButton();
    }
  });
  // Para pasar a la siguiente vista 
  $('#button-next').on('click', function(event) {
    window.location.href = 'register-end.html';
  });
});