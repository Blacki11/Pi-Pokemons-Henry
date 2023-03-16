import ShowPok from "./showPok";
import React from "react";
import { useSelector } from "react-redux";

export default function LoadPok(props) {
  // const { pokemons } = props;

  const pokemons = useSelector((state) => state.pokemons);

  return (
    <div>
      {pokemons ? (
        pokemons.map((e, index) => (
          <ShowPok
            //imagen={e.image}
            name={e.name}
            url={e.url}
            //type={e.types}
            key={index}
            //id={e.id}
          />
        ))
      ) : (
        <h2>
          La primera generacion pokemon desaparecio, Porfavor contacta a
          administracion para ayudarlos
        </h2>
      )}
    </div>
  );
}
