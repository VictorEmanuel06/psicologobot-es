function criarPaciente(){

    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let problema = document.getElementById("problema").value

    // objeto paciente
    const paciente = {
        nome: nome,
        idade: idade,
        problema: problema
    }

    // pegar propriedades
    const propriedades = Object.keys(paciente)

    // mostrar no console
    console.log("Objeto paciente:", paciente)
    console.log("Propriedades do objeto:", propriedades)
}

document.getElementById("btnvoltar").addEventListener("click", function(){
    window.location.href = "index.html";
});