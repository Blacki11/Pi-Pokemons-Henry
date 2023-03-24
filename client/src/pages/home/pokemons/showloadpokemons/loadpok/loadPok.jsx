import ShowPok from "../showpoke/showPok";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Pagination } from "../../../Paginacion/pagination";
import "./loadpok.css";

export default function LoadPok() {
  const [pokPage, setpokPage] = useState(12);
  const [currentPage, setcurrentPage] = useState(1);
  const pokemons = useSelector((state) => state.pokemonfilter);
  const totalPokemons = pokemons?.length;
  const lastListPok = currentPage * pokPage;
  const firsListPok = lastListPok - pokPage;

  return (
    <div>
      <div className="loadpokDiv">
        {Array.isArray(pokemons) ? (
          pokemons
            .map((e, index) => (
              <ShowPok
                imagen={e.image}
                name={e.name}
                type={e.types}
                key={index}
                id={e.id}
              />
            ))
            .slice(firsListPok, lastListPok)
        ) : (
          <ShowPok
            imagen={pokemons.image}
            name={pokemons.name}
            type={pokemons.Type}
            key={pokemons.id}
            id={pokemons.id}
          />
        )}
      </div>

      <Pagination
        pokPage={pokPage}
        currentPage={currentPage}
        setcurrentPage={setcurrentPage}
        totalPokemons={totalPokemons}
      />
    </div>
  );
}
