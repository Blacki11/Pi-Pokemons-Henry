import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../../../Redux/actions/Actions";
import { DetailCSS } from "./functioncsstype";
import "./detail.css/detalles.css";

/* Funcion que muestra el detalle de los pokemons */
export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons);

  /* Llama al pokemon dependiendo la id tomada con useparams */
  useEffect(() => {
    dispatch(getDetail(id));
  }, []); // falta array de dependencia, borrado por recomendacion del propio react?

  /* La primera constante es para devolver un string, ya que desde el back nos devuelven un array
     y la segunda constante name, es para poner en mayuscula la primera letra del nobmre de los pokemons */
  const type = pokemon.types ? pokemon.types.join(" / ") : "loading";
  const name = pokemon.name
    ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    : "loading";

  /* Y volvemos a un tipo return con css, sus respectivas funciones y values */
  return (
    <div className="conteiner">
      <div
        className={` ${DetailCSS(
          pokemon.types
        )} `} /* Esto es dependiendo el tipo pokemon primario elegiria uno u otro css */
      >
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
