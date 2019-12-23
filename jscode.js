var nome = ""

function ObtemNome() {
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
var num1 = Number(document.getElementById("n1").value);
var num2 = Number(document.getElementById("n2").value);
var soma = num1 + num2;
alert("A soma dos valores é " + soma);
}

function MultiplicaValores(){
    var num1 = Number(document.getElementById("n1").value);
    var num2 = Number(document.getElementById("n2").value);
    var multiplicar = num1 * num2;
    alert("A multiplicação dos valores é " + multiplicar);
    }

function SubtraiValores(){
    var num1 = Number(document.getElementById("n1").value);
    var num2 = Number(document.getElementById("n2").value);
    var subtrair = num1 - num2;
        alert("A subtração dos valores é " + subtrair);
        }
      
function DivideValores(){
    var num1 = Number(document.getElementById("n1").value);
    var num2 = Number(document.getElementById("n2").value);
    var divisao = num1/num2;
    alert("A divisão dos valores é " + divisao);
    //window.prompt("O valor da divisão é",divisao) - também pode ser usado no lugar do alert()
}

function GeraNumero() {
    var aleatorio1 = Math.floor(Math.random() * 1000);
    var    aleatorio2 =  Math.floor(Math.random() * 1000);
        (document.getElementById("n1").value) = aleatorio1;
        (document.getElementById("n2").value) = aleatorio2;
    
}

