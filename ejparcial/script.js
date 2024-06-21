document.getElementById('contactoForm').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;
    var errorMensaje = '';

    if (!nombre || !email || !asunto || !mensaje) {
        errorMensaje += 'Todos los campos son obligatorios.<br>';
    }

    if (!validarEmail(email)) {
        errorMensaje += 'El correo electrónico no tiene un formato válido.<br>';
    }

    if (errorMensaje) {
        document.getElementById('mensajeError').innerHTML = errorMensaje;
        event.preventDefault(); // Evita que el formulario se envíe si hay errores
    }
});

function validarEmail(email) {
    // Patrón para validar el formato del correo electrónico
    var patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronEmail.test(email);
}

document.addEventListener('DOMContentLoaded', function() {
    var nombreInput = document.getElementById('nombre');
    var emailInput = document.getElementById('email');
    var asuntoInput = document.getElementById('asunto');
    var mensajeInput = document.getElementById('mensaje');

    nombreInput.addEventListener('input', function() {
        validarLongitud(nombreInput, 3, 50, 'errorNombre');
    });

    emailInput.addEventListener('input', function() {
        validarEmail(emailInput, 'errorEmail');
    });

    asuntoInput.addEventListener('input', function() {
        validarLongitud(asuntoInput, 5, 100, 'errorAsunto');
    });

    mensajeInput.addEventListener('input', function() {
        validarLongitud(mensajeInput, 10, 500, 'errorMensaje');
    });
});

function validarLongitud(input, minLength, maxLength, errorId) {
    var valor = input.value.trim();
    var errorElement = document.getElementById(errorId);

    if (valor.length < minLength) {
        errorElement.textContent = 'Debe tener al menos ' + minLength + ' caracteres.';
    } else if (valor.length > maxLength) {
        errorElement.textContent = 'Debe tener menos de ' + maxLength + ' caracteres.';
    } else {
        errorElement.textContent = '';
    }
}

function validarEmail(input, errorId) {
    var valor = input.value.trim();
    var errorElement = document.getElementById(errorId);
    var patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!patronEmail.test(valor)) {
        errorElement.textContent = 'El correo electrónico no tiene un formato válido.';
    } else {
        errorElement.textContent = '';
    }
}

