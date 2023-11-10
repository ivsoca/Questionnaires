// Agregar un evento al formulario para manejar su envío
document.forms["quizForm"].addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    let respuestas = ["false","true","true","true","false","false","false","true","true","true"];
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
    infoPregunta1.innerHTML = "Falso, Git es un sistema de control de versiones utilizado para rastrear cambios en el código fuente de un proyecto, pero no se utiliza para seleccionar o gestionar las versiones de los lenguajes de programación utilizados en dicho proyecto. La elección entre las versiones de un lenguaje de programación se realiza a través de las herramientas de desarrollo y configuración del proyecto, y depende de los requisitos y la compatibilidad del proyecto en cuestión. Git se enfoca en el seguimiento y gestión de las versiones del código fuente en sí mismo.";

    infoPregunta2.innerHTML = "Verdadero, Cuando subes cambios desde tu repositorio local a GitHub (o a otro repositorio remoto), se utiliza el término 'push'. Un 'push' es una operación en Git que envía tus cambios locales al repositorio remoto correspondiente. Esto permite que otros colaboradores del proyecto accedan a tus cambios y mantengan el código sincronizado entre el repositorio local y el repositorio remoto en GitHub.";

    infoPregunta3.innerHTML = "Verdadero. Cuando descargas un repositorio de GitHub o de cualquier otro servidor de control de versiones a tu computadora, utilizas la operación de 'clonación'(en inglés, 'clone'). Clonar un repositorio significa crear una copia local completa del repositorio remoto, incluyendo todo el historial de versiones y los archivos. Esta copia se almacena en tu computadora y te permite trabajar con el proyecto de manera local. Por lo tanto, decir que estás 'haciendo un clon' del repositorio es una forma precisa de describir la acción de descargar y crear una copia local de un repositorio remoto.";

    infoPregunta4.innerHTML = "Verdadero, Un evento en el contexto de la programación web se refiere a algo que sucede en el navegador del usuario, como hacer clic en un botón, mover el mouse, cargar una página web, presionar una tecla, etc. Los eventos son fundamentales para la interactividad en las aplicaciones web, ya que permiten que el código responda a las acciones del usuario y a otros cambios en el entorno del navegador. JavaScript se utiliza comúnmente para manejar eventos y ejecutar funciones en respuesta a ellos, lo que permite crear experiencias interactivas en sitios web y aplicaciones web.";

    infoPregunta5.innerHTML = "Falso, El atributo HTML addEventListener no se utiliza para escribir código 'in line' en una etiqueta HTML. Se utiliza en JavaScript para adjuntar controladores de eventos a elementos HTML y ejecutar funciones en respuesta a eventos específicos, como clics, movimientos del mouse, entre otros.";

    infoPregunta6.innerHTML = "Falso. La función fetch en JavaScript se utiliza para realizar solicitudes de red y obtener recursos de una ubicación remota, como un servidor web. Si bien es común utilizar fetch para obtener datos en formato JSON, no está limitada únicamente a ese formato. fetch se puede utilizar para obtener recursos en varios formatos, incluyendo texto, HTML, XML, imágenes, archivos binarios y más.";

    infoPregunta7.innerHTML = "Falso, Una cadena JSON puede contener tanto objetos como arreglos (arrays) y otros tipos de datos válidos en JSON. JSON es un formato de intercambio de datos que permite la representación de estructuras de datos complejas. Puedes tener objetos JSON, arreglos JSON, cadenas JSON, números JSON, valores booleanos JSON, y null JSON, todo dentro de la misma cadena JSON.";

    infoPregunta8.innerHTML = "Verdadero, La propiedad innerHTML es una propiedad de los elementos HTML que te permite tanto obtener como modificar el contenido HTML que se encuentra entre las etiquetas de inicio y fin del elemento. Puedes utilizar esta propiedad para acceder al contenido interno de un elemento HTML, que generalmente consiste en texto y otros elementos HTML anidados.";

    infoPregunta9.innerHTML = "Verdadero, La función fetch en JavaScript devuelve un objeto de tipo Promesa. Esta Promesa se resuelve cuando se completa la solicitud de red y se obtiene un objeto de tipo Response, que representa la respuesta HTTP del servidor.";

    infoPregunta10.innerHTML = "Verdadero, Para traer cambios desde tu repositorio remoto a tu repositorio local, debes realizar/ejecutar un 'pull'. La operación 'pull' en Git se utiliza para recuperar los cambios que han sido enviados al repositorio remoto por otros colaboradores y fusionarlos en tu rama local. Esto asegura que tu rama local esté actualizada con los cambios más recientes del repositorio remoto.";
    
});






