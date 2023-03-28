/* Funcion general para traer la data de la api */
const copyFunction = (obj) => {
  const responsive = obj.data;
  const newPokemon = {
    name: responsive.name,
    types: responsive.types.map((e) => e.type.name),
    weight:
      responsive.weight.toString().length !== 0
        ? responsive.weight
        : "Peso desconocido",
    height:
      responsive.height.toString().length !== 0
        ? responsive.height
        : "Peso desconocido",
    life: responsive.stats[0].base_stat,
    attack: responsive.stats[1].base_stat,
    defense: responsive.stats[2].base_stat,
    Speed: responsive.stats[5].base_stat,
    Special_Defense: responsive.stats[3].base_stat,
    Special_Attack: responsive.stats[4].base_stat,
    image: responsive.sprites.other["official-artwork"].front_default,
    id: responsive.id,
    Created: false,
  };
  return newPokemon;
};

module.exports = {
  copyFunction,
};
