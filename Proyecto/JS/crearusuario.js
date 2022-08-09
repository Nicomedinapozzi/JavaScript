

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