// ===================================
// MENÚ HAMBURGUESA
// ===================================

const menuBtn =
document.getElementById("menu-btn");

const menu =
document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

});

// ===================================
// TARJETAS DESPLEGABLES
// ===================================

const botones =
document.querySelectorAll(".toggle-btn");

botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        const info =
        boton.nextElementSibling;

        if(info.style.display === "block"){

            info.style.display = "none";

            boton.innerHTML =
            "▼ Ver más";

        }else{

            info.style.display = "block";

            boton.innerHTML =
            "▲ Ver menos";

        }

    });

});

// ===================================
// VALIDACIÓN FORMULARIO
// ===================================

const formulario =
document.getElementById("formulario");

formulario.addEventListener(
"submit",
function(event){

    const correo =
    document
    .getElementById("correo")
    .value;

    const edad =
    document
    .getElementById("edad")
    .value;

    const mensaje =
    document
    .getElementById("mensaje");

    const expresionCorreo =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(
    !expresionCorreo.test(correo)
    ){

        event.preventDefault();

        mensaje.innerHTML =
        "❌ Correo inválido";

        mensaje.style.color =
        "red";

        return;

    }

    if(
    edad < 10 ||
    edad > 100
    ){

        event.preventDefault();

        mensaje.innerHTML =
        "❌ Edad inválida";

        mensaje.style.color =
        "red";

        return;

    }

    mensaje.innerHTML =
    "✅ Información enviada correctamente";

    mensaje.style.color =
    "green";

});

// ===================================
// CONTADORES ANIMADOS
// ===================================

function animarContador(
id,
objetivo
){

    let contador = 0;

    const elemento =
    document.getElementById(id);

    const velocidad =
    objetivo / 100;

    const intervalo =
    setInterval(() => {

        contador += velocidad;

        elemento.innerHTML =
        Math.floor(contador);

        if(
        contador >= objetivo
        ){

            elemento.innerHTML =
            objetivo;

            clearInterval(
            intervalo
            );

        }

    },20);

}

animarContador(
"contador1",
15
);

animarContador(
"contador2",
8
);

animarContador(
"contador3",
20
);

// ===================================
// CHATBOT
// ===================================

const robot =
document.getElementById("robot");

const chatMini =
document.getElementById("chatMini");

const globoBot =
document.getElementById("globoBot");

robot.addEventListener("click",()=>{

    if(chatMini.style.display==="block"){

        chatMini.style.display="none";

        globoBot.style.display="block";

    }else{

        chatMini.style.display="block";

        globoBot.style.display="none";

    }

});

// ===================================
// BLATZBOT IA SIMULADA
// ===================================

const botonEnviar =
document.getElementById(
"enviarBot"
);

botonEnviar.addEventListener(
"click",
responderBot
);

