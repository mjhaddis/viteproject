import { createHtml } from './htmlHelpers';
import { IAPIresponse } from './models/IAPIresponse';
import './style.css'

document.getElementById("getBtn")?.addEventListener("click", async () => {
  const pokemonSearch = document.getElementById("pokemonSearch") as HTMLInputElement | null;
  
  if (!pokemonSearch) {
    alert("Du måste skriva en pokémon!");
    return
  }
  const pokemonValue = pokemonSearch.value  

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonValue}`);
  const data: IAPIresponse = await response.json();

  createHtml(data.sprites);
  
  console.log(data);
});