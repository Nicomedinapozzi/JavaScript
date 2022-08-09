let pacientes = [];

class Paciente {
    constructor(nombre, apellido, dni, histclin) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.histclin = histclin;
    }
}

const cargarpte = document.getElementById ("cargarpte")
cargarpte.addEventListener("click", () =>{cargarform()})

function cargarform(){
    const formulario = document.createElement("div")
    formulario.innerHTML = `<fieldset>
                            <input type="text" name="nombre" id="nombre" placeholder="nombre">
                            <input type="text" name="apellido" id="apellido" placeholder="Apellido">
                            <input type="text" name="dni" id="dni" placeholder="DNI">
                            <input type="text" name="hc" id="hc" placeholder="Historia Clinica"> 
                            <button id="cargar">Cargar</button>       
                            </fieldset>`
    document.body.appendChild(formulario)

    const btncargar = document.getElementById("cargar")
    btncargar.onclick = () =>{cargarDatos()}


}

function cargarDatos() {
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let dni = document.getElementById("dni").value;
        let histclin = document.getElementById("hc").value;

        let paciente = new Paciente(nombre, apellido, dni, histclin);
        pacientes.push(paciente);

}