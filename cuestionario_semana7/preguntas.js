function verificarRespuestas(){

    let total = 10;
    let puntos = 0;

    let myForm = document.forms["quizForm"];
    let respuestas = ["false","true","true","true","false","false","false","true","true","true"];

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
    resultadoPorPregunta1.innerHTML = "Falso, Git es un sistema de control de versiones utilizado para rastrear cambios en el código fuente de un proyecto, pero no se utiliza para seleccionar o gestionar las versiones de los lenguajes de programación utilizados en dicho proyecto. La elección entre las versiones de un lenguaje de programación se realiza a través de las herramientas de desarrollo y configuración del proyecto, y depende de los requisitos y la compatibilidad del proyecto en cuestión. Git se enfoca en el seguimiento y gestión de las versiones del código fuente en sí mismo.";

    resultadoPorPregunta2.innerHTML = "Verdadero, Cuando subes cambios desde tu repositorio local a GitHub (o a otro repositorio remoto), se utiliza el término 'push'. Un 'push' es una operación en Git que envía tus cambios locales al repositorio remoto correspondiente. Esto permite que otros colaboradores del proyecto accedan a tus cambios y mantengan el código sincronizado entre el repositorio local y el repositorio remoto en GitHub.";

    resultadoPorPregunta3.innerHTML = "Verdadero. Cuando descargas un repositorio de GitHub o de cualquier otro servidor de control de versiones a tu computadora, utilizas la operación de 'clonación'(en inglés, 'clone'). Clonar un repositorio significa crear una copia local completa del repositorio remoto, incluyendo todo el historial de versiones y los archivos. Esta copia se almacena en tu computadora y te permite trabajar con el proyecto de manera local. Por lo tanto, decir que estás 'haciendo un clon' del repositorio es una forma precisa de describir la acción de descargar y crear una copia local de un repositorio remoto.";

    resultadoPorPregunta4.innerHTML = "Verdadero, Un evento en el contexto de la programación web se refiere a algo que sucede en el navegador del usuario, como hacer clic en un botón, mover el mouse, cargar una página web, presionar una tecla, etc. Los eventos son fundamentales para la interactividad en las aplicaciones web, ya que permiten que el código responda a las acciones del usuario y a otros cambios en el entorno del navegador. JavaScript se utiliza comúnmente para manejar eventos y ejecutar funciones en respuesta a ellos, lo que permite crear experiencias interactivas en sitios web y aplicaciones web.";

    resultadoPorPregunta5.innerHTML = "Falso, El atributo HTML addEventListener no se utiliza para escribir código 'in line' en una etiqueta HTML. Se utiliza en JavaScript para adjuntar controladores de eventos a elementos HTML y ejecutar funciones en respuesta a eventos específicos, como clics, movimientos del mouse, entre otros.";

    resultadoPorPregunta6.innerHTML = "Falso. La función fetch en JavaScript se utiliza para realizar solicitudes de red y obtener recursos de una ubicación remota, como un servidor web. Si bien es común utilizar fetch para obtener datos en formato JSON, no está limitada únicamente a ese formato. fetch se puede utilizar para obtener recursos en varios formatos, incluyendo texto, HTML, XML, imágenes, archivos binarios y más.";

    resultadoPorPregunta7.innerHTML = "Falso, Una cadena JSON puede contener tanto objetos como arreglos (arrays) y otros tipos de datos válidos en JSON. JSON es un formato de intercambio de datos que permite la representación de estructuras de datos complejas. Puedes tener objetos JSON, arreglos JSON, cadenas JSON, números JSON, valores booleanos JSON, y null JSON, todo dentro de la misma cadena JSON.";

    resultadoPorPregunta8.innerHTML = "Verdadero, La propiedad innerHTML es una propiedad de los elementos HTML que te permite tanto obtener como modificar el contenido HTML que se encuentra entre las etiquetas de inicio y fin del elemento. Puedes utilizar esta propiedad para acceder al contenido interno de un elemento HTML, que generalmente consiste en texto y otros elementos HTML anidados.";

    resultadoPorPregunta9.innerHTML = "Verdadero, La función fetch en JavaScript devuelve un objeto de tipo Promesa. Esta Promesa se resuelve cuando se completa la solicitud de red y se obtiene un objeto de tipo Response, que representa la respuesta HTTP del servidor.";

    resultadoPorPregunta10.innerHTML = "Verdadero, Para traer cambios desde tu repositorio remoto a tu repositorio local, debes realizar/ejecutar un 'pull'. La operación 'pull' en Git se utiliza para recuperar los cambios que han sido enviados al repositorio remoto por otros colaboradores y fusionarlos en tu rama local. Esto asegura que tu rama local esté actualizada con los cambios más recientes del repositorio remoto.";

})
  