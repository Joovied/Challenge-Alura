// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = [];
let numeroAleatorio = ""


function agregarAmigo(){
    let nombreAmigo = (document.getElementById("amigo").value);
    if (nombreAmigo == ("")){
        alert("No es un nombre")
    }else {
        listaNombres.push(nombreAmigo)
        console.log(listaNombres)
        mostrarNombres("listaAmigos",`-${listaNombres}-`)
        limpiarCaja()
        return listaNombres
}} 


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarNombres(elemento,texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function sortearNombreAleatorio(){
    let cantidadNombres = listaNombres.length
    console.log(cantidadNombres)

    let numeroAleatorio = Math.floor(Math.random()*cantidadNombres);
    console.log(numeroAleatorio)

    let transformarNumeroANombre = listaNombres[parseInt(numeroAleatorio)]

    mostrarNombres("resultado",`El nombre sorteado es: ${transformarNumeroANombre}`)
}




