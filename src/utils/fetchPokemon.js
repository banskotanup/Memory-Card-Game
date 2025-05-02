export async function getPokemonData(count = 12) {
  const pokemonList = [];
  for (let i = 1; i <= count; i++) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const res = await response.json();
      const { id, name, sprites } = res;

      pokemonList.push({
        id,
        name,
        img: sprites.front_default,
      });
    } catch (err) {
      console.error(`Failed to fetch Pokémon ID ${i}:`, err);
    }
  }

  return pokemonList;
}
