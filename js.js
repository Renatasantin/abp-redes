// Función para desplazamiento suave cuando se hace clic en los enlaces
document.addEventListener("DOMContentLoaded", function() {
    const enlaces = document.querySelectorAll("nav a");

    // Recorremos todos los enlaces de la barra de navegación
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(e) {
            e.preventDefault();  // Prevenir el comportamiento por defecto del enlace

            const destino = document.querySelector(this.getAttribute("href"));
            
            // Desplazarse suavemente hasta la sección correspondiente
            window.scrollTo({
                top: destino.offsetTop - 50,  // Ajustamos la posición para que no quede pegado al top
                behavior: "smooth"
            });
        });
    });

    // Mostrar una alerta cuando la página cargue
    alert("¡Bienvenido! Explora el impacto de las redes sociales en los adolescentes.");
});
