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

export const validateimage = (Image) => {};
