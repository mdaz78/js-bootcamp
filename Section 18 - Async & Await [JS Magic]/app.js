"use strict";

// parallel requests
async function get3Pokemon() {
  const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

  // const pokemon1 = await promise1;
  // const pokemon2 = await promise2;
  // const pokemon3 = await promise3;

  const [pokemon1, pokemon2, pokemon3] = await Promise.all([
    promise1,
    promise2,
    promise3,
  ]);

  console.log(pokemon1.data);
  console.log(pokemon2.data);
  console.log(pokemon3.data);
}

get3Pokemon();
