// ENVIAR CORREO 
// CAPTURO EL ELEMENTO BOTON DEL FORM
const botonForm = document.getElementById('botonForm');
// EVENTO QUE OCURRE CUANDO SE LE DA CLICK AL BOTON
botonForm.addEventListener('click', function () {
    //CAPTURA DE ELEMENTOS DEL FORMULARIO
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const celular = document.getElementById('celular');
    const asunto = document.getElementById('asunto');
    const validacionEmail = document.getElementById('validacionEmail');
    //VALIDACION DEL CAMPO EMAIL
    if (email.value == '') {
        validacionEmail.innerHTML = "<p>El campo email es requerido *</p>"
    } else {
        //CREO EL BODY DEL CORREO
        const AsuntoMensaje = 'Solicitud de información';
        const bodyMensaje = `Nombre: ${nombre.value} %0AEmail: ${email.value} %0ACelular: ${celular.value} %0AAsunto: ${asunto.value}`;
        //PRIMER PARAMETRO CORREO AL QUE SERA ENVIADO, SEGUNDO EL ASUNTO DEL CORREO(SUBJECT), TERCERO BODY DEL CORREO(BODY)
        window.location.href = `mailto:carlos_bedoya97@hotmail.com?subject=${AsuntoMensaje}&body=${bodyMensaje}`;
        //LIMPIO TODOS LOS CAMPOS
        nombre.value = '';
        email.value = '';
        celular.value = '';
        asunto.value = '';
        //LIMPIO LA VALIDACION DEL EMAIL
        validacionEmail.innerText='';

    }
})




