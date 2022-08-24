const buscarpte = document.getElementById("buscarpte")
buscarpte.addEventListener("click", () => { buscarPte() })



function buscarPte() {
    
    const buscardni = document.createElement(`div`)
    buscardni.innerHTML = `<input type="text" name="dnibusc" id="dnibusc" placeholder="DNI">
                           <button id="buscar">Buscar</button>`
    document.body.appendChild(buscardni)

    const btnbuscar = document.getElementById("buscar")
    btnbuscar.addEventListener("click", () => { mostrarPaciente() })
}


function mostrarPaciente() {

    let buscar = document.getElementById("dnibusc").value
    let busqueda = pacientes.find(paciente => paciente.dni === buscar)
    

    if (busqueda === undefined) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Paciente no encontrado',
          })
    }
    else {
        let conteiner = document.createElement(`Div`)
        conteiner.innerHTML = `<h3>Nombre: ${busqueda.nombre}</h3>
                                          <h3>Apellido: ${busqueda.apellido}</h3>
                                          <h3>Historia Clinica: ${busqueda.histclin}</h3>`
        document.body.appendChild(conteiner)
    }


}

function mostrarPte() {
    let conteiner = document.createElement(`Div`)
    conteiner.innerHTML = `<h3>Nombre: ${busqueda.nombre}</h3>
                                      <h3>Apellido: ${busqueda.apellido}</h3>
                                      <h3>Historia Clinica: ${busqueda.histclin}</h3>`
    document.body.appendChild(conteiner)

}