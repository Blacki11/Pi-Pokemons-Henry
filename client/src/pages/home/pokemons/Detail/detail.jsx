import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../../../Redux/actions/Actions";
import "./detalles.css";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(getDetail(id));
  }); // falta array de dependencia, borrado por recomendacion del propio react?

  return (
    <div className="conteiner">
      <div className="detailDiv">
        <h1>{pokemon?.name}</h1>
        <img
          className="rightDetail"
          src={pokemon.sprites?.other["official-artwork"].front_default}
          alt={pokemon?.name}
        />
        <h3>Peso: {pokemon.weight ? pokemon.weight : "Desconocido"}</h3>
        <h3>Altura: {pokemon.height ? pokemon.height : "Desconocido"}</h3>
        <h3>Ataque: {pokemon?.Attack}</h3>
        <h3>Defensa: {pokemon?.Defense}</h3>
        <h3>Velocidad: {pokemon.Speed ? pokemon.speed : "Desconocido"}</h3>
        <h3>
          Ataque Especial:
          {pokemon?.Special_Attack}
        </h3>
        <h3>
          Defensa Especial:
          {pokemon?.Special_Defense}
        </h3>
        <h3>Typos: {pokemon?.type}</h3>
      </div>
    </div>
  );
}