function responderBot(){

    let pregunta =
    document
    .getElementById("pregunta")
    .value
    .trim()
    .toLowerCase();

    if(
    pregunta === ""
    ){
        return;
    }

    let respuesta = "";

    // SALUDOS

    if(
    pregunta.includes("hola") ||
    pregunta.includes("buenas")
    ){

        respuesta =
        "👋 Hola, soy BlatzBot. Estoy listo para ayudarte con tecnología, programación e inteligencia artificial.";

    }

    // IDENTIDAD

    else if(
    pregunta.includes("quien eres") ||
    pregunta.includes("qué eres")
    ){

        respuesta =
        "🤖 Soy BlatzBot, un asistente virtual creado para ayudarte a aprender programación, IA, IoT y desarrollo web.";

    }

    // HTML

    else if(
    pregunta.includes("html")
    ){

        respuesta =
        "🌐 HTML5 es el lenguaje que se utiliza para crear la estructura de las páginas web.";

    }

    // CSS

    else if(
    pregunta.includes("css")
    ){

        respuesta =
        "🎨 CSS permite agregar colores, animaciones, diseños y estilos a una página web.";

    }

    // JAVASCRIPT

    else if(
    pregunta.includes("javascript")
    ){

        respuesta =
        "⚡ JavaScript agrega interacción, animaciones y funcionalidades dinámicas a las páginas web.";

    }

    // PROGRAMACIÓN

    else if(
    pregunta.includes("programacion") ||
    pregunta.includes("programar")
    ){

        respuesta =
        "💻 Programar significa crear instrucciones para que una computadora resuelva problemas o realice tareas.";

    }

    // IA

    else if(
    pregunta.includes("inteligencia artificial") ||
    pregunta.includes("ia")
    ){

        respuesta =
        "🧠 La Inteligencia Artificial permite que los sistemas aprendan, analicen información y tomen decisiones.";

    }

    // IOT

    else if(
    pregunta.includes("iot") ||
    pregunta.includes("internet de las cosas")
    ){

        respuesta =
        "📡 El Internet de las Cosas conecta dispositivos inteligentes mediante internet para intercambiar información.";

    }

    // BASES DE DATOS

    else if(
    pregunta.includes("base de datos")
    ){

        respuesta =
        "🗄️ Una base de datos permite almacenar, organizar y consultar información de manera eficiente.";

    }

    // CORTE 3

    else if(
    pregunta.includes("corte 3")
    ){

        respuesta =
        "📘 En el Corte 3 aprenderás Programación e Inteligencia Artificial.";

    }

    // CORTE 4

    else if(
    pregunta.includes("corte 4")
    ){

        respuesta =
        "📱 En el Corte 4 desarrollarás aplicaciones web y móviles con apoyo de Inteligencia Artificial.";

    }

    // CORTE 5

    else if(
    pregunta.includes("corte 5")
    ){

        respuesta =
        "🌎 En el Corte 5 trabajarás con soluciones inteligentes utilizando Internet de las Cosas.";

    }

    // CORTE 6

    else if(
    pregunta.includes("corte 6")
    ){

        respuesta =
        "⚙️ En el Corte 6 aprenderás automatización de procesos utilizando Inteligencia Artificial.";

    }

    // UNIVERSIDAD

    else if(
    pregunta.includes("universidad") ||
    pregunta.includes("carrera")
    ){

        respuesta =
        "🎓 Puedes estudiar Ingeniería en Sistemas, Ingeniería en Software, Ciencia de Datos o Inteligencia Artificial.";

    }

    // TRABAJO

    else if(
    pregunta.includes("trabajo") ||
    pregunta.includes("empleo")
    ){

        respuesta =
        "💼 Podrás trabajar como desarrollador web, desarrollador móvil, especialista IoT o analista de IA.";

    }

    // ROBOT

    else if(
    pregunta.includes("robot")
    ){

        respuesta =
        "🤖 Los robots pueden programarse para realizar tareas automáticas y trabajar junto con sistemas de Inteligencia Artificial.";

    }

    // TECNOLOGÍA

    else if(
    pregunta.includes("tecnologia")
    ){

        respuesta =
        "🚀 La tecnología permite crear herramientas que mejoran la vida de las personas y resuelven problemas.";

    }

    // RESPUESTAS GENERALES

    else if(
pregunta.includes("fotosintesis")
){

respuesta =
"🌱 La fotosíntesis es el proceso mediante el cual las plantas utilizan la luz solar, agua y dióxido de carbono para producir glucosa y oxígeno. Es fundamental para la vida porque genera gran parte del oxígeno que respiramos.";

}

else if(
pregunta.includes("pitagoras")
){

respuesta =
"📐 Pitágoras fue un matemático griego famoso por el Teorema de Pitágoras, que relaciona los lados de un triángulo rectángulo.";

}

else if(
pregunta.includes("mexico")
){

respuesta =
"🇲🇽 México es un país ubicado en América del Norte. Su capital es Ciudad de México y cuenta con una gran diversidad cultural, histórica y natural.";

}

else if(
pregunta.includes("planeta")
){

respuesta =
"🪐 Los planetas son cuerpos celestes que orbitan alrededor de una estrella. En nuestro sistema solar existen ocho planetas principales.";

}

else if(
pregunta.includes("sol")
){

respuesta =
"☀️ El Sol es la estrella del Sistema Solar y proporciona la energía necesaria para la vida en la Tierra.";

}

else if(
pregunta.includes("luna")
){

respuesta =
"🌙 La Luna es el satélite natural de la Tierra y afecta fenómenos como las mareas.";

}

else if(
pregunta.includes("gravedad")
){

respuesta =
"🌍 La gravedad es la fuerza que atrae los objetos hacia el centro de la Tierra y mantiene a los planetas en órbita.";

}

else if(
pregunta.includes("albert einstein")
){

respuesta =
"🧠 Albert Einstein fue un físico famoso por desarrollar la Teoría de la Relatividad y contribuir al estudio de la física moderna.";

}

else if(
pregunta.includes("energia")
){

respuesta =
"⚡ La energía es la capacidad de realizar trabajo o producir cambios. Puede existir en diversas formas como térmica, eléctrica o mecánica.";

}

else if(
pregunta.includes("internet")
){

respuesta =
"🌐 Internet es una red mundial que conecta millones de dispositivos para compartir información y servicios.";

}

else if(
pregunta.includes("google")
){

respuesta =
"🔎 Google es una empresa tecnológica conocida por su motor de búsqueda, servicios en la nube y proyectos de Inteligencia Artificial.";

}

else if(
pregunta.includes("historia")
){

respuesta =
"📚 La historia estudia los acontecimientos del pasado para comprender la evolución de las sociedades humanas.";

}

else if(
pregunta.includes("biologia")
){

respuesta =
"🧬 La biología es la ciencia que estudia los seres vivos, su estructura, funciones y evolución.";

}

else if(
pregunta.includes("quimica")
){

respuesta =
"⚗️ La química estudia la composición, propiedades y transformaciones de la materia.";

}

else if(
pregunta.includes("fisica")
){

respuesta =
"🔬 La física estudia la materia, la energía, el movimiento y las fuerzas presentes en el universo.";

}

else if(
pregunta.includes("matematicas")
){

respuesta =
"➗ Las matemáticas son una ciencia que estudia números, formas, patrones y relaciones lógicas.";

}
  else if(
pregunta.includes("tecnologia") ||
pregunta.includes("tecnologías") ||
pregunta.includes("tecnologico") ||
pregunta.includes("tecnológica") ||
pregunta.includes("innovacion") ||
pregunta.includes("innovación")
){

respuesta =
"🚀 La tecnología es el conjunto de conocimientos, herramientas y técnicas creadas para resolver problemas y mejorar la vida cotidiana. Se utiliza en áreas como la medicina, educación, comunicación, transporte, industria e Inteligencia Artificial.";

}

else{

const respuestas = [

"🤖 Todavía estoy aprendiendo sobre ese tema.",

"📚 Esa es una pregunta interesante. Intenta darme más detalles.",

"💡 Aún no tengo información suficiente sobre ese tema, pero sigo aprendiendo.",

"🚀 Mi especialidad es tecnología, programación e inteligencia artificial.",

"🔍 Reformula tu pregunta para que pueda ayudarte mejor."

];

respuesta =
respuestas[
Math.floor(
Math.random() *
respuestas.length
)];

}

    const chat =
    document.getElementById(
    "mensajesBot"
    );

    chat.innerHTML +=
    `
    <div class="usuario">
        ${pregunta}
    </div>

    <div class="bot">
        ${respuesta}
    </div>
    `;

    document
    .getElementById("pregunta")
    .value = "";

    chat.scrollTop =
    chat.scrollHeight;

}

