// Funzione per aumentare la dimensione del testo della pagina
function zoomIn() {
    document.body.style.fontSize = "120%"; // Aumenta la dimensione del testo del 20%
}

// Funzione per diminuire la dimensione del testo della pagina
function zoomOut() {
    document.body.style.fontSize = "100%"; // Imposta la dimensione del testo al valore predefinito
}


// Función para mostrar mensajes de error
function displayErrorMessage(message, fieldId) {
    const errorMessage = document.getElementById(fieldId + '-error');
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
}

// JavaScript para el formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Lógica de validación del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Removemos mensajes de error previamente mostrados
    document.querySelectorAll('.error-message').forEach(function(element) {
        element.style.display = 'none';
    });

    // Validación de los campos del formulario
    if (name === '') {
        displayErrorMessage('Por favor, ingrese su nombre.', 'name');
        return;
    }

    if (email === '') {
        displayErrorMessage('Por favor, ingrese su correo electrónico.', 'email');
        return;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        displayErrorMessage('Por favor, ingrese un correo electrónico válido.', 'email');
        return;
    }

    if (message === '') {
        displayErrorMessage('Por favor, ingrese su mensaje.', 'message');
        return;
    }

    // Envío del formulario (simulado)
    alert('Mensaje enviado correctamente.'); // Mensaje de envío correcto en español
    document.getElementById('contact-form').reset(); // Reiniciar el formulario
});
