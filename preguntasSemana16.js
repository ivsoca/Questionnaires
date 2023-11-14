// Agregar un evento al formulario para manejar su envío
document.forms["quizForm"].addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    let respuestas = [
        "true", //1
        "false",  //2
        "true", //3
        "false", //4
        "true", //5
        "true", //6
        "true", //7
        "true", //8
        "true", //9
        "true"]; //10
    let puntuacion = 0; // Variable para llevar la puntuación total

    // Iterar a través de las respuestas y compararlas con las respuestas seleccionadas
    for (let i = 0; i < respuestas.length; i++) {
        const respuestaSeleccionada = document.forms["quizForm"]["question" + (i + 1)].value;
        const resultadoPorPregunta = document.getElementById("resultadoPorPregunta" + (i + 1));
        console.log(resultadoPorPregunta)
        if (respuestaSeleccionada === respuestas[i]) {
            // Respuesta correcta
            puntuacion++;
            resultadoPorPregunta.textContent = "Correcto";
            resultadoPorPregunta.style.backgroundColor = "rgba(49, 202, 6, 0.89)";
            resultadoPorPregunta.style.color = "white"
            resultadoPorPregunta.style.borderRadius  = "20px"
            resultadoPorPregunta.style.height  = "29px"
            resultadoPorPregunta.style.padding  = "4px"

            // Agregar una imagen
            // const nuevaImagen = document.createElement('img');
            // nuevaImagen.src = 'tick.jpg';
            // resultadoPorPregunta.appendChild(nuevaImagen);
        } else {
            // Respuesta incorrecta
            resultadoPorPregunta.textContent = "Incorrecto";
            resultadoPorPregunta.style.backgroundColor = "rgb(246, 58, 45)";
            resultadoPorPregunta.style.color = "white"
            resultadoPorPregunta.style.borderRadius  = "20px"
            resultadoPorPregunta.style.height  = "29px"
            resultadoPorPregunta.style.padding  = "4px"
        }
    }

    // Mostrar la puntuación total
    const resultadoTotal = document.getElementById("resultadoTotal");
    resultadoTotal.textContent = "Puntuación total: " + puntuacion + " / " + respuestas.length;
});

let infoPregunta1 = document.getElementById("infoPregunta1");
let infoPregunta2 = document.getElementById("infoPregunta2");
let infoPregunta3 = document.getElementById("infoPregunta3");
let infoPregunta4 = document.getElementById("infoPregunta4");
let infoPregunta5 = document.getElementById("infoPregunta5");
let infoPregunta6 = document.getElementById("infoPregunta6");
let infoPregunta7 = document.getElementById("infoPregunta7");
let infoPregunta8 = document.getElementById("infoPregunta8");
let infoPregunta9 = document.getElementById("infoPregunta9");
let infoPregunta10 = document.getElementById("infoPregunta10");


const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function(){
    infoPregunta1.innerHTML = "Respuesta correcta: 'b' Node.js es un entorno de ejecución de JavaScript del lado del servidor que permite a los desarrolladores utilizar JavaScript para escribir código del lado del servidor. Es ampliamente utilizado para crear aplicaciones web, incluyendo la creación de APIs RESTful. Node.js no está incorporado en el navegador web ni proporciona acceso directo a elementos HTML mediante el objeto document, ya que ese es un objeto del entorno del navegador, no del entorno de Node.js. Además, Node.js no es un conjunto de técnicas y buenas prácticas, sino un entorno de ejecución.";

    infoPregunta2.innerHTML = "Falso. El archivo package.json en Node.js se utiliza para describir el proyecto y sus dependencias, pero no se utiliza para configurar los endpoints de un API. La configuración de los endpoints de un API generalmente se realiza en archivos específicos para el enrutamiento, como parte del código fuente de la aplicación. El package.json generalmente contiene información sobre el proyecto, scripts de ejecución, dependencias y otra metadata relacionada con el proyecto, pero no está directamente vinculado a la configuración de los endpoints de una API.";

    infoPregunta3.innerHTML = "Verdadero.  Para crear un archivo package.json básico, puedes ejecutar el comando npm init en la terminal. Este comando te hará una serie de preguntas interactivas sobre la configuración de tu proyecto, como el nombre, la versión, la descripción, el punto de entrada del script, las pruebas de comando, el repositorio, las palabras clave y el autor. Una vez que hayas respondido a estas preguntas, se generará un archivo package.json con la información proporcionada.";

    infoPregunta4.innerHTML = "Respuesta correcta: 'a'.Cada aplicación o proceso que utiliza un servidor web debe ocupar un puerto único en el sistema operativo. Si dos aplicaciones intentan utilizar el mismo puerto al mismo tiempo, habrá un conflicto y la segunda aplicación que intente utilizar ese puerto recibirá un error. Es importante que los puertos estén correctamente configurados para evitar conflictos y garantizar que cada aplicación pueda ejecutarse correctamente.";

    infoPregunta5.innerHTML = "La función require en Node.js se utiliza para importar módulos en archivos JavaScript. Permite acceder a funciones, objetos u otros elementos definidos en otros archivos o módulos para su uso en el archivo actual. No se utiliza para ejecutar un servidor web, realizar peticiones asíncronas como el fetch, ni crear un API directamente; su función principal es facilitar la modularidad en el desarrollo de aplicaciones en Node.js.";

    infoPregunta6.innerHTML = "Verdadero. Las media queries en CSS se utilizan para aplicar estilos específicos a un documento web según ciertos criterios relacionados con el tamaño de la pantalla y otras características del dispositivo. Las media queries utilizan selectores CSS para definir condiciones bajo las cuales se aplicarán los estilos. Por ejemplo, se pueden definir reglas de estilo que se apliquen solo cuando la pantalla tenga un ancho máximo o mínimo, o cuando el dispositivo cumpla con ciertas características, como ser una pantalla de impresión o una pantalla con orientación vertical u horizontal. Las media queries son esenciales para el diseño responsivo, ya que permiten adaptar el diseño de un sitio web a diferentes tamaños y tipos de dispositivos.";

    infoPregunta7.innerHTML = "";

    infoPregunta8.innerHTML = "Respuesta correcta: 'b'.npm es la herramienta de gestión de paquetes para Node.js. Permite a los desarrolladores instalar, compartir y gestionar las dependencias de sus proyectos de Node.js. Además, facilita la instalación de paquetes de código abierto y su integración en proyectos, lo que simplifica el proceso de desarrollo en entornos Node.js.";

    infoPregunta9.innerHTML = "Respuesta correcta: 'c'.Los contenedores flexibles en CSS (utilizando 'display: flex') se utilizan principalmente para el diseño en una sola dimensión, ya sea en una fila o en una columna. No están diseñados para gestionar automáticamente un diseño en múltiples filas y columnas al mismo tiempo.";

    infoPregunta10.innerHTML = "Respuesta correcta: 'd'.En Express, los parámetros de la URL se definen precediendo el nombre del parámetro con dos puntos (:) en la ruta. Estos parámetros se pueden acceder utilizando req.params. Por ejemplo, en una ruta como '/usuarios/:id', el valor de 'id' se puede acceder mediante req.params.id. Los parámetros de la URL son útiles para capturar valores específicos en las solicitudes y utilizarlos en el manejo de rutas.";

});

