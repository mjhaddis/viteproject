import { Ipokemon } from "./models/Ipokémon";

export function createHtml (pokemon: Ipokemon) {
    const pokemonsContainer = document.getElementById("pokemonContainer");

    if (pokemonsContainer) {
        pokemonsContainer.innerHTML = "";
    }
        const pokemonContainer = document.createElement("div");
        const image = document.createElement("img");

        image.src = pokemon.front_default;

        pokemonContainer.appendChild(image);

        pokemonsContainer?.appendChild(pokemonContainer);

};