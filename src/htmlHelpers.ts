import { Ipokemon } from "./models/Ipokémon";

export function createHtml (pokemon: Ipokemon) {
    const pokemonContainer = document.getElementById("pokemoneContainer");

    if (pokemonContainer) {
        pokemonContainer.innerHTML = "";
    }
}