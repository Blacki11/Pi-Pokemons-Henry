import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../../../Redux/actions/Actions";
import "./detalles.css";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons);
  console.log(pokemon);
  useEffect(() => {
    dispatch(getDetail(id));
  }); // falta array de dependencia, borrado por recomendacion del propio react?

  const type = pokemon.Type ? pokemon.Type.join(" / ") : "loading";
  const name = pokemon.name
    ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    : "loading";
  console.log(name, type);

  return (
    <div className="conteiner">
      <div className="detailDiv">
        <h1>{name}</h1>
        <img className="rightDetail" src={pokemon.image} alt={name} />
        <h3>Peso: {pokemon.weight ? pokemon.weight : "Desconocido"}</h3>
        <h3>Altura: {pokemon.height ? pokemon.height : "Desconocido"}</h3>
        <h3>Ataque: {pokemon.attack}</h3>
        <h3>Defensa: {pokemon.defense}</h3>
        <h3>Velocidad: {pokemon.Speed ? pokemon.Speed : "Desconocido"}</h3>
        <h3>
          Ataque Especial:
          {pokemon?.Special_Attack}
        </h3>
        <h3>
          Defensa Especial:
          {pokemon?.Special_Defense}
        </h3>
        <h3>Typos: {type}</h3>
      </div>
    </div>
  );
}
