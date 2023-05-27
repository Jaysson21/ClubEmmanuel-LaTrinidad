const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // Mostrar u ocultar el icono previo/siguiente según el valor de desplazamiento izquierdo del carrusel
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // obteniendo el ancho máximo desplazable
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // obteniendo el ancho de la primera imagen y agregando 14 de valor de margen
        // si el icono clicado es el izquierdo, se resta el valor del ancho desde el desplazamiento izquierdo del carrusel; de lo contrario, se suma
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // llamando a showHideIcons después de 60ms
    });
});

const autoSlide = () => {
    // si no hay imágenes restantes para desplazarse, se retorna desde aquí
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // convirtiendo el valor de positionDiff a positivo
    let firstImgWidth = firstImg.clientWidth + 14;
    // obteniendo el valor de diferencia que se debe agregar o restar desde el desplazamiento izquierdo del carrusel para centrar la imagen del medio
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // si el usuario se desplaza hacia la derecha
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // si el usuario se desplaza hacia la izquierda
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // actualizando el valor de las variables globales en el evento de clic del ratón
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // desplazando las imágenes/carrusel hacia la izquierda según la posición del ratón
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
//carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
//carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
//carousel.addEventListener("touchend", dragStop);
