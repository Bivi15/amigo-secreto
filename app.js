// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if(nombreAmigo.length == 0) {
        alert("Por favor, inserte un nombre");
    }else {
        amigos.push(nombreAmigo);
        agregarAUnLi();
        console.log(amigos);
    }
    document.querySelector('#amigo').value = '';
}

function agregarAUnLi() {
    let listaAmigosLi = document.getElementById('listaAmigos');
    listaAmigosLi.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        listaAmigosLi.appendChild(nuevoElemento);
    }
}

function sortearAmigo() {
    if(amigos.length == 0){
        alert("Por favor, inserte un nombre");
    }else {
        let indiceAmigoSecreto = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = amigos[indiceAmigoSecreto];
        let resultadoAmigoSecreto = document.getElementById('resultado');
        resultadoAmigoSecreto.innerHTML = amigoSecreto;
        //De pronto hay que quitarlo
        return amigoSecreto;
    }
}

console.log(agregarAmigo());
console.log(amigos);
console.log(agregarAUnLi());
sortearAmigo();
