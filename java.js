let c1=0;
let c2=0;
let c3=0;
let count = c1+c2+c3;

//selecionar opções


function PratoPrincipal(elemento) {
    
    const opcaoselecionada = document.querySelector(".selecionado");
  if(opcaoselecionada!==null) {
    opcaoselecionada.classList.remove("selecionado");
    c1=0;
  }
    console.log
    elemento.classList.add("selecionado");
    c1++;
    
    fecharpedido();
}
function bebidaEsc(elemento) {
    
    const opcaoselecionada1 = document.querySelector(".selecionado1");
    if (opcaoselecionada1!== null){
        opcaoselecionada1.classList.remove("selecionado1");
        c2=0;
    }
    console.log
    elemento.classList.add("selecionado1");
    c2++;

    fecharpedido();
}
function sobreesc(elemento) {
    
    const opcaoselecionada1 = document.querySelector(".selecionado2");
    if (opcaoselecionada1!== null){
        opcaoselecionada1.classList.remove("selecionado2");
       c3=0;
    }
    console.log
    elemento.classList.add("selecionado2");
   c3++;

   fecharpedido();
}


//fechar pedido
function fecharpedido(){
    count=c1+c2+c3;
    if (count==3) {
        const sumir = document.querySelector (".selecao");
        const fechar = document.querySelector (".escolhido");
        sumir.classList.add("display");
        fechar.classList.remove("display");
    }
}


