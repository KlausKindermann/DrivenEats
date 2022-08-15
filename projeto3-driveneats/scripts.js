function selecionarPedido(classEscolha){
    const escolhaUmSelecionada = document.querySelector('.pratoSelecionado');
    if (escolhaUmSelecionada !== null){
        escolhaUmSelecionada.classList.remove ('pratoSelecionado');  
    }
    const seletor = '.'+classEscolha;
    const escolha = document.querySelector (seletor);
    escolha.classList.add('pratoSelecionado');
    
    const primeiro_elemento = document.querySelector(".pratoSelecionado");
    parte1_nome=primeiro_elemento.getElementsByTagName("h4")[0];
    console.log(parte1_nome)

}
function selecionarBebida(classEscolha){
    const escolhaDoisSelecionada = document.querySelector('.bebidaSelecionada');
    if (escolhaDoisSelecionada !== null){
        escolhaDoisSelecionada.classList.remove ('bebidaSelecionada');  
    }
    const seletor = '.'+classEscolha;
    const escolha = document.querySelector (seletor);
    escolha.classList.add('bebidaSelecionada');
    
    const segundo_elemento = document.querySelector(".bebidaSelecionada");
    parte2_nome=segundo_elemento.getElementsByTagName("h4")[0];
}
function selecionarSobremesa(classEscolha){
    const escolhaTresSelecionada = document.querySelector('.sobremesaSelecionada');
    if (escolhaTresSelecionada !== null){
        escolhaTresSelecionada.classList.remove ('sobremesaSelecionada');  
    }
    const seletor = '.'+classEscolha;
    const escolha = document.querySelector (seletor);
    escolha.classList.add('sobremesaSelecionada');
    
    const terceito_elemento = document.querySelector(".sobremesaSelecionada");
    parte3_nome=terceito_elemento.getElementsByTagName("h4")[0];
}

let parte1_nome ;
let parte2_nome ;
let parte3_nome ;

function enviarMensagem() {

let mensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${parte1_nome.innerHTML}
- Bebida: ${parte2_nome.innerHTML}
- Sobremesa: ${parte3_nome.innerHTML}
Total: R$ 42,70`

let uri = encodeURIComponent(mensagem);
window.open( 'https://wa.me/5512992545942?text='+uri);
console.log(enviarMensagem)
}