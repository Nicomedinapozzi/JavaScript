
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
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o Contraseña incorrectos',
          })
    }
    
    else if (validpass === undefined) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o Contraseña incorrectos',
          })
    }

    else {
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Acceso correcto',
            showConfirmButton: true,
            timer: 3000          
          })

          window.location.href="Paginas/principal.html"
    }
}