//codigo viejo guardado por si acaso

// function agregarParrafos() {
//     // Obtén todos los elementos <div> dentro del formulario
//     var divs = document.querySelectorAll('form div');

//     // Define el texto del párrafo que deseas agregar
//     var parrafoTexto = 'Este es un párrafo agregado dinámicamente.';

//     // Itera sobre cada div y agrega un párrafo en cada uno
//     for (var i = 0; i < divs.length; i++) {
//         var div = divs[i];

//         // Crea un elemento de párrafo (<p>)
//         var parrafo = document.createElement('p');

//         // Agrega el texto al párrafo
//         parrafo.textContent = parrafoTexto;

//         // Agrega el párrafo al div actual
//         div.appendChild(parrafo);
//     }
// }

// agrega la imagen de correcto el "tick"
// function addphotos(){
//     let contenedor = document.getElementById("container-img")
//     let nuevaImagen = document.createElement("img");
//     nuevaImagen.src = "tick.jpg"

//     contenedor.appendChild(nuevaImagen);
// }

// function imagenesPut(){
//     let respuestas = ["false","true","true","true","false","false","false","true","true","true"];
//     let myForm = document.forms["quizForm"];

// const divs = document.querySelectorAll('.mi-div');

//     divs.forEach((div, index) => {
//         // Aquí puedes poner la condición que deseas para cada div.
//         // Por ejemplo, agrega una imagen si el índice es par
//         if (myForm["question" + (index + 1)].value === respuestas[index]) {
//             // // Crea una nueva imagen
//             alert("sdsa")
//             const nuevaImagen = document.createElement('img');
//             nuevaImagen.src = 'tick.jpg';
            
//             // // Agrega la imagen al div actual
//             div.appendChild(nuevaImagen);
//             alert("sdsd")
           
//         }
//     });
// }



// function verificarRespuestas(){

//     let total = 10;
//     let puntos = 0;

//     let respuestas = ["false","true","true","true","false","false","false","true","true","true"];
//     let myForm = document.forms["quizForm"];


//     let resultadoTotal = document.getElementById("resultadoTotal");
   
//     for(let i = 1; i <= total; i++){
//         if(myForm["question" + i].value === null || myForm["question" + i].value === ""){
//             resultadoTotal.innerHTML = "Te han faltado preguntas por responder"
//             return false;
//         }else{
//             if(myForm["question" + i].value === respuestas[i - 1]){
//                 puntos++;
//                 // let elemento = document.querySelector(".contenedorImagenes")
//                 // elemento.style.color = 'red';      
//             }
//         }    
//     }
   
//     resultadoTotal.innerHTML = '<h3>Obtuvistes <span>' + puntos + '</span> de <span>' + total + ' puntos</span></h3>';
    
//     return false;
// }





// let resultadoPorPregunta1 = document.getElementById("resultadoPorPregunta1");
// let resultadoPorPregunta2 = document.getElementById("resultadoPorPregunta2");
// let resultadoPorPregunta3 = document.getElementById("resultadoPorPregunta3");
// let resultadoPorPregunta4 = document.getElementById("resultadoPorPregunta4");
// let resultadoPorPregunta5 = document.getElementById("resultadoPorPregunta5");
// let resultadoPorPregunta6 = document.getElementById("resultadoPorPregunta6");
// let resultadoPorPregunta7 = document.getElementById("resultadoPorPregunta7");
// let resultadoPorPregunta8 = document.getElementById("resultadoPorPregunta8");
// let resultadoPorPregunta9 = document.getElementById("resultadoPorPregunta9");
// let resultadoPorPregunta10 = document.getElementById("resultadoPorPregunta10");


// const btn1 = document.getElementById('btn1');

