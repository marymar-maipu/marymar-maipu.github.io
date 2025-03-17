/* INDEX: CARGA DE IMÁGENES */
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene la ruta completa
    let ruta = window.location.pathname.toLowerCase();

    // Verifica si la ruta es exactamente "/dev/index.html"
    if (ruta === "/dev/index.html" || ruta === "/dev/") {
        cargarImagenes();
    }
});

function cargarImagenes() {
    const contenedor = document.getElementById("carta");
    if (!contenedor) return; // Si no existe la sección, no hacer nada

    let imagenes = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8A.jpg", "8B.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16A.jpg", "16B.jpg", "17A.jpg", "17B.png", "18.jpg", "19A.jpg", "19B.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27A.jpg", "27B.jpg", "28A.jpg", "28B.jpg", "29A.jpg", "29B.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34A.jpg", "34B.jpg", "34C.jpg", "34D.jpg"];

    let grupos = {};

    imagenes.sort((a, b) => {
        let numA = a.match(/\d+/)[0], letraA = a.replace(numA, '');
        let numB = b.match(/\d+/)[0], letraB = b.replace(numB, '');
        return numA - numB || letraA.localeCompare(letraB);
    });

    imagenes.forEach(nombre => {
        let numero = nombre.match(/\d+/)[0];
        if (!grupos[numero]) grupos[numero] = [];
        grupos[numero].push(nombre);
    });

    for (let num in grupos) {
        if (grupos[num].length > 1) {
            let grupoDiv = document.createElement("div");
            grupoDiv.classList.add("grupo");

            grupos[num].forEach(img => {
                let imagen = crearImagenGrupal(`/dev/img/carta/${img}`);
                grupoDiv.appendChild(imagen);
            });

            contenedor.appendChild(grupoDiv);
        } else {
            let imagen = crearImagen(`/dev/img/carta/${grupos[num][0]}`);
            contenedor.appendChild(imagen);
        }
    }

    activarLazyLoading();
}
function crearImagenGrupal(src) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.dataset.src = src;
    img.alt = "Carta";
    img.classList.add("grouped-image-lazy");
    div.appendChild(img);
    return div;
}
function crearImagen(src) {
    let img = document.createElement("img");
    img.dataset.src = src; // Se carga solo cuando aparece en pantalla
    img.classList.add("lazy");
    img.alt = "Carta";
    return img;
}

function activarLazyLoading() {
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src; // Asigna el src real
                img.removeAttribute("data-src");
                img.classList.add("loaded"); // Agregar clase para efecto
                observer.unobserve(img); // Deja de observar esta imagen
            }
        });
    }, { rootMargin: "100px" }); // Precarga antes de que aparezca
    document.querySelectorAll("img.grouped-image-lazy").forEach(img => observer.observe(img));
    document.querySelectorAll("img.lazy").forEach(img => observer.observe(img));
}