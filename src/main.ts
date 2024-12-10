import './style.css'

document.getElementById("getBtn")?.addEventListener("click", async () => {
  const pokemonSearch = document.getElementById("pokemonSearch") as HTMLInputElement | null;
  
  if (!pokemonSearch) {
    console.log("Du måste skriva en pokémon!");
    return
  }
  const pokemonValue = pokemonSearch.value  

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonValue}`);
  const data = await response.json();

  console.log(data);

  //createHtml();
});