// btn1.addEventListener('click', function(){
//     resultadoPorPregunta1.innerHTML = "Falso, Git es un sistema de control de versiones utilizado para rastrear cambios en el código fuente de un proyecto, pero no se utiliza para seleccionar o gestionar las versiones de los lenguajes de programación utilizados en dicho proyecto. La elección entre las versiones de un lenguaje de programación se realiza a través de las herramientas de desarrollo y configuración del proyecto, y depende de los requisitos y la compatibilidad del proyecto en cuestión. Git se enfoca en el seguimiento y gestión de las versiones del código fuente en sí mismo.";

//     resultadoPorPregunta2.innerHTML = "Verdadero, Cuando subes cambios desde tu repositorio local a GitHub (o a otro repositorio remoto), se utiliza el término 'push'. Un 'push' es una operación en Git que envía tus cambios locales al repositorio remoto correspondiente. Esto permite que otros colaboradores del proyecto accedan a tus cambios y mantengan el código sincronizado entre el repositorio local y el repositorio remoto en GitHub.";

//     resultadoPorPregunta3.innerHTML = "Verdadero. Cuando descargas un repositorio de GitHub o de cualquier otro servidor de control de versiones a tu computadora, utilizas la operación de 'clonación'(en inglés, 'clone'). Clonar un repositorio significa crear una copia local completa del repositorio remoto, incluyendo todo el historial de versiones y los archivos. Esta copia se almacena en tu computadora y te permite trabajar con el proyecto de manera local. Por lo tanto, decir que estás 'haciendo un clon' del repositorio es una forma precisa de describir la acción de descargar y crear una copia local de un repositorio remoto.";

//     resultadoPorPregunta4.innerHTML = "Verdadero, Un evento en el contexto de la programación web se refiere a algo que sucede en el navegador del usuario, como hacer clic en un botón, mover el mouse, cargar una página web, presionar una tecla, etc. Los eventos son fundamentales para la interactividad en las aplicaciones web, ya que permiten que el código responda a las acciones del usuario y a otros cambios en el entorno del navegador. JavaScript se utiliza comúnmente para manejar eventos y ejecutar funciones en respuesta a ellos, lo que permite crear experiencias interactivas en sitios web y aplicaciones web.";

//     resultadoPorPregunta5.innerHTML = "Falso, El atributo HTML addEventListener no se utiliza para escribir código 'in line' en una etiqueta HTML. Se utiliza en JavaScript para adjuntar controladores de eventos a elementos HTML y ejecutar funciones en respuesta a eventos específicos, como clics, movimientos del mouse, entre otros.";

//     resultadoPorPregunta6.innerHTML = "Falso. La función fetch en JavaScript se utiliza para realizar solicitudes de red y obtener recursos de una ubicación remota, como un servidor web. Si bien es común utilizar fetch para obtener datos en formato JSON, no está limitada únicamente a ese formato. fetch se puede utilizar para obtener recursos en varios formatos, incluyendo texto, HTML, XML, imágenes, archivos binarios y más.";

//     resultadoPorPregunta7.innerHTML = "Falso, Una cadena JSON puede contener tanto objetos como arreglos (arrays) y otros tipos de datos válidos en JSON. JSON es un formato de intercambio de datos que permite la representación de estructuras de datos complejas. Puedes tener objetos JSON, arreglos JSON, cadenas JSON, números JSON, valores booleanos JSON, y null JSON, todo dentro de la misma cadena JSON.";

//     resultadoPorPregunta8.innerHTML = "Verdadero, La propiedad innerHTML es una propiedad de los elementos HTML que te permite tanto obtener como modificar el contenido HTML que se encuentra entre las etiquetas de inicio y fin del elemento. Puedes utilizar esta propiedad para acceder al contenido interno de un elemento HTML, que generalmente consiste en texto y otros elementos HTML anidados.";

//     resultadoPorPregunta9.innerHTML = "Verdadero, La función fetch en JavaScript devuelve un objeto de tipo Promesa. Esta Promesa se resuelve cuando se completa la solicitud de red y se obtiene un objeto de tipo Response, que representa la respuesta HTTP del servidor.";

//     resultadoPorPregunta10.innerHTML = "Verdadero, Para traer cambios desde tu repositorio remoto a tu repositorio local, debes realizar/ejecutar un 'pull'. La operación 'pull' en Git se utiliza para recuperar los cambios que han sido enviados al repositorio remoto por otros colaboradores y fusionarlos en tu rama local. Esto asegura que tu rama local esté actualizada con los cambios más recientes del repositorio remoto.";

    
// });


