let pacientes = []


class Paciente {
    constructor(nombre, apellido, dni, histclin) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.histclin = histclin;
    }
}

let ingpte = document.getElementById ("ingresar")
ingpte.onclick = () => cargardatospte()

let buscarpte = document.getElementById ("buscarpte")
buscarpte.onclick = () => mostrarPaciente ()




function cargardatospte() {
    
        let nombre = prompt("Ingrese Nombre")
        let apellido = prompt("Ingrese apellido")
        let dni = prompt("Ingrese DNI")
        let histclin = prompt("Ingrese Historia Clinica")

        let paciente = new Paciente(nombre, apellido, dni, histclin)
        pacientes.push(paciente)
    
}

function mostrarPaciente() {

    let buscar = prompt("Ingrese DNI del Paciente")
                let busqueda = pacientes.find (paciente => paciente.dni === buscar)
                if (busqueda === undefined){
                    alert("Paciente no encontrado")                
                }
                else{
                    let conteiner = document.createElement (`Div`)
                    conteiner.innerHTML = `<h3>Nombre: ${busqueda.nombre}</h3>
                                          <h3>Apellido: ${busqueda.apellido}</h3>
                                          <h3>Historia Clinica: ${busqueda.histclin}</h3>`
                    document.body.appendChild(conteiner)               
                }

}
