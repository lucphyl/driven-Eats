// nome do usuario
let dono = prompt ("por favor digite seu nome");


//variaveis simples
let esc1 = 0;
let esc2 = 0;
let esc3 = 0;
let pedido = 0;
let estampaURL = document.querySelector(".imagemURl");
let liberado = 0;

// objeto para postar
let objeto = {
model: "",
neck: "",
material: "",
image: "",
owner: "",
author: "",
}
objeto.author= dono;
objeto.owner= dono;

// objeto puxado do axios
let pedidos = []

// get e post axios

UltimosPedidos();

//escolhas do usuario
function escolhaModelo (elemento,modelo) {
    const selecionado = document.querySelector(".selecionado");
    const borda = document.querySelector(".selecionado");

    if (selecionado !== null){
        selecionado.classList.remove("selecionado");
        borda.classList.add("borda");
        esc1 = 0;
    }
    elemento.classList.remove("borda");
    elemento.classList.add("selecionado");
    esc1 = 1;
    objeto.model= modelo;
    liberarBotao ();
}

function escolhaGola (elemento,gola) {
    const selecionado = document.querySelector(".selecionado1");
    const borda = document.querySelector(".selecionado1");

    if (selecionado !== null){
        selecionado.classList.remove("selecionado1");
        borda.classList.add("borda");
        esc2 = 0;
    }
    elemento.classList.remove("borda");
    elemento.classList.add("selecionado1");
    esc2 =1;
    objeto.neck= gola;
    liberarBotao ();
}

function escolhaTecido (elemento,tecido) {
    const selecionado = document.querySelector(".selecionado2");
    const borda = document.querySelector(".selecionado2");

    if (selecionado !== null){
        selecionado.classList.remove("selecionado2");
        borda.classList.add("borda");
        esc3 = 0;
    }
    elemento.classList.remove("borda");
    elemento.classList.add("selecionado2");
    esc3 =1;
    objeto.material= tecido;
    liberarBotao ();
}
liberarBotao ();
//liberar botão
function liberarBotao (){
    const livre = document.querySelector(".botaoFechado");
    pedido = esc1 + esc2 +esc3;
    if (pedido ===3 && objeto.image != ""){
        livre.classList.remove("botaoFechado");
        livre.classList.add("liberado");
        liberado = 1;
    }
}

function validarImg(){
    const regra=
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
    const teste = regra.test(estampaURL.value);
    console.log(teste);
    if (teste === false){
        alert("favor inserir url para imagem");
    }else {
        liberarBotao ();
    }
}


function encomendar (){
    console.log(objeto);

    if (liberado==1){    resultdado = window.confirm("confirme o pedido");
    if (window.confirm("confirme o pedido")){
        const encomenda = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', objeto);
        encomenda.then(tratarSucesso);
        encomenda.catch(tratarFalha);
    }else {
        alert("Ops, não conseguimos processar sua encomenda");
    }
    encomenda.then(tratarSucesso);
    encomenda.catch(tratarFalha);}else{
        alert("escolha as opções antes");
    }

}

function tratarSucesso(resposta) {
	console.log(resposta); 
    alert ( "seu pedido está pronto")
}

function tratarFalha(erro) {
	console.log(erro);
    alert ("Ops, não conseguimos processar sua encomenda")
}

function enviar(){
    objeto.image = estampaURL.value;
    console.table(objeto);
    validarImg();
}

function UltimosPedidos(){
    const pedidosProntos = axios.get ('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    pedidosProntos.then(povoar);
    console.log(pedidos);
}

function povoar (response){
    pedidos = response.data;
    console.log(pedidos);
    const recentes = document.querySelector(".ultimos");
   for ( let i= 0; i!=10; i++){
       recentes.innerHTML += `
       <div class = "recente" onclick ="compraRecente(this, ${[i]})">
           <img src ="${pedidos[i].image}"></img>
           <h1>criador: ${pedidos[i].owner} </h1>
       </div>`
   }
}

function compraRecente(elemento, order){
    objeto.author = pedidos[order].owner;
    objeto.author = dono;
    objeto.model = pedidos[order].model;
    objeto.neck = pedidos[order].neck;
    objeto.material = pedidos[order].material;
    objeto.image = pedidos[order].image;

    console.log(pedidos[order]);
    liberado=1;
    encomendar();
    
}