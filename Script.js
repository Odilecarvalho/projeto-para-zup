const imagem = document.queryselector("img");
const botao = document.queryselector("button");
const nomeDoPersonagem = document.queryselector("#nome");
const especie = document.queryselector("#especie");
const condicao = document.queryselector("#status");

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 3);
}

pegarPersonagem = () => { 
let numeroAleatorio = gerarValorAleatorio();
return fetch(`https://rickandmortyapi.com/api/character/$()numeroAleatorio)`,{
    method:"GET",
    headers:{
        Accept: "application/json",
        "Content-type": "application/json"
    }
}).then((response) => response.json()).then((data) =>{
    imagem.src = data.image;
    imagem.alt = data.name;
    nomeDoPersonagem.innerHTML = data.name;
    especie.innerHTML = data.species;
    condicao.innerHTML = data.status;
});
}

botao.onclick = pegarPersonagem;
