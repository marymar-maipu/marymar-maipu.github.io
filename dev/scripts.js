//MISCELANEAS
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
//HEADER SHRUNK
window.addEventListener('scroll', function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add('shrunk');
    } else {
      header.classList.remove('shrunk');
    }
  });
//FADE-IN INICIAL
window.addEventListener('DOMContentLoaded', () => {
    const contents = document.querySelectorAll('.initial-fade-in');
    contents.forEach(async content => {
        content.src = content.dataset.src;
        await sleep(1200);
        content.classList.add('visible');
    });
});
//FADE-IN
window.addEventListener('scroll', () => {
    const contents = document.querySelectorAll('.fade-in');
    
    contents.forEach(async content => {
      const contentPosition = content.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (contentPosition < windowHeight * 0.9) {
        content.src = content.dataset.src;
        await sleep(200);
        content.classList.add('visible');
      }
    });
});
//ZOOM DE PANTALLA COMPLETA
document.addEventListener("DOMContentLoaded", function() {
  let path = window.location.pathname;
  if (path === "/dev/index.html" || path === "/dev/") {
    const zoomableImages = document.querySelectorAll(".zoomable");
    const fullscreenContainer = document.getElementById("fullscreenContainer");
    const fullscreenImg = document.getElementById("fullscreenImg");
    const closeBtn = document.getElementById("closeBtn");

    // Función para abrir la imagen en pantalla completa
    zoomableImages.forEach(img => {
        img.addEventListener("click", function() {
            fullscreenImg.src = img.src; // Cargar la imagen seleccionada
            fullscreenContainer.style.visibility = "visible";
            fullscreenContainer.style.opacity = "1";
        });
    });

    // Cerrar al hacer clic en la "X"
    closeBtn.addEventListener("click", closeFullscreen);
    
    // Cerrar al hacer clic fuera de la imagen
    fullscreenContainer.addEventListener("click", function(event) {
        if (event.target === fullscreenContainer) {
            closeFullscreen();
        }
    });

    // Función para cerrar la pantalla completa
    function closeFullscreen() {
        fullscreenContainer.style.opacity = "0";
        setTimeout(() => {
            fullscreenContainer.style.visibility = "hidden";
        }, 300);
    }
  }
});