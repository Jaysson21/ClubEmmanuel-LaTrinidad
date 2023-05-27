const carousel = document.querySelector(".carousel");
const firstImg = carousel.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const mostrarOcultarIconos = () => {
    // Mostrar u ocultar el ícono anterior/siguiente según el valor del desplazamiento actual del carrusel
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // Obtener el ancho máximo desplazable
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // Obtener el ancho de la primera imagen y agregar un margen de 14
        // Si el ícono clicado es el de la izquierda, reducir el valor del ancho del carrusel al desplazamiento a la izquierda; de lo contrario, sumarlo
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => mostrarOcultarIconos(), 60); // Llamar a mostrarOcultarIconos después de 60 ms
    });
});

const autoSlide = () => {
    // Si no hay más imágenes por desplazar, se sale de la función
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // Hacer que el valor de positionDiff sea positivo
    let firstImgWidth = firstImg.clientWidth + 14;
    // Obtener el valor de diferencia que se debe sumar o restar al desplazamiento del carrusel para centrar la imagen en el medio
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) { // Si el usuario está desplazándose hacia la derecha
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // Si el usuario está desplazándose hacia la izquierda
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // Actualizar los valores de las variables globales al inicio del arrastre (evento mousedown)
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // Desplazar las imágenes/carrusel hacia la izquierda según la posición del puntero del ratón
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    mostrarOcultarIconos();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

// Eliminar los eventos táctiles
carousel.removeEventListener("touchstart", dragStart);
carousel.removeEventListener("touchmove", dragging);
carousel.removeEventListener("touchend", dragStop);
