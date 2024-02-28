document.addEventListener("DOMContentLoaded", function() {
    var tabs = document.querySelectorAll('.navbar ul li a');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(event) {
            var contentId = tab.getAttribute('data-content');
            var content = document.getElementById(contentId);

            if (contentId === "Reel") {
                var password = prompt("Por favor ingresa la contraseña:");
                // Aquí debes verificar la contraseña ingresada
                if (password !== "mcd182604") {
                    alert("Contraseña incorrecta. Inténtalo de nuevo.");
                    return;
                }
            }
            var allContents = document.querySelectorAll('.tab-content');
            allContents.forEach(function(item) {
                item.style.display = 'none';
            });
            content.style.display = 'block';

            event.preventDefault();
        });
    });

    var imagenes = document.querySelectorAll('.imagen-container img');
    imagenes.forEach(function(imagen) {
        imagen.addEventListener('click', function(event) {
            var imgFullscreen = document.createElement('img');
            imgFullscreen.src = imagen.src;
            imgFullscreen.alt = imagen.alt;

            imgFullscreen.style.position = 'fixed';
            imgFullscreen.style.top = '0';
            imgFullscreen.style.left = '0';
            imgFullscreen.style.width = '100%';
            imgFullscreen.style.height = '100%';
            imgFullscreen.style.objectFit = 'contain';
            imgFullscreen.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            imgFullscreen.style.zIndex = '9999';
            imgFullscreen.style.cursor = 'zoom-out';

            document.body.appendChild(imgFullscreen);

            imgFullscreen.addEventListener('click', function() {
                document.body.removeChild(imgFullscreen);
            });
        });
    });
});
