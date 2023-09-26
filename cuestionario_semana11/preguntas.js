function verificarRespuestas(){

    let total = 10;
    let puntos = 0;

    let myForm = document.forms["quizForm"];
    let respuestas = [
    "false", //1
    "true",  //2
    "false", //3
    "true", //4
    "true", //5
    "true", //6
    "false", //7
    "true", //8
    "true", //9
    "true"]; //10

    let resultadoTotal = document.getElementById("resultadoTotal");
   
    for(let i = 1; i <= total; i++){
        if(myForm["question" + i].value === null || myForm["question" + i].value === ""){
            resultadoTotal.innerHTML = "Te han faltado preguntas por responder"
            return false;
        }else{
            if(myForm["question" + i].value === respuestas[i - 1]){
                puntos++;
            }        
        }
    }
    
    resultadoTotal.innerHTML = '<h3>Obtuvistes <span>' + puntos + '</span> de <span>' + total + ' puntos</span></h3>';

    return false;
}


let resultadoPorPregunta1 = document.getElementById("resultadoPorPregunta1");
let resultadoPorPregunta2 = document.getElementById("resultadoPorPregunta2");
let resultadoPorPregunta3 = document.getElementById("resultadoPorPregunta3");
let resultadoPorPregunta4 = document.getElementById("resultadoPorPregunta4");
let resultadoPorPregunta5 = document.getElementById("resultadoPorPregunta5");
let resultadoPorPregunta6 = document.getElementById("resultadoPorPregunta6");
let resultadoPorPregunta7 = document.getElementById("resultadoPorPregunta7");
let resultadoPorPregunta8 = document.getElementById("resultadoPorPregunta8");
let resultadoPorPregunta9 = document.getElementById("resultadoPorPregunta9");
let resultadoPorPregunta10 = document.getElementById("resultadoPorPregunta10");


const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function(){
    resultadoPorPregunta1.innerHTML = "Falso, La sigla 'API' representa 'Interfaz de Programación de Aplicaciones' en inglés (Application Programming Interface). No significa 'Apilamiento de Programas Independientes'. Una API proporciona un conjunto de reglas y protocolos que permiten que diferentes aplicaciones informáticas se comuniquen entre sí o accedan a la funcionalidad de un sistema externo. Sin embargo, una API no implica necesariamente apilar un programa sobre otro, sino más bien proporciona una interfaz para interactuar con la funcionalidad de manera controlada y programática.";

    resultadoPorPregunta2.innerHTML = "Verdadero.Un API pública es una interfaz de programación de aplicaciones que se pone a disposición del público en general, lo que significa que cualquier desarrollador puede tener acceso a ella. Estas API públicas suelen ser proporcionadas por empresas o servicios y permiten a los desarrolladores externos utilizar la información y las funcionalidades que ofrecen en sus propias aplicaciones, servicios o proyectos.";

    resultadoPorPregunta3.innerHTML = "Falso.  La afirmación es incorrecta. El concepto de API (Interfaz de Programación de Aplicaciones) no es una funcionalidad reciente en JavaScript ni en la programación en general. Las API han existido durante mucho tiempo en el desarrollo de software y son esenciales para permitir que diferentes aplicaciones se comuniquen entre sí o accedan a la funcionalidad de un sistema externo.";

    resultadoPorPregunta4.innerHTML = "Verdadero, La sigla 'API' representa 'Application Programming Interface' en inglés, que en español se traduce como 'Interfaz de Programación de Aplicaciones.' Efectivamente, una API es un conjunto de definiciones y protocolos que se utilizan para diseñar e integrar el software de las aplicaciones. Una API define la forma en que los componentes de software deben interactuar entre sí, permitiendo que las aplicaciones se comuniquen y compartan funcionalidad de manera controlada y programática.";

    resultadoPorPregunta5.innerHTML = "Verdadero, La función fetch() en JavaScript se utiliza comúnmente para realizar peticiones HTTP a un API en la web. fetch() permite hacer solicitudes GET, POST y otras a recursos en línea, como APIs RESTful, y recibir las respuestas correspondientes. Es una forma moderna y ampliamente utilizada de interactuar con servicios web y recuperar datos desde el lado del cliente en aplicaciones web.";

    resultadoPorPregunta6.innerHTML = "";

    resultadoPorPregunta7.innerHTML = "Falso, Para declarar una función asíncrona en JavaScript, debes utilizar la palabra reservada async antes de la palabra function. No se utiliza la palabra reservada await en la declaración de la función. El uso de await se limita al interior de las funciones asíncronas para esperar la resolución de una Promesa.";

    resultadoPorPregunta8.innerHTML = "Verdadero, La afirmación es verdadera. Para capturar errores en las funciones asíncronas en JavaScript, se pueden utilizar bloques try...catch. Esto permite manejar excepciones que se produzcan dentro de una función asíncrona de manera similar a como se manejarían en una función síncrona.";

    resultadoPorPregunta9.innerHTML = "Verdadero, Para declarar una función como asíncrona en JavaScript, debes utilizar la palabra reservada async antes de la palabra function. Al hacerlo, habilitas la capacidad de utilizar la palabra reservada await dentro de esa función para esperar el resultado de Promesas. La combinación de async y await es una característica fundamental para trabajar con código asíncrono y gestionar Promesas de manera más legible y sincronizada.";

    resultadoPorPregunta10.innerHTML = "";

})
  