// ===================================
// ENTER PARA ENVIAR
// ===================================

document
.getElementById("pregunta")
.addEventListener(
"keypress",
function(event){

    if(
    event.key === "Enter"
    ){

        responderBot();

    }

});

// ===================================
// MENSAJE AUTOMÁTICO
// ===================================




const mensajesBot =
document.getElementById("mensajesBot");
agregarMensaje(
"👋 Hola, soy BlatzBot. ¿En qué puedo ayudarte?",
"bot"
);

function agregarMensaje(texto,clase){

    mensajesBot.innerHTML +=
    `
    <div class="${clase}">
        ${texto}
    </div>
    `;

    mensajesBot.scrollTop =
    mensajesBot.scrollHeight;
}

document
.getElementById("pregunta")
.addEventListener(
"keydown",
function(event){

    if(event.key==="Enter"){

        responderBot();

    }

});

document
.querySelector(".hero-btn")
.addEventListener("click", function(){

 document
 .getElementById("cortes")
 .scrollIntoView({
 behavior:"smooth"
 });

});

const btnArriba =
document.getElementById(
"btnArriba"
);

window.addEventListener(
"scroll",
function(){

if(
window.scrollY > 300
){

btnArriba.style.display =
"block";

}else{

btnArriba.style.display =
"none";

}

}
);

btnArriba.addEventListener(
"click",
function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
);
