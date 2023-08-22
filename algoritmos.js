const imagen=document.querySelector("#imagen-1");
const imagen2=document.querySelector("#imagen-2");
const divLista=document.querySelector("#lista-ganadores");
const usuario=document.querySelector("#usuario");
const botones=document.querySelector("#boton");

const IMG1 ="roca.jpg";
const IMG2="tijeras.jpg";
const IMG3="papel.jpg";

let conter1=0;
let conter2=0;
let conter3=0;

let ganoUnaHumano=false;
let ganoUnaMaquina=false;
let empate=false;

const vectorTodo= [0,IMG1,IMG2,IMG3];

/**
 * Inicia el juego 
 */
function jugar() {
         const usuarioValue=crearImagen1();
         const rand2=crearImagen2();
         generarLista(usuarioValue, rand2);
         ganadorPerdedor(ganoUnaHumano,ganoUnaMaquina)
};
function borrar() {
     conter1=0;
     conter2=0;
     conter3=0;
     divLista.innerHTML= ``;
     botones.disabled=false;
}

/**
 * Crea la primer imagen del jugador
 * @return devuelve el valor del usuario
 */

function crearImagen1() {
    const usuarioValue = parseInt(usuario.value);
    if (usuarioValue >= 1 && usuarioValue <= 3) {
      imagen.innerHTML = `<img src="${vectorTodo[usuarioValue]}">`;
      return usuarioValue;
    }
}
/**
 * Crea la imagen de la maquina
 * @returns devuelve el valor de la maquina
 */
function crearImagen2() {
    const numeroAletorio2 = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;
    
    var rand2 = numeroAletorio2(1,4)
    imagen2.innerHTML = `<img src="${vectorTodo[rand2]}">`;
    return rand2;
}

/**
 * Genera la lista de ganadores, empates y victorias 
 * @param {*} usuarioValue usa el parametro del usuario
 * @param {*} rand2 usa el parametro de la maquina
 */
function generarLista(usuarioValue, rand2) {
    if ((usuarioValue===1 && rand2===2)|| (usuarioValue===2 && rand2===3)|| (usuarioValue===3 && rand2===1)) {   
         ganoUnaHumano= true;

    }
    
    else if (usuarioValue===rand2){
         empate= true;
    }

    else {
         ganoUnaMaquina= true;     
    }
}

function ganadorPerdedor(ganoUnaHumano,ganoUnaMaquina) {
    if (ganoUnaHumano) {
        conter1+=1;
        if (conter1===2) {
            divLista.innerHTML= `<p>GANASTE VOS HUMANO</p>`
            botones.disabled=true;
        }
    } else if (ganoUnaMaquina){
        conter2+=1;
        if (conter2===2) {
            divLista.innerHTML= `<p>SOS UN BEBE TE GANO LA MAQUINA</p>` 
            botones.disabled=true;
        }
    else if (empate) {
        conter3+=1;
        if (conter3===2 ){
            divLista.innerHTML= `<p>HAY UN EMPATE</p>` 
            botones.disabled=true;
        }
    }
    }
ganoUnaHumano=false;
ganoUnaMaquina=false;
empate=false;
}