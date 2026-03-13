
function verificar(){

let horarioDisponivel = document.getElementById("horario").checked;
let pacienteCadastrado = document.getElementById("paciente").checked;

if(horarioDisponivel && pacienteCadastrado){
    document.getElementById("resultado").innerText = "Consulta pode ser agendada.";
}else{
    document.getElementById("resultado").innerText = "Consulta NÃO pode ser agendada.";
}

}

document.getElementById("btn3voltar").addEventListener("click", function(){
    window.location.href = "index.html";
});