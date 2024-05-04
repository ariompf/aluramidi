function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido.');
    }
}

const listeDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0;contador < listeDeTeclas.length; contador++) {

    const tecla = listeDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    //console.log(idAudio);

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    //console.log(contador);
    tecla.onkeydown = function(evento) {
/*         console.log(evento.code == 'Space') */
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}


/* while (contador < listeDeTeclas.length) {

    const tecla = listeDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    contador = contador + 1;

    //console.log(contador);
} */


/* function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom ;

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap

function tocaSomTim() {
    document.querySelector('#som_tecla_tim').play();
}

function tocaSomPuff() {
    document.querySelector('#som_tecla_puff').play();
}

function tocaSomSplash() {
    document.querySelector('#som_tecla_splash').play();
}

function tocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}

function tocaSomPsh() {
    document.querySelector('#som_tecla_psh').play();
}

function tocaSomTic() {
    document.querySelector('#som_tecla_tic').play();
}

function tocaSomTom() {
    document.querySelector('#som_tecla_tom').play();
}

/* 
let button = document.querySelector('button');

button.addEventListener('click', function() {
    alert('Fui clicado.');
});

document.querySelector('.tecla_clap');

 */