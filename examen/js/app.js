const body = document.querySelector('.Game__figure-body');
const secretWord = document.querySelector('.Game__figure-secretWord');

let almacen=["humano","persona","gente","hombre","mujer",
              "familia","amigo","conocido","colega","pareja",
              "esposa","matrimonio","amor","cuerpo","pie","pierna",
              "espinilla","rodilla","muslo","cabeza","cara","labios","diente",
              "electroencefalografista","esternocleidomastoideo","electroencefalografia",
              "otorrinolaringologo","arteriosclerosis","paralelepipedo","python","caleidoscopio",
              "aire","arca","percha","liebre","social","antes","gritar","ama","gorro","banco"];

let secret = [];
let estadoImg = 1;
let estadoJuego = 0;


function init(word) {
    for(let i=0; i<word.length; i++) {
        let line = document.createElement('div');
        line.setAttribute('class', 'line');
        line.setAttribute('id', i);
        secretWord.appendChild(line);
        secret.push(word[i]);
    }
    console.log(secret);

    document.querySelector('#A').addEventListener('click', () => { buscar('a') });
    document.querySelector('#B').addEventListener('click', () => { buscar('b') });
    document.querySelector('#C').addEventListener('click', () => { buscar('c') });
    document.querySelector('#D').addEventListener('click', () => { buscar('d') });
    document.querySelector('#E').addEventListener('click', () => { buscar('e') });
    document.querySelector('#F').addEventListener('click', () => { buscar('f') });
    document.querySelector('#G').addEventListener('click', () => { buscar('g') });
    document.querySelector('#H').addEventListener('click', () => { buscar('h') });
    document.querySelector('#I').addEventListener('click', () => { buscar('i') });
    document.querySelector('#J').addEventListener('click', () => { buscar('j') });
    document.querySelector('#K').addEventListener('click', () => { buscar('k') });
    document.querySelector('#L').addEventListener('click', () => { buscar('l') });
    document.querySelector('#M').addEventListener('click', () => { buscar('m') });
    document.querySelector('#Ñ').addEventListener('click', () => { buscar('ñ') });
    document.querySelector('#N').addEventListener('click', () => { buscar('n') });
    document.querySelector('#O').addEventListener('click', () => { buscar('o') });
    document.querySelector('#P').addEventListener('click', () => { buscar('p') });
    document.querySelector('#Q').addEventListener('click', () => { buscar('q') });
    document.querySelector('#R').addEventListener('click', () => { buscar('r') });
    document.querySelector('#S').addEventListener('click', () => { buscar('s') });
    document.querySelector('#T').addEventListener('click', () => { buscar('t') });
    document.querySelector('#U').addEventListener('click', () => { buscar('u') });
    document.querySelector('#V').addEventListener('click', () => { buscar('v') });
    document.querySelector('#W').addEventListener('click', () => { buscar('w') });
    document.querySelector('#X').addEventListener('click', () => { buscar('x') });
    document.querySelector('#Y').addEventListener('click', () => { buscar('y') });
    document.querySelector('#Z').addEventListener('click', () => { buscar('z') });
}

function buscar(letter) {
    if(document.querySelector(`#${letter.toUpperCase()}`).className != "btn-correct") {
        let res = secret.indexOf(letter);
        let ban = true;
        while(res >= 0) {
            document.getElementById(res).classList.replace('line', 'success');
            document.getElementById(res).textContent = letter.toUpperCase();
            secret[res] = '0';
            estadoJuego++;
            res = secret.indexOf(letter);
            if(ban){
                document.querySelector(`#${letter.toUpperCase()}`).classList.replace('btn', 'btn-correct');
                document.querySelector(`#${letter.toUpperCase()}`).removeEventListener('click', buscar);
                ban = false;
            }
        }
        // esta mal
        if(ban) {
            if(estadoImg <= 9)
                document.querySelector('#img').src = `img/${estadoImg}.png`;
            estadoImg++;
        }

        if(estadoImg == 10) {
            bloquear('Perdiste :(');
        }

        if(estadoJuego == secret.length) {
            bloquear('Ostia tio ganaste :D ... perverso 7u7');
        }
    }
}


window.onload = () => {
    // Generar aleatorio apartir de la longitud del arreglo
    let ran =  Math.floor(Math.random()*almacen.length);
    init(almacen[ran]);
}

function bloquear(text) {
    let el = document.createElement('h1');
        el.textContent = text;
        body.appendChild(el);
        document.querySelector('#A').removeEventListener('click', () => { buscar });
        document.querySelector('#B').removeEventListener('click', () => { buscar });
        document.querySelector('#C').removeEventListener('click', () => { buscar });
        document.querySelector('#D').removeEventListener('click', () => { buscar });
        document.querySelector('#E').removeEventListener('click', () => { buscar });
        document.querySelector('#F').removeEventListener('click', () => { buscar });
        document.querySelector('#G').removeEventListener('click', () => { buscar });
        document.querySelector('#H').removeEventListener('click', () => { buscar });
        document.querySelector('#I').removeEventListener('click', () => { buscar });
        document.querySelector('#J').removeEventListener('click', () => { buscar });
        document.querySelector('#K').removeEventListener('click', () => { buscar });
        document.querySelector('#L').removeEventListener('click', () => { buscar });
        document.querySelector('#M').removeEventListener('click', () => { buscar });
        document.querySelector('#Ñ').removeEventListener('click', () => { buscar });
        document.querySelector('#N').removeEventListener('click', () => { buscar });
        document.querySelector('#O').removeEventListener('click', () => { buscar });
        document.querySelector('#P').removeEventListener('click', () => { buscar });
        document.querySelector('#Q').removeEventListener('click', () => { buscar });
        document.querySelector('#R').removeEventListener('click', () => { buscar });
        document.querySelector('#S').removeEventListener('click', () => { buscar });
        document.querySelector('#T').removeEventListener('click', () => { buscar });
        document.querySelector('#U').removeEventListener('click', () => { buscar });
        document.querySelector('#V').removeEventListener('click', () => { buscar });
        document.querySelector('#W').removeEventListener('click', () => { buscar });
        document.querySelector('#X').removeEventListener('click', () => { buscar });
        document.querySelector('#Y').removeEventListener('click', () => { buscar });
        document.querySelector('#Z').removeEventListener('click', () => { buscar });
        setTimeout(() => {
            location.reload();
        }, 5000);
}