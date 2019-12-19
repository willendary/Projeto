var nome = ""

function NumeroAleatorio() {
    var aleatorio = Math.random();
        alert("Um número aleatório: " + aleatorio);
    nome = window.prompt("Qual o seu nome");
}

function MostraNome(){
if (nome=="Willian"){
    alert("Bem vindo " + nome);
} else {
    alert("O nome digitado não é Willian");
}
    
}

function SomaValores(){
var num2 = Number(document.getElementById("n1").value);
var num1 = Number(document.getElementById("n2").value);
var soma = num1 + num2;
alert("A soma dos valores é " + soma);
}

