$(document).ready(function() {
  $('#input-code').val(' ');
  /* Para que permita ingresar solo numeros*/
  $('#input-code').on('input', function() { 
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  /* para activar boton next */
  $('#input-code').on('input', function() {
    if (($(this).val().length) === 3) {
      $('#button-next').prop('disabled', false);
    } else {
      $('#button-next').prop('disabled', true);
    }
  });
  /* Generar un nuevo codigo y almacenarlo*/
  $('#button-resend').on('click', function(event) {
    /* Para generar codigo aleatorios de solo 3 digitos*/
    var numberAleatorio = Math.floor((Math.random() * 900) + 99);
    localStorage.setItem('randomLab', numberAleatorio);
    alert('Your new code is  LAB- : ' + localStorage.getItem('randomLab'));
  });

  /* Para comparar codigo generado es igual a codigo ingresado */
  $('#button-next').on('click', function(event) {
    var codeLab = $('#input-code'); 
    var codeEnter = $(codeLab).val();
    
    if (codeEnter === localStorage.getItem('randomLab')) {
      /* Si codigo es correcto se va a la siguiente vista*/
      window.location.href = 'user.html';
    } else {
      /* alert hasta ingresar codigo correcto */
      alert('Code incorrect: verify your code');
    }
  });
});