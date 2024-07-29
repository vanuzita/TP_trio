function enviarFormulario() {
    var email = document.getElementById('email').value;
    var mensajeExito = document.getElementById('mensaje-exito');
    var formulario = document.getElementById('contactForm');

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor ingresa un email válido.');
        return false;
    }

    mensajeExito.classList.remove('d-none');

    setTimeout(function() {
        formulario.reset(); 
        mensajeExito.classList.add('d-none'); 
    }, 2500); 

    return false;

}