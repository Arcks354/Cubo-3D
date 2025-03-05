// #region Define Cor das faces
let letras = "ABCDEF";

for (let i = 0; i < 6; i++) {  // i<6 porque são 6 lados do cubo
    for (let j = 1; j < 10; j++) {  //  j<10 porque são 9 faces de cada lado do cubo
        let id = `${letras[i]}${j}`;
        let elemento = document.getElementById(id);
        if (i == 0) {
            if(j==1){
                elemento.style.backgroundColor = 'black';
            }
            else{
                elemento.style.backgroundColor = 'red';
            }
        }
        else{
            if (i==1) {
                elemento.style.backgroundColor = 'green';
            }
            else{
                if (i==2) {
                    elemento.style.backgroundColor = 'blUE';
                }
                else{
                    if (i==3) {
                        elemento.style.backgroundColor = 'white';
                    }
                    else{
                        if (i==4) {
                            elemento.style.backgroundColor = 'yellow';
                        }
                        else{
                            if (i==5) {
                                elemento.style.backgroundColor = 'orange';
                            }
                            else{
                                console.log('Erro ao setar as cores');
                            }
                        }
                    }
                }
            }
        }
    }
}
// #endregion Define Cor das faces

function comandoCor(direcao, comando) { //comando varia entre as 6 faces
    //console.log(comando);
    if (comando == 1) { mudarCor(direcao, 'A1','A2','A3','A4','A5','A6','A7','A8','A9') 
        console.log('comando1');

     }
    else {
        if (comando == 2) { mudarCor(direcao, 12345) }
        else {
            if (comando == 3) { mudarCor(direcao, 12345) }
            else {
                if (comando == 4) { mudarCor(direcao, 12345) }
                else {
                    if (comando == 5) { mudarCor(direcao, 12345) }
                    else {
                        if (comando == 6) { mudarCor(direcao, 12345) }
                        else { console.log(comando); }
                    }
                }
            }
        }
    }

}

//funcão mudarCor é chamada através da função comandoCor, ela recebe as faces que irão mover e faz o processo de troca
function mudarCor(sentido, copinh1, copinh2, copinh3, copinh4, copinh5, copinh6, copinh7, copinh8, copinh9) {
//, caneca1, caneca2, caneca3, caneca4, caneca5, caneca6, caneca7, caneca8, caneca9, caneca10, caneca11, caneca12
    var copinho1 = document.getElementById(copinh1);
    var copinho2 = document.getElementById(copinh2);
    var copinho3 = document.getElementById(copinh3);
    var copinho4 = document.getElementById(copinh4);
    var copinho5 = document.getElementById(copinh5);
    var copinho6 = document.getElementById(copinh6);
    var copinho7 = document.getElementById(copinh7);
    var copinho8 = document.getElementById(copinh8);
    var copinho9 = document.getElementById(copinh9);

    // var caneco1 = document.getElementById(caneca1);
    // var caneco2 = document.getElementById(caneca2);
    // var caneco3 = document.getElementById(caneca3);
    // var caneco4 = document.getElementById(caneca4);
    // var caneco5 = document.getElementById(caneca5);
    // var caneco6 = document.getElementById(caneca6);
    // var caneco7 = document.getElementById(caneca7);
    // var caneco8 = document.getElementById(caneca8);
    // var caneco9 = document.getElementById(caneca9);
    // var caneco10 = document.getElementById(caneca10);
    // var caneco11 = document.getElementById(caneca11);
    // var caneco12 = document.getElementById(caneca12);

    var copo = copinho1.style.backgroundColor;
    //var caneco = caneco1.style.backgroundColor;

    if (sentido) {
        copinho1.style.backgroundColor = copinho3.style.backgroundColor;
        copinho3.style.backgroundColor = copinho4.style.backgroundColor;
        copinho4.style.backgroundColor = copinho2.style.backgroundColor;
        copinho2.style.backgroundColor = copo;
        // diferente daki pra frente
        caneco1.style.backgroundColor = caneco7.style.backgroundColor;
        caneco7.style.backgroundColor = caneco5.style.backgroundColor;
        caneco5.style.backgroundColor = caneco3.style.backgroundColor;
        caneco3.style.backgroundColor = caneco;
        caneco = caneco2.style.backgroundColor;
        caneco2.style.backgroundColor = caneco8.style.backgroundColor;
        caneco8.style.backgroundColor = caneco6.style.backgroundColor;
        caneco6.style.backgroundColor = caneco4.style.backgroundColor;
        caneco4.style.backgroundColor = caneco;
    }
    else {
        copinho1.style.backgroundColor = copinho3.style.backgroundColor;
        copinho3.style.backgroundColor = copinho9.style.backgroundColor;
        copinho9.style.backgroundColor = copinho7.style.backgroundColor;
        copinho7.style.backgroundColor = copo;
        copo = copinho2.style.backgroundColor;
        copinho2.style.backgroundColor = copinho6.style.backgroundColor;
        copinho6.style.backgroundColor = copinho8.style.backgroundColor;
        copinho8.style.backgroundColor = copinho4.style.backgroundColor;
        copinho4.style.backgroundColor = copo;
        // diferente daki pra frente
        // caneco1.style.backgroundColor = caneco3.style.backgroundColor;
        // caneco3.style.backgroundColor = caneco5.style.backgroundColor;
        // caneco5.style.backgroundColor = caneco7.style.backgroundColor;
        // caneco7.style.backgroundColor = caneco;
        // caneco = caneco2.style.backgroundColor;
        // caneco2.style.backgroundColor = caneco4.style.backgroundColor;
        // caneco4.style.backgroundColor = caneco6.style.backgroundColor;
        // caneco6.style.backgroundColor = caneco8.style.backgroundColor;
        // caneco8.style.backgroundColor = caneco;

    }

    let som = new Audio("../src/click.mp3"); // Substitua pelo caminho correto do seu arquivo
    som.play();
    // console.log(copinho.style.backgroundColor);
}


function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function embaralha() {
    let i = 0;
    while (i < 30) {
        const x = Math.floor(Math.random() * 2);
        const y = Math.floor(Math.random() * 6) + 1;
        console.log(i);
        comandoCor(x, y);
        i++;
        await esperar(50); // Espera 1 segundo antes de continuar
    }
}