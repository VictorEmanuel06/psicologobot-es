// Criação do Array com os nomes dos 4 pacientes
const pacientes = [
    {nome: "Julia", idade: 18, Problema: "Ansiedade"},
    {nome: "Rodrigo", idade: 22, Problema: "Depressâo"},
    {nome: "Pedro", idade: 28, Problema: "Autoestima"}
];

function mostrarPacientes(){

    let texto = "";

    // O forEach percorre a lista de pacientes um por um
    pacientes.forEach(function(paciente){

        // Concatena a string fixa com a variável paciente
        texto += 
        "Paciente: " + paciente.nome + "<br>" +
        "Idade: " + paciente.idade + "<br>" +
        "Problema: " + paciente.Problema + "<br><br>"

    });

    //Mostrar o resultado na página
    document.getElementById("resultado").innerHTML = texto;
}

document.getElementById("btn4voltar").addEventListener("click", function(){
    window.location.href = "index.html";
});