// Agregar un evento al formulario para manejar su envío
document.forms["quizForm"].addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    let respuestas = [
        "false", //1
        "true",  //2
        "true", //3
        "false", //4
        "true", //5
        "true", //6
        "false", //7
        "true", //8
        "false", //9
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
            resultadoPorPregunta.classList.add("tamano-personalizado");
            resultadoPorPregunta.style.color = "white"
            resultadoPorPregunta.style.borderRadius  = "10px"
            resultadoPorPregunta.style.height  = "29px"
            resultadoPorPregunta.style.paddingBottom  = "10px"
            resultadoPorPregunta.style.paddingLeft  = "20px"

            // Agregar una imagen
            // const nuevaImagen = document.createElement('img');
            // nuevaImagen.src = 'tick.jpg';
            // resultadoPorPregunta.appendChild(nuevaImagen);
        } else {
            // Respuesta incorrecta
            resultadoPorPregunta.textContent = "Incorrecto";
            resultadoPorPregunta.classList.add("tamano-personalizado");
            resultadoPorPregunta.style.backgroundColor = "rgb(246, 58, 45)";
            resultadoPorPregunta.style.color = "white"
            resultadoPorPregunta.style.borderRadius  = "10px"
            resultadoPorPregunta.style.height  = "29px"
            resultadoPorPregunta.style.paddingBottom  = "10px"
            resultadoPorPregunta.style.paddingLeft  = "20px"
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
    infoPregunta1.innerHTML = "Falso, La afirmación es incorrecta. Las funciones flecha (arrow functions) en JavaScript no siempre retornan un valor booleano 'Verdadero' o 'Falso'. De hecho, el valor de retorno de una función flecha depende de lo que contenga su cuerpo y puede ser de cualquier tipo de datos válido en JavaScript, como números, cadenas, objetos, arreglos o incluso undefined.";

    infoPregunta2.innerHTML = "Verdadero, Las funciones flecha (arrow functions) en JavaScript permiten escribir de forma más compacta y concisa las funciones. Son una alternativa a las funciones declaradas con la palabra reservada 'function' y son particularmente útiles en situaciones donde se requieren funciones pequeñas y simples.";

    infoPregunta3.innerHTML = "Verdadero.  El operador typeof en JavaScript se utiliza para obtener el tipo de dato de una variable o expresión. Puedes utilizarlo para determinar si una variable es de tipo número, cadena, objeto, función, booleano, undefined, null, entre otros.";

    infoPregunta4.innerHTML = "Falso, La afirmación es incorrecta. El método sort() de los arrays en JavaScript no se utiliza para quitar valores de un array, sino para ordenar los elementos del array en su lugar (es decir, modifica el array original).";

    infoPregunta5.innerHTML = "Verdadero, La afirmación es verdadera. El método filter() de los arrays en JavaScript se utiliza para crear un nuevo array que contiene solo los elementos que cumplan con cierta condición.";

    infoPregunta6.innerHTML = "Verdadero. El método sort() en JavaScript se utiliza para ordenar los elementos de un arreglo (array) de forma local, lo que significa que reordena el array original. Esto significa que el array en sí mismo se modifica y se reorganiza en el lugar según el criterio de ordenamiento especificado o el orden predeterminado (orden lexicográfico para cadenas y orden numérico para números).";

    infoPregunta7.innerHTML = "Falso, La afirmación es incorrecta. El método filter() en JavaScript no modifica los elementos del array original. En cambio, crea y devuelve un nuevo array que contiene solo los elementos que cumplen con cierta condición de filtrado, sin afectar al array original.";

    infoPregunta8.innerHTML = "Verdadero, El método sort() de los arrays en JavaScript tiene como parámetro opcional una función de comparación que permite especificar cómo se ordenarán los elementos. Esta función de comparación se utiliza para determinar el orden relativo de dos elementos del array y, en consecuencia, cómo se realizará el ordenamiento.";

    infoPregunta9.innerHTML = "Falso";

    infoPregunta10.innerHTML = "Verdadero";

})



//codigo viejo guardado por si acaso
// function verificarRespuestas(){

//     let total = 10;
//     let puntos = 0;

//     let myForm = document.forms["quizForm"];
    // let respuestas = [
    // "false", //1
    // "true",  //2
    // "true", //3
    // "false", //4
    // "true", //5
    // "true", //6
    // "false", //7
    // "true", //8
    // "false", //9
    // "true"]; //10

//     let resultadoTotal = document.getElementById("resultadoTotal");
   
//     for(let i = 1; i <= total; i++){
//         if(myForm["question" + i].value === null || myForm["question" + i].value === ""){
//             resultadoTotal.innerHTML = "Te han faltado preguntas por responder"
//             return false;
//         }else{
//             if(myForm["question" + i].value === respuestas[i - 1]){
//                 puntos++;
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
//     resultadoPorPregunta1.innerHTML = "Falso, La afirmación es incorrecta. Las funciones flecha (arrow functions) en JavaScript no siempre retornan un valor booleano 'Verdadero' o 'Falso'. De hecho, el valor de retorno de una función flecha depende de lo que contenga su cuerpo y puede ser de cualquier tipo de datos válido en JavaScript, como números, cadenas, objetos, arreglos o incluso undefined.";

//     resultadoPorPregunta2.innerHTML = "Verdadero, Las funciones flecha (arrow functions) en JavaScript permiten escribir de forma más compacta y concisa las funciones. Son una alternativa a las funciones declaradas con la palabra reservada 'function' y son particularmente útiles en situaciones donde se requieren funciones pequeñas y simples.";

//     resultadoPorPregunta3.innerHTML = "Verdadero.  El operador typeof en JavaScript se utiliza para obtener el tipo de dato de una variable o expresión. Puedes utilizarlo para determinar si una variable es de tipo número, cadena, objeto, función, booleano, undefined, null, entre otros.";

//     resultadoPorPregunta4.innerHTML = "Falso, La afirmación es incorrecta. El método sort() de los arrays en JavaScript no se utiliza para quitar valores de un array, sino para ordenar los elementos del array en su lugar (es decir, modifica el array original).";

//     resultadoPorPregunta5.innerHTML = "Verdadero, La afirmación es verdadera. El método filter() de los arrays en JavaScript se utiliza para crear un nuevo array que contiene solo los elementos que cumplan con cierta condición.";

//     resultadoPorPregunta6.innerHTML = "Verdadero. El método sort() en JavaScript se utiliza para ordenar los elementos de un arreglo (array) de forma local, lo que significa que reordena el array original. Esto significa que el array en sí mismo se modifica y se reorganiza en el lugar según el criterio de ordenamiento especificado o el orden predeterminado (orden lexicográfico para cadenas y orden numérico para números).";

//     resultadoPorPregunta7.innerHTML = "Falso, La afirmación es incorrecta. El método filter() en JavaScript no modifica los elementos del array original. En cambio, crea y devuelve un nuevo array que contiene solo los elementos que cumplen con cierta condición de filtrado, sin afectar al array original.";

//     resultadoPorPregunta8.innerHTML = "Verdadero, El método sort() de los arrays en JavaScript tiene como parámetro opcional una función de comparación que permite especificar cómo se ordenarán los elementos. Esta función de comparación se utiliza para determinar el orden relativo de dos elementos del array y, en consecuencia, cómo se realizará el ordenamiento.";

//     resultadoPorPregunta9.innerHTML = "Falso";

//     resultadoPorPregunta10.innerHTML = "Verdadero";

// })
  