const change = (name,player) => {
    if(player == 1) {
        document.getElementById(name).src = "img/piedra.png";
    }
    if(player == 2) {
        document.getElementById(name).src = "img/papel.png";
    }
    if(player == 3) {
        document.getElementById(name).src = "img/tijeras.png";
    }
}

function mano1(id) {
    let ia = Math.floor(Math.random() * 3);
    change('handright',id);
    change('handleft',ia+1);
    game(id,ia+1);
}

function mano2(id) {
    let ia = Math.floor(Math.random() * 3);
    change('handright',id);
    change('handleft',ia+1);
    game(id,ia+1);
}

function mano3(id) {
    let ia = Math.floor(Math.random() * 3);
    change('handright',id);
    change('handleft',ia+1);
    game(id,ia+1);
}

function game(user, ia) {
    console.log(`user ${user}`);
    console.log(`ia ${ia}`);
    if(user == ia) {
        document.getElementById('message').innerText = "Empate";
        setTimeout(() => {window.location.reload()} ,2000);
    }else if((user==1 && ia == 2) || (user==2 && ia == 3) || (user==3 && ia == 1)) {
        document.getElementById('message').innerText = "Perdiste";
        setTimeout(() => {window.location.reload()} ,2000);
    }else {
        document.getElementById('message').innerText = "Ganaste";
        setTimeout(() => {window.location.reload()} ,2000);
    }
    
}