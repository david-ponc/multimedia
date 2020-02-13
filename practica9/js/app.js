let i = "o";
let mat = [["","",""],["","",""],["","",""]];

function position(x, y) {
    i = i == "o" ? "x" : "o";
    let line = "p" + x + y;
    console.log(line);
    document.getElementById(line).removeAttribute("onclick");
    document.getElementById(line).style.backgroundImage = `url(img/${i}.png)`;
    console.log(i);
    mat[x][y] = i;
    console.log(valida(i));
}

function valida(id) {
    for(let i = 0; i < 3; i++) {
        if(mat[i][2] != "" && mat[i][1] != "" && mat[i][0] != "" && mat[i][0] == mat[i][1] && mat[i][2] == mat[i][1]) {
            return `ganaste ${id}`;
        }
    }
    for(let i = 0; i < 3; i++) {
        if(mat[2][i] != "" && mat[1][i] != "" && mat[0][i] != "" && mat[0][i] == mat[1][i] && mat[2][i] == mat[1][i]) {
            return `ganaste ${id}`;
        }
    }
    if(mat[0][0] != "" && mat[1][1] != "" && mat[2][2] != "" && mat[0][0] == mat[1][1] && mat[2][2] == mat[1][1]) {
        return `ganaste ${id}`;
    }
    if(mat[0][2] != "" && mat[1][1] != "" && mat[2][0] != "" && mat[0][2] == mat[1][1] && mat[2][0] == mat[1][1]) {
        return `ganaste ${id}`;
    }
}

function bloqueo() {
    for(let i = 0; i < 3; i++) {
        for(let i = 0; i < 3; i++) {
            document.getElementById(`p${i}${j}`).removeAttribute("onclick");
        }
    }    
}