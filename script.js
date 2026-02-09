let imagem = document.querySelector(".copao")
let fundo = document.querySelector(".circulo")

function trocaImagem(endereco){
    imagem.src = endereco
}

function trocaFundo(cor){
    fundo.style.background = cor
}
