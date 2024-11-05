document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const fileName = button.getAttribute('data-file');
            alert(`Descargando ${fileName}... (Función de descarga no implementada en este ejemplo)`);
        });
    });
});