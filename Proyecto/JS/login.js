
let usuarios = [{ usuario: "usuario1", pass: "pass1" }];


class Usuario {
    constructor(usuario, pass) {
        this.usuario = usuario;
        this.pass = pass;
    }
}



programarBoton()

function programarBoton() {
   let btn = document.getElementById("acceder");
   btn.addEventListener("click", ()=>{validacion()})
}

function validacion() {
    const u = document.getElementById("usuario").value
    const p = document.getElementById("contrasena").value;
    let validuser= usuarios.find(usuario => usuario.usuario=== u);
    let validpass= usuarios.find(usuario => usuario.pass === p );
    if (validuser === undefined ) {
        alert("Usuario o Contraseña incorrectos");
    }
    
    else if (validpass === undefined) {
        alert("Usuario o Contraseña incorrectos");
    }

    else {
        window.location.href="Paginas/principal.html"
    }
}










