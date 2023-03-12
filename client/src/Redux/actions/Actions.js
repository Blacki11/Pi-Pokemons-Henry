import { ADDFAV, DELETEFAV, FILTER, ORDER } from "./ActionsType"

export const agregarFav = (character) => {
  return { type: ADDFAV, payload: character, };
};
export const eliminarFav = (id) => {
  return { type: DELETEFAV, payload: id, };
};

export const filterCards = (status)=>{
  return {type: FILTER, payload: status}
}
export function orderCards (id){
  return { type: ORDER, payload: id, };
};
