let saida, i;

function contar(){
    saida = ""
    for(i=0;i<=10;i++){
        saida = saida + i;
    }
    document.getElementById("resultado").textContent = saida;
}

let s, e;

function contar2(){
    s = ""
    for(i=10;i>=0;i--){
        s = s + i;
    }
    document.getElementById("resultado2").textContent = s;
}

let inicio, a, saida3;

function ContarAteCem(){
    inicio = Number(document.getElementById("inicio").value);
    saida3 = ""
    for(a = inicio; a <=100;a++){
        saida3 = saida3 + a + "<br>"
    }

    document.getElementById("atecem").innerHTML = saida3
}

let saida4, valorTabuada, t;

function tabuada(){
    valorTabuada = Number(document.getElementById("valorTabuada").value);
    saida4 = "";
    for(t=0;t<=10;t++){
        saida4 = saida4 + valorTabuada + "X" + t + "=" + (valorTabuada*t) + "<br>";
    }
    document.getElementById("resultadoTabuada").innerHTML = saida4;
}

let saida5, q;
function Gerar(){
    saida5 = ""
    for(q = 0; q<=5; q++){
        saida5 = saida5 + '<div class="caixa"> </div>'
    }

    document.getElementById("quadrado").innerHTML = saida5
}