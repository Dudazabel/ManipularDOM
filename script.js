const nomeInput = document.getElementById("nome-input");
const cartaoNome = document.getElementById("cartao-nome");

nomeInput.addEventListener("input", function(){
    cartaoNome.textContent = nomeInput.value || "Seu Nome";
});

const cartao = document.getElementById("cartao");
const btnAzul = document.getElementById("btn-azul");
const btnVerde = document.getElementById("btn-verde");

btnAzul.addEventListener("click", function(){
    cartao.classList.remove("fundo-verde");
    cartao.classList.add("fundo-azul");
});

btnVerde.addEventListener("click", function(){
    cartao.classList.remove("fundo-azul");
    cartao.classList.add("fundo-verde");
});

const btnFonte = document.getElementById("btn-fonte");

btnFonte.addEventListener("click", function(){
    cartao.classList.toggle("fonte-alternativa");
});

const imagem = document.getElementById("imagem-select");
const cartaoImage = document.getElementById("cartao-img");

imagem.addEventListener("change", function(){
    const novaImagem = imagem.value;
    cartaoImage.setAttribute("src", novaImagem);
});

const habilidadeInput = document.getElementById("habilidade-input");
const btnAdicionar = document.getElementById("btn-adicionar");
const listaHabilidades = document.getElementById("lista-habilidades");

btnAdicionar.addEventListener("click", function() {
    const li = document.createElement("li");
    li.textContent = habilidadeInput.value;
    listaHabilidades.appendChild(li);
    habilidadeInput.value = ""; 
  });