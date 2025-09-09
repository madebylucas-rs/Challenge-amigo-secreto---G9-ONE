// Variáveis 
let nomes = [];
nomes.innerHTML = ""

// Botão de adicionar amigo
function adicionarAmigo(){
   let amigoAdicionado =  document.querySelector('input').value;
   nomes.push(amigoAdicionado);
   console.log(nomes);
   let listaPessoas = document.getElementById("listaAmigos").innerHTML;
  if (amigoAdicionado == ""){
   alert ('Por favor, insira um nome válido');
  }
   limparCampo()
   let listaAmigos = document.getElementById("listaAmigos");
   listaAmigos.innerHTML = "";
nomes.forEach(nome =>{
   
   let item = document.createElement('li');
   item.textContent = nome;
   listaAmigos.appendChild(item);
}
)
}
// Limpeza de compo input
function limparCampo() {
    campo = document.querySelector('input');
    campo.value = "";
}
limparCampo()

// Botão de Sortear um amigo
function sortearAmigo(){
   let amigoSorteado = nomes[Math.floor(Math.random() * nomes.length)];
   let resultado = document.getElementById('resultado');
   let listaadicionada = document.createElement('li');
   let textoFinal = `O amigo secreto sorteado é: ${amigoSorteado}`;
   listaadicionada.textContent = textoFinal;
   resultado.appendChild(listaadicionada);

   console.log(amigoSorteado);
   nomes.length = 0;
   let listaAmigos = document.getElementById("listaAmigos");
   listaAmigos.innerHTML = "";
   
}
function listaAmigos(){

}


