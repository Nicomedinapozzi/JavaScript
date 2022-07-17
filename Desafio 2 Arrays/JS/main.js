let pacientes = []


class Paciente {
    constructor (nombre, apellido,dni,histclin){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.histclin = histclin;
    }
}
let continuar = "Y"
cargardatospte()
function cargardatospte (){
    let nombre = prompt("Ingrese Nombre")
    let apellido = prompt("Ingrese apellido")
    let dni = prompt("Ingrese DNI")
    let histclin = prompt("Ingrese Historia Clinica")

    let paciente= new Paciente (nombre, apellido, dni, histclin)
    pacientes.push(paciente)
    
    continuar = prompt("Seguir Ingresando? Y/N")      
}

if (continuar === "Y"){
    cargardatospte()
}    
else{
    alert("Gracias")
    console.log(pacientes)
}






