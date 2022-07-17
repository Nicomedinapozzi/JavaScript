const user1 = "usuario1";
const pass1 = "pass1";

let usuario = "";
let contraseña = "";

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
    }
}

pte()
function pte(){
    pte = prompt("Ingrese Paciente");
}

switch (pte) {    
    case "juan perez" :
        alert ("Historia Clinica de Juan Perez")
        break;

        case "jose perez" :
        alert ("Historia Clinica de jose Perez")
        break;

        case "hugo medina" :
        alert ("Historia Clinica de Hugo Medina")
        break;
        
        case "antonio gomez" :
        alert ("Historia Clinica de antonio gomez")
        break;

        default :
        alert ("No se encontro dicho pte");  
        pte();
        break;   
    
}
