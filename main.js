let icon = document.getElementById("moon-icon");

icon.onclick = function() {
//   document.documentElement.body.classList.toggle("dark-theme");
  document.body.classList.toggle("dark-theme");

  // Añadir la clase para la animación de desvanecimiento
  icon.classList.add('fade-out');

  // Cambiar el ícono después de que la animación de desvanecimiento termine
  setTimeout(() => {
    if (document.body.classList.contains("dark-theme")) {
      icon.src = "./dark theme icon/moon.png";
    } else {
      icon.src = "./dark theme icon/sun.png";
    }
    
    // Remover la clase de desvanecimiento y añadir la de aparición
    icon.classList.remove('fade-out');
    icon.classList.add('fade-in');
  }, 500); // Duración de la animación debe coincidir con la transición en CSS
  
  // Remover la clase de aparición después de que la animación termine
  setTimeout(() => {
    icon.classList.remove('fade-in');
  }, 1000);
}

