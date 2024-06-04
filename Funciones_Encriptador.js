//Constantes

const texto = document.querySelector(".texto");
const btnEnc = document.querySelector(".encriptar");
const btnDes = document.querySelector(".desencriptar");
const msj = document.querySelector(".mensaje");
const buscando = document.querySelector(".buscando");
const sintexto = document.querySelector(".sintexto");
const ingrese = document.querySelector(".ingrese");

//ENCRIPTAR

function encriptar() {
    var msj2 = texto.value;
    var msjEnc = msj2.replaceAll(/e/gi, 'enter')
                    .replaceAll(/i/gi, 'imes')
                    .replaceAll(/a/gi, 'ai')
                    .replaceAll(/o/gi, 'ober')
                    .replaceAll(/u/gi, 'ufat');
    msj.value = msjEnc;
    texto.value = '';

    if (msj.value == '') { 
        document.getElementById("copiar").style.display = "none";
        buscando.style.display = "block";
        sintexto.style.display = "block";
        ingrese.style.display = "block";
            } else {
                document.getElementById("copiar").style.display = "block";
                buscando.style.display = "none";
                sintexto.style.display = "none";
                ingrese.style.display = "none";
            }
}

//DESENCRIPTAR

function desencriptar() {
    var msj3 = texto.value;
    var msjDes = msj3.replaceAll(/enter/gi, 'e')
                    .replaceAll(/imes/gi, 'i')
                    .replaceAll(/ai/gi, 'a')
                    .replaceAll(/ober/gi, 'o')
                    .replaceAll(/ufat/gi, 'u');
    msj.value = msjDes;
    texto.value = ''; 

    if (msj.value == '') { 
        document.getElementById("copiar").style.display = "none";
        buscando.style.display = "block";
        sintexto.style.display = "block";
        ingrese.style.display = "block";
            } else {
                document.getElementById("copiar").style.display = "block";
                buscando.style.display = "none";
                sintexto.style.display = "none";
                ingrese.style.display = "none";
            }
} 

//COPIAR

function copiar() {
    var copiarMensaje = msj.value;
    navigator.clipboard.writeText(copiarMensaje)
    .then(() => {
        document.getElementById("mensaje").textContent = '';
        msj.value = '';
    })
    .catch(err => {
        console.error(err); 
    });
}
