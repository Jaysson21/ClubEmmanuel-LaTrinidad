document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const fileName = button.getAttribute('data-file');
            if (!fileName) {
                alert("Error: No se encontró el archivo.");
                return;
            }

            const link = document.createElement('a');
            link.href = fileName;
            link.download = fileName.split('/').pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});
