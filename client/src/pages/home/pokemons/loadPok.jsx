import ShowPok from "./showPok";
import React from "react";

export default function LoadPok(props) {
  const { pokemons } = props;
  return (
    <div>
      {pokemons
        ? pokemons.map((e, index) => (
            <ShowPok
              imagen={e.image}
              name={e.name}
              type={e.types}
              key={index}
              id={e.id}
            />
          ))
        : "Los pokemons estan en desarollo"}
    </div>
  );
}
