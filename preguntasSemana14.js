// Agregar un evento al formulario para manejar su envío
document.forms["quizForm"].addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    let respuestas = [
        "true", //1
        "true",  //2
        "false", //3
        "false", //4
        "true", //5
        "false", //6
        "false", //7
        "false", //8
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
    infoPregunta1.innerHTML = "El responsive design se refiere a la práctica de diseñar y desarrollar sitios web y aplicaciones de manera que se adapten y se vean adecuados en una variedad de dispositivos y tamaños de pantalla, como computadoras de escritorio, tabletas y dispositivos móviles.";

    infoPregunta2.innerHTML = "Verdadero. Las unidades relativas en CSS, como por ejemplo porcentajes (%), ems (em), rem (root em), y vw/vh (viewport width/viewport height), permiten que los elementos de diseño se ajusten de manera más flexible a distintos tamaños de pantalla. Al utilizar unidades relativas en lugar de unidades fijas como píxeles (px), los elementos se escalan en relación con el tamaño de la fuente, la ventana gráfica o el contenedor padre, lo que facilita la adaptación del diseño a diferentes dispositivos y tamaños de pantalla. Esto es fundamental en el diseño responsivo para lograr una experiencia de usuario consistente y efectiva en una amplia gama de dispositivos.";

    infoPregunta3.innerHTML = "Falso. Un framework y una librería son conceptos diferentes en el desarrollo de software. Un framework proporciona una estructura general para una aplicación, mientras que una librería ofrece funciones específicas reutilizables. Crear un archivo JS con utilidades no es lo mismo que crear un framework; en este caso, estás creando una librería personalizada.";

    infoPregunta4.innerHTML = "Un CDN (Content Delivery Network) no es una librería en sí misma, sino una red de servidores distribuidos geográficamente que almacenan y entregan contenido, como archivos JavaScript, CSS, imágenes y otros recursos web, de manera eficiente a los usuarios finales. Los CDNs se utilizan para acelerar la carga de contenido en un sitio web al ofrecer estos recursos desde servidores ubicados más cerca de los usuarios, lo que reduce la latencia y mejora la velocidad de carga.";

    infoPregunta5.innerHTML = "Verdadero. En Bootstrap y en otros frameworks de diseño web, un componente se refiere a una pieza de código HTML predefinida que cumple una función específica y se puede utilizar en una página web para agregar ciertas características o elementos de manera más sencilla. Por ejemplo, una barra de navegación, un botón, una tarjeta o un formulario son ejemplos de componentes en Bootstrap. Estos componentes están diseñados para facilitar la creación de interfaces web de manera eficiente y consistente al proporcionar un código HTML y CSS preestablecido para esas funciones, lo que ahorra tiempo y esfuerzo en el desarrollo web.";

    infoPregunta6.innerHTML = "Verdadero. Las media queries en CSS se utilizan para aplicar estilos específicos a un documento web según ciertos criterios relacionados con el tamaño de la pantalla y otras características del dispositivo. Las media queries utilizan selectores CSS para definir condiciones bajo las cuales se aplicarán los estilos. Por ejemplo, se pueden definir reglas de estilo que se apliquen solo cuando la pantalla tenga un ancho máximo o mínimo, o cuando el dispositivo cumpla con ciertas características, como ser una pantalla de impresión o una pantalla con orientación vertical u horizontal. Las media queries son esenciales para el diseño responsivo, ya que permiten adaptar el diseño de un sitio web a diferentes tamaños y tipos de dispositivos.";

    infoPregunta7.innerHTML = "";

    infoPregunta8.innerHTML = "Falso. Bootstrap es un framework de diseño frontend que se enfoca en la capa de presentación de una aplicación web, proporcionando componentes y estilos CSS predefinidos para facilitar la creación de interfaces de usuario atractivas y responsivas. No está diseñado para definir cómo se interactúa con el servidor ni para trabajar directamente con datos en formato JSON. Para manejar la interacción con el servidor y el procesamiento de datos JSON, generalmente se utilizan otras tecnologías, como JavaScript, jQuery, bibliotecas específicas de JavaScript o frameworks de desarrollo web en el lado del cliente y del servidor.";

    infoPregunta9.innerHTML = "Los contenedores flexibles en CSS (utilizando 'display: flex') se utilizan principalmente para el diseño en una sola dimensión, ya sea en una fila o en una columna. No están diseñados para gestionar automáticamente un diseño en múltiples filas y columnas al mismo tiempo.";

    infoPregunta10.innerHTML = "Verdadero. CSS Grid es una forma adecuada de manejar el diseño en múltiples filas y columnas en una página web. CSS Grid es una especificación de CSS que permite crear diseños de cuadrícula bidimensionales de manera muy eficiente. Con CSS Grid, puedes definir filas y columnas en un diseño, colocar elementos en ubicaciones específicas de la cuadrícula y controlar cómo se distribuyen y alinean los elementos en función de las filas y columnas definidas. Es especialmente útil para diseños complejos y estructurados que requieren un mayor control sobre el posicionamiento de elementos en la página.";

});

