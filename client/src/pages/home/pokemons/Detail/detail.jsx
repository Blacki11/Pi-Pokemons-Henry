import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../../../Redux/actions/Actions";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(getDetail(id));
  }, [id]);

  return (
    <div>
      <h1>{pokemon?.name}</h1>
      <img
        src={pokemon.sprites?.other["official-artwork"].front_default}
        alt={pokemon?.name}
      />
      <h1>{pokemon.weight ? pokemon.weight : "Peso Desconocido"}</h1>
      <h1>{pokemon.height ? pokemon.weight : "Altura Desconocido"}</h1>
      <h1>{pokemon?.Attack}</h1>
      <h1>{pokemon?.Defense}</h1>
      <h1>{pokemon.Speed ? pokemon.weight : "Velocidad Desconocido"}</h1>
      <h1>{pokemon?.Special_Attack}</h1>
      <h1>{pokemon?.Special_Defense}</h1>
      <h1>{pokemon?.type}</h1>
    </div>
  );
}
