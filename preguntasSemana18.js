// Agregar un evento al formulario para manejar su envío
document.forms["quizForm"].addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    let respuestas = [
        "true", //1
        "true",  //2
        "false", //3
        "false", //4
        "false", //5
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
            resultadoPorPregunta.style.height  = "20px"
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
            resultadoPorPregunta.style.height  = "20px"
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
    infoPregunta1.innerHTML = "El lenguaje que se utiliza para interactuar con una base de datos relacional se llama SQL, que significa 'Structured Query Language' (Lenguaje de Consulta Estructurado). SQL es un lenguaje de programación especializado diseñado para gestionar y manipular datos en bases de datos relacionales. Se utiliza para realizar tareas como la creación de tablas, la inserción, actualización y eliminación de datos, así como la consulta de datos almacenados en una base de datos relacional.";

    infoPregunta2.innerHTML = "La librería 'mariadb' es una opción, pero no es la única forma de conectarse a una base de datos MariaDB, ya que la compatibilidad con la librería 'mysql' es ampliamente aceptada.";

    infoPregunta3.innerHTML = "La afirmación es falsa. Para crear una base de datos en MariaDB o en cualquier sistema de gestión de bases de datos (DBMS), no se utiliza Node.js directamente. Node.js es un entorno de tiempo de ejecución de JavaScript que se utiliza comúnmente para desarrollar aplicaciones del lado del servidor, incluyendo aplicaciones web. Para crear una base de datos en MariaDB, normalmente se utiliza SQL (Structured Query Language), que es un lenguaje específico para gestionar bases de datos.";

    infoPregunta4.innerHTML = "Falso. Para interactuar con un servidor de bases de datos, generalmente no se utilizan clientes web como Postman. Postman es una herramienta diseñada principalmente para probar y documentar APIs web mediante solicitudes HTTP. No es una herramienta destinada específicamente para interactuar con bases de datos.";

    infoPregunta5.innerHTML = "Falso, CRUD es el acrónimo de Create (Crear), Read (Leer), Update (Actualizar) y Delete (Borrar).";

    infoPregunta6.innerHTML = " El comando 'SELECT' se utiliza para recuperar datos de una tabla o realizar consultas en una base de datos. Permite especificar las columnas que deseas recuperar, las condiciones de búsqueda y otros criterios para obtener los datos deseados de la tabla.";

    infoPregunta7.innerHTML = "";

    infoPregunta8.innerHTML = "";

    infoPregunta9.innerHTML = "";

    infoPregunta10.innerHTML = "La palabra 'localhost' cuando se configura MariaDB (y en general en muchas aplicaciones de software) se refiere a que el servidor se está ejecutando en la propia computadora o en la misma máquina donde se está realizando la configuración. Es una forma de referirse a la dirección IP de loopback, que siempre se traduce a la dirección IP local de la computadora (127.0.0.1 en la mayoría de los sistemas).";

});

