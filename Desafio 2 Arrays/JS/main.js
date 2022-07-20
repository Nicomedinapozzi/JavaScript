let pacientes = []


class Paciente {
    constructor(nombre, apellido, dni, histclin) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.histclin = histclin;
    }
}
let continuar = " "

mostrarOpciones()

function mostrarOpciones(){
    let opcion = prompt("A-Ingresar// B-Buscar//C-Salir")

    switch (opcion){
        case "A":
            continuar = "Y"
            cargardatospte();
            break;
        
        case "B":
            console.log(pacientes);
            mostrarOpciones();
            break;

        case "C":
            alert("Muchas Gracias")
            break;

        default:
            alert("Opcion no valida")
            mostrarOpciones();
            break;
            
    }
}


function cargardatospte() {
    while (continuar === "Y") {
        let nombre = prompt("Ingrese Nombre")
        let apellido = prompt("Ingrese apellido")
        let dni = prompt("Ingrese DNI")
        let histclin = prompt("Ingrese Historia Clinica")

        let paciente = new Paciente(nombre, apellido, dni, histclin)
        pacientes.push(paciente)

        continuar = prompt("Seguir Ingresando? Y/N")
    }
    mostrarOpciones()
}







