/* Esta funcion valida los "Numeros", lo que vendiran a ser las stats pokemons 
   El primer if verefica que sea un  numero, la segunda condificon verefica que no supere
   cierta cantidad y en caso de que ninguna se cumpla devuelve un string vacio*/

export const validatenumber = (form) => {
  const numerosPokemon = /^[0-9]+$/i;
  const errors = {};

  if (!numerosPokemon.test(form.attack)) {
    errors.attack = "El Ataque debe ser un numero";
  } else if (form.attack > 999) {
    errors.attack = "El Ataque debe ser menor a 999";
  } else {
    errors.attack = "";
  }
  if (!numerosPokemon.test(form.speed)) {
    errors.speed = "La Velocidad debe ser un numero";
  } else if (form.speed > 999) {
    errors.speed = "La Velocidad debe ser menor a 999";
  } else {
    errors.speed = "";
  }
  if (!numerosPokemon.test(form.defense)) {
    errors.defense = "La Defensa debe ser un numero";
  } else if (form.defense > 999) {
    errors.defense = "La Defensa debe ser menor a 999";
  } else {
    errors.defense = "";
  }
  if (!numerosPokemon.test(form.specialattack)) {
    errors.specialattack = "La Ataque Especial debe ser un numero";
  } else if (form.specialattack > 999) {
    errors.specialattack = "La Ataque Especial debe ser menor a 999";
  } else {
    errors.specialattack = "";
  }
  if (!numerosPokemon.test(form.specialdefense)) {
    errors.specialdefense = "La Defensa Especial debe ser un numero";
  } else if (form.specialdefense > 999) {
    errors.specialdefense = "La Defensa Especial debe ser menor a 999";
  } else {
    errors.specialdefense = "";
  }
  if (!numerosPokemon.test(form.weight)) {
    errors.weight = "La Peso debe ser un numero";
  } else if (form.weight > 100) {
    errors.weight = "La Peso debe ser menor a 100";
  } else {
    errors.weight = "";
  }
  if (!numerosPokemon.test(form.height)) {
    errors.height = "La Altura debe ser un numero";
  } else if (form.height > 100) {
    errors.height = "La Altura debe ser menor a 100";
  } else {
    errors.height = "";
  }
  if (!numerosPokemon.test(form.life)) {
    errors.life = "La Vida debe ser un numero";
  } else if (form.life > 999) {
    errors.life = "La Vida debe ser menor a 999";
  } else {
    errors.life = "";
  }

  return errors;
};

/* Por este lado, esta el validate para los tipos pokemons, lo primero verefica la maxima 
   cantidad de tipos pokemons posibles, lo siguiente verefica que sea al menos 1(UNO) tipo pokemon 
   seleccionado */

export const validateType = (type) => {
  const errors = {};
  if (type.length > 3) {
    errors.type = "Has elegido demasiados Tipos, Elige hasta 3 Tipos pokemons";
  } else if (type.length === 0) {
    errors.type = "Tienes que elegir al menos un Tipo pokemon";
  } else {
    errors.type = "";
  }
  return errors;
};

/* no e agregado validacion imagenes, porque todavia no e podido subirlas, me centrare mas en el resto */
export const validateImage = ({ image }) => {};
