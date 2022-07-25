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
            let buscar = prompt("Ingrese DNI del Paciente")
            let busqueda = pacientes.find (paciente => paciente.dni === buscar)
            if (busqueda === undefined){
                alert("Paciente no encontrado")                
            }
            else{
                console.log (busqueda)            
            }
            mostrarOpciones()
            break;

        case "C":
            alert("Muchas Gracias")
            console.log(pacientes)
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





const user1 = "usuario1";
const pass1 = "pass1";

let usuario = "";
let contraseña = "";
let continuar = "";
let usuarios = []
let pacientes = []

class Usuario {
    constructor(usuario, pass) {
        this.usuario = usuario;
        this.pass = pass;
    }
}

class Paciente {
    constructor(nombre, apellido, dni, histclin) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.histclin = histclin;
    }
}

init ();

function init(){
    pedirdatos ();
    let valid = validacion(usuario, contraseña);
    validarlog (valid);
}


function pedirdatos (){
    usuario = prompt ("Ingrese Usuario");
    contraseña = prompt ("Ingrese Contraseña");
}

function validacion (u, p){
    let valido=false;

    if ( u===user1 && p===pass1) 
        {
        valido = true;
    }
    return valido;
}

function validarlog(isValid) {
    if (!isValid){
        alert("Error");
        init();
    }
    else {        
        alert("Login Exitoso");
        mostrarOpciones()
    }
}





function mostrarOpciones(){
    let opcion = prompt("A-Ingresar// B-Buscar//N- Nuevo Usuario // S-Salir")

    switch (opcion){
        case "A":
            continuar = "Y"
            cargardatospte();
            break;
        
        case "B":
            let buscar = prompt("Ingrese DNI del Paciente")
            let busqueda = pacientes.find (paciente => paciente.dni === buscar)
            if (busqueda === undefined){
                alert("Paciente no encontrado")                
            }
            else{
                console.log (busqueda)            
            }
            mostrarOpciones()
            break;

        case "S":
            alert("Muchas Gracias")
            console.log(pacientes)
            break;

            case "N":
                continuar = "Y";
                crearUsuario();
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

function crearUsuario() {
    while (continuar === "Y") {
        let usurio = prompt("Ingrese nuevo Usuario")
        let pass = prompt("Ingrese nueva contraseña")
        

        let usuario = new Usuario(usuario, pass)
        usuarios.push(usuarios)

        continuar = prompt("Añadir otro usuario? Y/N")
    }
    mostrarOpciones()
}






