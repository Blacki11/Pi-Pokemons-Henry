import ShowPok from "./showPok";
import React from "react";
import { useSelector } from "react-redux";

export default function LoadPok() {
  // const { pokemons } = props;

  const pokemons = useSelector((state) => state.pokemons);

  return (
    <div>
      {typeof pokemons === "object" ? (
        Object.values(pokemons).map((e) => (
          <ShowPok
            imagen={e.image}
            name={e.name}
            type={e.types}
            key={e.id}
            id={e.id}
          />
        ))
      ) : pokemons ? (
        pokemons.map((e, id) => (
          <ShowPok
            imagen={e.image}
            name={e.name}
            type={e.types}
            key={e.id}
            id={e.id}
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
