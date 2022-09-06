const contenedor = document.getElementById("contenedor")
let pokemones = []

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
    const card = document.createElement(`div`)
    card.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
                    <div class="card-body">
                    <h5 class="card-title">${pokemon.name}</h5>
                    <p class="card-text"></p>
                    <button class="btn btn-primary" id="pokefav">Agregar a favoritos</button>
                    </div>
                    </div>`
    contenedorCarta.appendChild(card)
    contenedor.appendChild(contenedorCarta)

}


cargarPokemones(5)

