const imagem = document.querySelector("img");
const botao = document.querySelector("button");
const nomeDoPersonagem = document.getElementById("nome");
const especie = document.getElementById("especie");
const condicao = document.getElementById("status");

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 2);
}

pegarPersonagem = () => { 
let numeroAleatorio = gerarValorAleatorio();
return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
    method:"GET",
    headers:{
        Accept: "application/json",
        "Content-type": "application/json"
    }
}).then((response) => response.json()).then((data) =>{
    imagem.src = data.image;
    imagem.alt = data.name;
    nomeDoPersonagem.innerText = data.name;
    especie.innerText = data.species;
    condicao.innerText = data.status;
});
}

botao.onclick = pegarPersonagem;
