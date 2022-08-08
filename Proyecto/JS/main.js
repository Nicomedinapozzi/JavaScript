
let usuario = "";
let contraseña = "";
let continuar = "";
let usuarios = [{ usuario: "usuario1", pass: "pass1" }];
let pacientes = [];

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

init();

function init() {
    pedirdatos();
    let valid = validacion(usuario, contraseña);
    validarlog(valid);
}


function pedirdatos() {
    usuario = prompt("Ingrese Usuario");
    contraseña = prompt("Ingrese Contraseña");
}

function validacion(u, p) {
    let validuser= usuarios.find(usuario => usuario.usuario=== u);
    let validpass= usuarios.find(usuario => usuario.pass === p );
    

    let valido = false;

    if (validuser === undefined ) {
        alert("Usuario o Contraseña incorrectos");
        init();

    }
    
    else if (validpass === undefined) {
        alert("Usuario o Contraseña incorrectos");
        init();
    }

    else {
        
        valido = true;
        return valido;
    }

    
}

function validarlog(isValid) {
    if (!isValid) {
        alert("Error");
        init();
    }
    else {
        alert("Login Exitoso");
        mostrarOpciones();
    }
}





function mostrarOpciones() {
    let opcion = prompt("A-Ingresar// B-Buscar//N- Nuevo Usuario // S-Salir");

    switch (opcion) {
        case "A":
            continuar = "Y";
            cargardatospte();
            break;

        case "B":
            let buscar = prompt("Ingrese DNI del Paciente");
            let busqueda = pacientes.find(paciente => paciente.dni === buscar);
            if (busqueda === undefined) {
                alert("Paciente no encontrado");
            }
            else {
                console.log(busqueda);
            }
            mostrarOpciones();
            break;

        case "S":
            alert("Muchas Gracias");
            console.log(pacientes);
            break;

        case "N":
            continuar = "Y";
            crearUsuario();
            break;

        default:
            alert("Opcion no valida");
            mostrarOpciones();
            break;

    }
}


function cargardatospte() {
    while (continuar === "Y") {
        let nombre = prompt("Ingrese Nombre");
        let apellido = prompt("Ingrese apellido");
        let dni = prompt("Ingrese DNI");
        let histclin = prompt("Ingrese Historia Clinica");

        let paciente = new Paciente(nombre, apellido, dni, histclin);
        pacientes.push(paciente);

        continuar = prompt("Seguir Ingresando? Y/N");
    }
    mostrarOpciones();
}

function crearUsuario() {
    while (continuar === "Y") {
        let usser = prompt("Ingrese nuevo Usuario");
        let pass = prompt("Ingrese nueva contraseña");


        let usuario = new Usuario(usser, pass);
        usuarios.push(usuario);

        continuar = prompt("Añadir otro usuario? Y/N");
    }
    console.log(usuarios);
    mostrarOpciones();
}






