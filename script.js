let currentPokemon;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon';
    let response = await fetch(url);
    let currentPokemon = await response.json();

    console.log('Loaded pokemon', currentPokemon);

    renderPokemonInfo(currentPokemon);
}

function renderPokemonInfo(currentPokemon) {
    document.getElementById('pokemonName').innerHTML = currentPokemon['results'][0]['name'];
    document.getElementById('pokemonImg').src = currentPokemon['sprites']['front_default'];
}