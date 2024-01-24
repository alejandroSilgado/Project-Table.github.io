document.addEventListener('DOMContentLoaded', function() {
    var proyectosBtn = document.getElementById('proyectosBtn');
    var proyectosSubmenu = document.getElementById('proyectosSubmenu');

    proyectosBtn.addEventListener('click', function(event) {
        // Detiene la propagación del evento para evitar que se cierre inmediatamente
        event.stopPropagation();

        // Toggle visibility del submenu
        if (proyectosSubmenu.style.display === 'block') {
            proyectosSubmenu.style.display = 'none';
        } else {
            proyectosSubmenu.style.display = 'block';
        }
    });

    // Cierra el submenu si se hace clic fuera de él
    document.addEventListener('click', function() {
        proyectosSubmenu.style.display = 'none';
    });

    // Evita que el clic en el submenu se propague al documento
    proyectosSubmenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
