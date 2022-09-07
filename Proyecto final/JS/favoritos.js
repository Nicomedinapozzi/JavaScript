let pokemonesfav = []

actualizarArray()

function actualizarArray(){    
    pokemonesfav = JSON.parse(localStorage.getItem("PokeFav"))
}

class Pokemon {
    constructor(nombre, id, img) {
        this.name = nombre;
        this.id = id;
        this.img = img;
    }
}

function crearPokemonFav(pokemon) {
    let nombre = pokemon.name
    let idd = pokemon.id
    let img = pokemon.sprites.front_default
    let poke = new Pokemon(nombre, idd , img);
    pokemonesfav.push(poke);
    localStorage.setItem("PokeFav", JSON.stringify(pokemonesfav))
}

//const mostfav= document.getElementById ("favoritos")
//mostfav.addEventListener("click", ()=>{mostrarPokeFav()})

const verfav = document.getElementById(`favoritos`)
verfav.addEventListener("click", ()=>{mostrarPokeFav()})

function mostrarPokeFav(){    
    contenedor.innerHTML = ""
    const btnvolver = document.createElement (`button`)
    btnvolver.classList.add(`btn`)
    btnvolver.classList.add(`btn-primary`)
    btnvolver.innerText = "Volver"
    contenedor.appendChild(btnvolver)

    btnvolver.addEventListener('click', () => {
        contenedor.innerHTML = ""
        cargarPokemones(100)})


    pokemonesfav.forEach((pokemon) => {       
        cartaFavs(pokemon);
      })

}

function cartaFavs(pokemon){    

    const contenedorCarta = document.createElement(`div`)
    contenedorCarta.classList.add(`pokemon-container`)
    
    const divcarta = document.createElement(`div`)
    divcarta.setAttribute(`style`, `width: 18rem;`)
    divcarta.classList.add(`card`)
    divcarta.innerHTML = `<img src="${pokemon.img}" class="card-img-top" alt="${pokemon.name}">`

    const bodycarta = document.createElement(`div`)
    bodycarta.setAttribute(`id`, `bodycarta-${pokemon.id}`)
    bodycarta.classList.add(`card-body`)
    bodycarta.innerHTML = `<h5 class="card-title">${pokemon.name}</h5>
                          <p class="card-text"></p>`
    

    divcarta.appendChild(bodycarta)

    contenedorCarta.appendChild(divcarta)    
    contenedor.appendChild(contenedorCarta)

}



