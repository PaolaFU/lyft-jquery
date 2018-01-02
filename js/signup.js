$(document).ready(function() {
  $('#input-mobile').val(' ');

  /* Para ingresar solo numero al input-mobile */
  $('#input-mobile').on('input', function() { 
    this.value = this.value.replace(/[^0-9]/g, '');
  });
  
  /* Para seleccionar pais y colocar codigo */
  $('#list-country a').on('click', function() {
    $('#btn-countries').html($(this).html() + '<span class="caret"></span>');  
    $('#code-country').val($(this).data('value'));
    /* Para desactivar el input donde se ingresa el numero de celular hasta que se se seleccione el pais */
    $('#input-mobile').prop('disabled', false);
  });

  /*  Para habilitar el boton de next */
  $('#input-mobile').on('input', function() {
    if (($(this).val().length) === 9) {
      $('#button-next').prop('disabled', false);
    } else {
      $('#button-next').prop('disabled', true);
    }
  });

  /* Para generar codigo aleatrio */
  $('#button-next').on('click', function(event) {
    var numberAleatorio = Math.floor((Math.random() * 900) + 99);
    var lab = (numberAleatorio);
    /* Para almacenar el codigo generado aleatoriamente */
    localStorage.setItem('randomLab', lab);
    alert('Tu código de usuario es  LAB- : ' + localStorage.getItem('randomLab'));
    
    window.location.href = 'verify.html';
  });
});