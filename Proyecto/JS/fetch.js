
const contenedor = document.getElementById("contenedor")


function traerPokemones(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        cartasPokemon(data)
        console.log(data)
      });
  }

  function cargarPokemones(num){
    for (let i = 1; i<= num; i++ ){
        traerPokemones(i)
    }
  }

 

  function cartasPokemon (pokemon){

   
    const contenedorCarta = document.createElement(`div`)
    contenedorCarta.classList.add(`pokemon-container`)
    const card = document.createElement (`div`)
    card.innerHTML =`<div class="card" style="width: 18rem;">
                    <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${pokemon.name}</h5>
                    <p class="card-text"></p>
                    <button class="btn btn-primary">Agregar a favoritos</button>
                    </div>
                    </div>`
    contenedorCarta.appendChild(card)
    contenedor.appendChild(contenedorCarta)
    

  /*
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  cardContainer.appendChild(card);
  contenedor.appendChild(cardContainer);
    */
  }
  cargarPokemones(20)




body {
    background: rgb(85, 144, 189);
    background: linear-gradient(
      90deg,
      rgba(85, 144, 189, 1) 0%,
      rgba(108, 183, 240, 1) 54%,
      rgba(182, 216, 242, 1) 82%
    );
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-family: "Oswald", sans-serif;
  }
  
  h1 {
    color: white;
  }
  
  .pokemon-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    margin-top: 20px;
  }
  
  .pokemon-block,
  .pokemon-block-back {
    border-radius: 10px;
    padding: 10px;
    background-color: white;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  }
  
  .img-container {
    background-image: url("./blob.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
  
  .pokemon-block p {
    margin: 5px;
  }
  
  .name {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  #spinner {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  
  .pagination {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }
  
  .card-container {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
  .flip-card:hover .card-container {
    transform: rotateY(180deg);
  }
  
  .pokemon-block,
  .pokemon-block-back {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  
  .pokemon-block-back {
    transform: rotateY(180deg);
    position: absolute;
    top: 0%;
  }
  
  .stat-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    text-align: left;
  }

