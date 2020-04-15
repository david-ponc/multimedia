var mat = [new Array(4), new Array(4), new Array(4), new Array(4)];

window.onload = () => {
  init();
  rand();
  console.log(mat);
  // falto algo aqui
  plano();
}

function init() {
  for(let i=0; i < mat.length; i++) {
    for(let j=0; j < mat[0].length; j++) {
      mat[i][j] = "";
    }
  }
}

function rand() {
  for(let i=0; i < mat.length*mat.length; i++) {
    while(isnullMat((Math.floor(Math.random() * 4)), (Math.floor(Math.random() * 4)), i) != 1){}
  }
}

function isnullMat(i, j, num) {
  // console.log(`${i}, ${j}, ${num}`);
  if(mat[i][j] == "") {
    mat[i][j] = num;
    return 1;
  }
  return 0;
}

function plano() {
  let n = 1;
  for(let i=0; i < mat.length; i++) {
    for(let j=0; j < mat[0].length; j++) {
      if(mat[i][j] == "") {
        document.getElementById(n).textContent = mat[i][j];
      }else {
        document.getElementById(n).textContent = mat[i][j];
        document.getElementById(n).setAttribute('onclick', `botonera(${i},${j})`);
      }
      n++;
    }
  }
}

function botonera(x, y) {
  let i = parseInt(x);
  let j = parseInt(y);
  console.log(`botonera (${i},${j})`);

  if(j > 0) {
    // console.log('j > 0');
    if(mat[i][j - 1] == "") {
      mat[i][j - 1] = mat[i][j];
      mat[i][j] = "";
    }
  }
  if(i > 0) {
    // console.log("i > 0");
    if(mat[i - 1][j] == "") {
      mat[i - 1][j] = mat[i][j];
      mat[i][j] = "";
    }
  }

  if(j < 3) {
    // console.log("j < 3");
    if(mat[i][j + 1] == "") {
      mat[i][j + 1] = mat[i][j];
      mat[i][j] = "";
    }
  }

  if(i < 3) {
    // console.log("i < 3");
    if(mat[i + 1][j] == "") {
      mat[i + 1][j] = mat[i][j];
      mat[i][j] = "";
    }
  }
  plano();
}