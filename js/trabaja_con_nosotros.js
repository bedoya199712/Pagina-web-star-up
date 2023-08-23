// ENVIAR CORREO 
// CAPTURO EL ELEMENTO BOTON DEL FORM TRABAJA CON NOSOTROS
const botonFormTrabajaConNosotros = document.getElementById('botonFormTrabajaConNosotros');
// EVENTO QUE OCURRE CUANDO SE LE DA CLICK AL BOTON
botonFormTrabajaConNosotros.addEventListener('click', function () {
    //CAPTURA DE ELEMENTOS DEL FORMULARIO
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const celular = document.getElementById('celular');
    const cargo = document.getElementById('contact_cargo');
    const validacionEmail = document.getElementById('validacionEmail');
    //VALIDACION DEL CAMPO EMAIL
    if (email.value == '') {
        validacionEmail.innerHTML = "<p><strong>El campo email es requerido </strong></p>"
    } else {
        //CREO EL BODY DEL CORREO
        const AsuntoMensaje = 'Candidato de empleo';
        const bodyMensaje = `Nombre: ${nombre.value} %0AEmail: ${email.value} 
        %0ACelular: ${celular.value} %0ACargo al que aspiro: ${cargo.options[cargo.selectedIndex].value}`;
        //PRIMER PARAMETRO CORREO AL QUE SERA ENVIADO, SEGUNDO EL ASUNTO DEL CORREO(SUBJECT), TERCERO BODY DEL CORREO(BODY)
        window.location.href = `mailto:carlos_bedoya97@hotmail.com?subject=${AsuntoMensaje}&body=${bodyMensaje}`;
        //LIMPIO TODOS LOS CAMPOS
        nombre.value = '';
        email.value = '';
        celular.value = '';
        cargo.value = 0;
        //LIMPIO LA VALIDACION DEL EMAIL
        validacionEmail.innerText='';

    }
})
