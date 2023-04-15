let botaoLigar = document.getElementById('ligado');
let botaoDesligar = document.getElementById('desligado');
let lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function ligarLamp () {
    if ( !isLampBroken () ) {
        lamp.src = './imagens/ligada.jpg';
    }
}

function desligarLamp () {
    if ( !isLampBroken () ) {
        lamp.src = './imagens/desligada.jpg';
    }
}

function quebraLamp () {
    lamp.src = './imagens/quebrada.jpg';
}

botaoLigar.addEventListener ( 'click', ligarLamp );
botaoDesligar.addEventListener ( 'click', desligarLamp );
lamp.addEventListener( 'dblclick', quebraLamp);