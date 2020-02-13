window.onload = () => {
    preload();
}

var x = 0;
function preload() {
    x = x == 26 ? 0 : x;
    if(x == 1) {
        document.getElementById('imge').style.left = "0px";
    }else if(x == 2) {
        document.getElementById('imge').style.left = "-20px";
    }else if(x == 3) {
        document.getElementById('imge').style.left = "-40px";
    }else if(x == 4) {
        document.getElementById('imge').style.left = "-60px";
    }else if(x == 5) {
        document.getElementById('imge').style.left = "-80px";
    }else if(x == 6) {
        document.getElementById('imge').style.left = "0px";
        document.getElementById('imge').style.top = "-20px";
    }else if(x == 7) {
        document.getElementById('imge').style.left = "-20px";
    }else if(x == 8) {
        document.getElementById('imge').style.left = "-40px";
    }else if(x == 9) {
        document.getElementById('imge').style.left = "-60px";
    }else if(x == 10) {
        document.getElementById('imge').style.left = "-80px";
    }else if(x == 11) {
        document.getElementById('imge').style.left = "0px";
        document.getElementById('imge').style.top = "-40px";
    }else if(x == 12) {
        document.getElementById('imge').style.left = "-20px";
    }else if(x == 13) {
        document.getElementById('imge').style.left = "-40px";
    }else if(x == 14) {
        document.getElementById('imge').style.left = "-60px";
    }else if(x == 15) {
        document.getElementById('imge').style.left = "-80px";
    }else if(x == 16) {
        document.getElementById('imge').style.left = "0px";
        document.getElementById('imge').style.top = "-60px";
    }else if(x == 17) {
        document.getElementById('imge').style.left = "-20px";
    }else if(x == 18) {
        document.getElementById('imge').style.left = "-40px";
    }else if(x == 19) {
        document.getElementById('imge').style.left = "-60px";
    }else if(x == 20) {
        document.getElementById('imge').style.left = "-80px";
    }else if(x == 21) {
        document.getElementById('imge').style.left = "0px";
        document.getElementById('imge').style.top = "-80px";
    }else if(x == 22) {
        document.getElementById('imge').style.left = "-20px";
    }else if(x == 23) {
        document.getElementById('imge').style.left = "-40px";
    }else if(x == 24) {
        document.getElementById('imge').style.left = "-60px";
    }else if(x == 25) {
        MoverVisor('imge', 'left', '-80px');
    }
    x++;
    setTimeout('preload()', 600);
}

function MoverVisor(element, orientation, pixels) {
    if(orientation == 'left') {
        document.getElementById(element).style.left = pixels;
    }else {
        document.getElementById(element).style.top = pixels;
    }
}

function MoverVisorAbj(element, orientation, pixels) {
    document.getElementById(element).style.orientation = pixels;
}