/* funcion, recibe typo y dependendinedo cual tipo sea,  lo pushea a una array y lo devuelve, 
   esto para elegir el css */
export const DetailCSS = (type) => {
  let NameCSSType = [];
  let nametype = type !== undefined ? type[0] : "no funciona";

  if (nametype === "grass") {
    NameCSSType.push(nametype);
  } else if (nametype === "fire") {
    NameCSSType.push(nametype);
  } else if (nametype === "water") {
    NameCSSType.push(nametype);
  } else if (nametype === "normal") {
    NameCSSType.push(nametype);
  } else if (nametype === "fighting") {
    NameCSSType.push(nametype);
  } else if (nametype === "flying") {
    NameCSSType.push(nametype);
  } else if (nametype === "poison") {
    NameCSSType.push(nametype);
  } else if (nametype === "ground") {
    NameCSSType.push(nametype);
  } else if (nametype === "rock") {
    NameCSSType.push(nametype);
  } else if (nametype === "bug") {
    NameCSSType.push(nametype);
  } else if (nametype === "ghost") {
    NameCSSType.push(nametype);
  } else if (nametype === "electric") {
    NameCSSType.push(nametype);
  } else if (nametype === "psychic") {
    NameCSSType.push(nametype);
  } else if (nametype === "ice") {
    NameCSSType.push(nametype);
  } else if (nametype === "dragon") {
    NameCSSType.push(nametype);
  }

  return NameCSSType.length !== 0 ? NameCSSType.toString() : "detailDiv";
};
