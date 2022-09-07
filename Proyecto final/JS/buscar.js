const btnbusc = document.getElementById("bp")
btnbusc.addEventListener("click", () => { buscarpokemon() })

function buscarpokemon(){
    contenedor.innerHTML = ""
    const busc = document.getElementById("buscapoke").value
    if (busc === ""){
        cargarPokemones(100)
    }
    else{
        traerPokemones(busc)
    }
    }



