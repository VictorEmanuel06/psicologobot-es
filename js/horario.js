function mostrarAgenda(){
 
let agenda = [
["08:00","09:00","10:00"],
["11:00","14:00","15:00"]
];
 
let resultado = document.getElementById("resultado");
 
resultado.innerHTML="";
 
for(let linha=0; linha<agenda.length; linha++){
 
    for(let coluna=0; coluna<agenda[linha].length; coluna++){
 
        let div = document.createElement("div");
 
        div.className = "horario";
 
        div.innerText = agenda[linha][coluna];
 
        /* interação ao clicar */
        div.onclick = function(){
            alert("Horário selecionado: " + agenda[linha][coluna]);
        };
 
        resultado.appendChild(div);
    }
 
}
 
}

document.getElementById("btn2voltar").addEventListener("click", function(){
    window.location.href = "index.html";
});