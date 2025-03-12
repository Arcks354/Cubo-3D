// #region Define Cor das faces
let letras = "ABCDEF";
let letrasComandos = "ABCDEFGHI";

for (let i = 0; i < 6; i++) {  // i<6 porque são 6 lados do cubo
    for (let j = 1; j < 10; j++) {  //  j<10 porque são 9 faces de cada lado do cubo
        let id = `${letras[i]}${j}`;
        let elemento = document.getElementById(id);
        if (i == 0) {
            elemento.style.backgroundColor = 'red';
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
                        elemento.style.backgroundColor = 'ORANGE';
                    }
                    else{
                        if (i==4) {
                            elemento.style.backgroundColor = 'yellow';
                        }
                        else{
                            if (i==5) {
                                elemento.style.backgroundColor = 'BLACK';
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
    let som = new Audio("../src/click.mp3");
    som.play();
    if (comando == 'A') { mudarCorLado(direcao, 'A1','A2','A3','A4','A6','A7','A8','A9')
        mudarCorFaceLateral(direcao, 'B1','B4','B7','F1','F2','F3','C3','C6','C9','E7','E8','E9') }
    else {
        if (comando == 'B') { mudarCorLado(direcao, 'B1','B2','B3','B4','B6','B7','B8','B9')
            mudarCorFaceLateral(direcao, 'A9','A6','A3','E9','E6','E3','D7','D4','D1','F7','F4','F1')  }
        else {
            if (comando == 'E') { mudarCorLado(!direcao, 'E1','E2','E3','E4','E6','E7','E8','E9')
                mudarCorFaceLateral(direcao, 'A1','A2','A3','B1','B2','B3','D7','D8','D9','C7','C8','C9')   }
            else {
                if (comando == 'D') { mudarCorLado(direcao, 'D1','D2','D3','D4','D6','D7','D8','D9')
                    mudarCorFaceLateral(direcao, 'B3','B6','B9','F7','F8','F9','C1','C4','C7','E1','E2','E3')  }
                else {
                    if (comando == 'C') { mudarCorLado(direcao, 'C1','C2','C3','C4','C6','C7','C8','C9')
                        mudarCorFaceLateral(!direcao, 'A1','A4','A7','F3','F6','F9','D3','D6','D9','E1','E4','E7')  }
                    else {
                        if (comando == 'F') { mudarCorLado(!direcao, 'F1','F2','F3','F4','F6','F7','F8','F9')
                            mudarCorFaceLateral(direcao, 'A7','A8','A9','B7','B8','B9','D1','D2','D3','C1','C2','C3')  }
                        else {
                            if (comando == 'G') {mudarCorFaceLateral(direcao, 'B2','B5','B8','F4','F5','F6','C2','C5','C8','E4','E5','E6')  }
                            else { 
                                if (comando == 'H') {mudarCorFaceLateral(direcao, 'A8','A5','A2','E8','E5','E2','D8','D5','D2','F8','F5','F2')  }
                                else { 
                                    if (comando == 'I') {mudarCorFaceLateral(direcao, 'A4','A5','A6','B4','B5','B6','D4','D5','D6','C4','C5','C6')  }
                                } 
                            } 
                        }
                    }
                }
            }
        }
    }
// VERIFICAR CORNO()
}
function mudarCorLado(sentido, vaso1, vaso2, vaso3, vaso4, vaso6, vaso7, vaso8, vaso9) {
        var face1 = document.getElementById(vaso1);
        var face2 = document.getElementById(vaso2);
        var face3 = document.getElementById(vaso3);
        var face4 = document.getElementById(vaso4);
        var face6 = document.getElementById(vaso6);
        var face7 = document.getElementById(vaso7);
        var face8 = document.getElementById(vaso8);
        var face9 = document.getElementById(vaso9);
    
        var copo = face1.style.backgroundColor;
        if (sentido) {
            face1.style.backgroundColor = face7.style.backgroundColor;
            face7.style.backgroundColor = face9.style.backgroundColor;
            face9.style.backgroundColor = face3.style.backgroundColor;
            face3.style.backgroundColor = copo;
            copo = face2.style.backgroundColor;
            face2.style.backgroundColor = face4.style.backgroundColor;
            face4.style.backgroundColor = face8.style.backgroundColor;
            face8.style.backgroundColor = face6.style.backgroundColor;
            face6.style.backgroundColor = copo;
        }
        else {
            face1.style.backgroundColor = face3.style.backgroundColor;
            face3.style.backgroundColor = face9.style.backgroundColor;
            face9.style.backgroundColor = face7.style.backgroundColor;
            face7.style.backgroundColor = copo;
            copo = face2.style.backgroundColor;
            face2.style.backgroundColor = face6.style.backgroundColor;
            face6.style.backgroundColor = face8.style.backgroundColor;
            face8.style.backgroundColor = face4.style.backgroundColor;
            face4.style.backgroundColor = copo;
        }
    
}
function mudarCorFaceLateral(sentido, fac1, fac2, fac3, fac4, fac5, fac6, fac7, fac8, fac9, fac10, fac11, fac12) {
    var fasse1 = document.getElementById(fac1);
    var fasse2 = document.getElementById(fac2);
    var fasse3 = document.getElementById(fac3);
    var fasse4 = document.getElementById(fac4);
    var fasse5 = document.getElementById(fac5);
    var fasse6 = document.getElementById(fac6);
    var fasse7 = document.getElementById(fac7);
    var fasse8 = document.getElementById(fac8);
    var fasse9 = document.getElementById(fac9);
    var fasse10 = document.getElementById(fac10);
    var fasse11 = document.getElementById(fac11);
    var fasse12 = document.getElementById(fac12);
    var fasse = fasse1.style.backgroundColor;

    if (sentido) {
        fasse1.style.backgroundColor = fasse10.style.backgroundColor;
        fasse10.style.backgroundColor = fasse7.style.backgroundColor;
        fasse7.style.backgroundColor = fasse4.style.backgroundColor;
        fasse4.style.backgroundColor = fasse;
        fasse = fasse2.style.backgroundColor;
        fasse2.style.backgroundColor = fasse11.style.backgroundColor;
        fasse11.style.backgroundColor = fasse8.style.backgroundColor;
        fasse8.style.backgroundColor = fasse5.style.backgroundColor;
        fasse5.style.backgroundColor = fasse;
        fasse = fasse3.style.backgroundColor;
        fasse3.style.backgroundColor = fasse12.style.backgroundColor;
        fasse12.style.backgroundColor = fasse9.style.backgroundColor;
        fasse9.style.backgroundColor = fasse6.style.backgroundColor;
        fasse6.style.backgroundColor = fasse;
    }
    else {
        fasse1.style.backgroundColor = fasse4.style.backgroundColor;
        fasse4.style.backgroundColor = fasse7.style.backgroundColor;
        fasse7.style.backgroundColor = fasse10.style.backgroundColor;
        fasse10.style.backgroundColor = fasse;
        fasse = fasse2.style.backgroundColor;
        fasse2.style.backgroundColor = fasse5.style.backgroundColor;
        fasse5.style.backgroundColor = fasse8.style.backgroundColor;
        fasse8.style.backgroundColor = fasse11.style.backgroundColor;
        fasse11.style.backgroundColor = fasse;
        fasse = fasse3.style.backgroundColor;
        fasse3.style.backgroundColor = fasse6.style.backgroundColor;
        fasse6.style.backgroundColor = fasse9.style.backgroundColor;
        fasse9.style.backgroundColor = fasse12.style.backgroundColor;
        fasse12.style.backgroundColor = fasse;
    }
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function embaralha() {
    tiraMenu();
    let i = 0;
    while (i < 30) {
        const x = Math.floor(Math.random() * 2);
        const y = Math.floor(Math.random() * 9);
        comandoCor(x, letrasComandos[y]);
        i++;
        await esperar(50); // Espera 1 segundo antes de continuar
    }
}

function tiraMenu(){
    document.getElementById('bannerId').classList.add('bannerNone');
}
function colocaMenu(){
    document.getElementById('bannerId').classList.remove('bannerNone');
}

function verificaVitoria(){
    let vitoria = 0;
    outerLoop:
    for (let i = 0; i < 6; i++)
    {
        let id1 = `${letras[i]}1`;
        let faceTeste = document.getElementById(id1);
        let corTeste = faceTeste.style.backgroundColor;
        console.log(corTeste);

        for (let j = 1; j < 10; j++){
            let id = `${letras[i]}${j}`;
            let elemento = document.getElementById(id);
            if(elemento.style.backgroundColor == corTeste){
                vitoria++;
                console.log(vitoria);
            }
            else{
                break outerLoop;
            }
        }
    }
    if(vitoria>=54){
        colocaMenu();
    }
}

function tela(){
    let largura = window.innerWidth;
    let altura = window.innerHeight;
    let cubo = document.getElementById("Cubo");
    let cubo2 = document.getElementById("Cubo2");
    if (altura > largura){
        
        cubo.classList.add('CuboVertical');
        cubo.classList.remove('Cubo');
        cubo2.classList.add('Cubo2Vertical');
        cubo2.classList.remove('Cubo2');
    }
    else{
        cubo.classList.add('Cubo');
        cubo.classList.remove('CuboVertical');
        cubo2.classList.add('Cubo2');
        cubo2.classList.remove('CuboVertical2');
    }
}