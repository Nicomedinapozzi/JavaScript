const contenedor = document.getElementById("contenedor")

cargarPokemones(100)

function traerPokemones(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            cartasPokemon(data)
        });

}

function cargarPokemones(num) {
    for (let i = 1; i <= num; i++) {
        traerPokemones(i)

    }
}



function cartasPokemon(pokemon) {
    const contenedorCarta = document.createElement(`div`)
    contenedorCarta.classList.add(`pokemon-container`)
    
    const divcarta = document.createElement(`div`)
    divcarta.setAttribute(`id`, `pokecarta-${pokemon.id}`)
    divcarta.setAttribute(`style`, `width: 18rem;`)
    divcarta.classList.add(`card`)
    divcarta.innerHTML = `<img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">`

    const bodycarta = document.createElement(`div`)
    bodycarta.setAttribute(`id`, `bodycarta-${pokemon.id}`)
    bodycarta.classList.add(`card-body`)
    bodycarta.innerHTML = `<h5 class="card-title">${pokemon.name}</h5>
                          <p class="card-text"></p>`

    const btnfav = document.createElement(`button`)
    btnfav.setAttribute(`id`, `pokefav-${pokemon.id}`)
    btnfav.classList.add(`btn`)
    btnfav.classList.add(`btn-primary`)
    btnfav.innerText = "Agregar a Favoritos"
    

    divcarta.appendChild(bodycarta)
    divcarta.appendChild(btnfav)

    contenedorCarta.appendChild(divcarta)
    btnfav.addEventListener('click', () => {
        crearPokemonFav(pokemon)   

    })
    contenedor.appendChild(contenedorCarta)


}






