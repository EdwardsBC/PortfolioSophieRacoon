document.addEventListener("DOMContentLoaded", () => {
    const tabLinks = document.querySelectorAll('.navbar ul li a');
    const tabContents = document.querySelectorAll('.tab-content');
  
    // Manejo de las secciones (tabs)
    tabLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const contentId = link.getAttribute('data-content');
        const content = document.getElementById(contentId);
  
        // Ocultamos todas las secciones
        tabContents.forEach(tab => {
          tab.style.display = 'none';
        });
  
        // Mostramos la sección correspondiente
        if (content) {
          content.style.display = 'block';
        }
      });
    });
  
    // Función para aplicar zoom al hacer clic en una imagen
    function agregarFuncionalidadZoom(imgElement) {
      imgElement.addEventListener('click', () => {
        const imgFullscreen = document.createElement('img');
        imgFullscreen.src = imgElement.src;
        imgFullscreen.alt = imgElement.alt;
  
        // Estilos para la imagen ampliada
        Object.assign(imgFullscreen.style, {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          backgroundColor: 'rgba(0,0,0,0.9)',
          zIndex: 1000,
          cursor: 'zoom-out'
        });
  
        // Insertamos la imagen en el body
        document.body.appendChild(imgFullscreen);
  
        // Al hacer clic en la imagen ampliada, la cerramos
        imgFullscreen.addEventListener('click', () => {
          document.body.removeChild(imgFullscreen);
        });
      });
    }
  
    // Agregar zoom a todas las imágenes
    const imagenes = document.querySelectorAll('.imagen-container img, .imagen-container-horizontal img');
    imagenes.forEach(img => {
      agregarFuncionalidadZoom(img);
    });
  });
  