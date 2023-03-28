import ShowPok from "../showpoke/showPok";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Pagination } from "../../../Paginacion/pagination";
import "./loadpok.css";

export default function LoadPok() {
  const pokemons = useSelector((state) => state.pokemonfilter);

  /* Estas constantes, funcionan para el paginado */
  const [pokPage, setpokPage] =
    useState(12); /*Pokemons que quieres por pagina */
  const [currentPage, setcurrentPage] =
    useState(1); /*en que pagina se encuentra */
  const totalPokemons = pokemons?.length; /* pokemons totales */
  /* Esta dos son para mostrar los pokemons correcto por pagina
      Si tomamos los primeros pokemons serian los primeros 12 en la pagina 1(1 * 12 = 12, primeros 12 pokemons)
      Si tomamos la segunda tanda de pokemons serian los 12 siguientes en la pagina 2(2 * 2=24, los siguiente 12 pokemons despues de los primeros 12) 
      Si tomamos una tercera tanda de pokemons serian los 12 siguientes en la pagina 3(3 * 12=36 los siguientes 12 pokemons despues de los 24)
      y asi sucesivamente por las paginas restantes segun la cantidad de pokemons
      ahora, para pasar esto de tal forma que podamos indicarlos, tendriamos que tener un segundo parametro que seria en donde comienza
      entonces si restamos los resultados anteriores con los pokemons por pagina, nos daria este parametro de incio
      siendo asi la primera tanda seria 12 menos la cantidad de pokemons por pagina(12 - 12 = 0 seria el incio de la primera tanda y 12 el final de esta, 0-12)  
      siguiendo con la segunda tanda serian 24 menos la cantidad de pokemons por pagina(24 - 12 = 12 este seria el incio de la segunda tanda y 24 el final de esta, 12-24)
      y asi sucesivamente, (24/36, 36/48, 48/60, 60/72, ect)
      */
  const lastListPok = currentPage * pokPage;
  const firsListPok = lastListPok - pokPage;

  /* Este html es lo mismo, se le pasa al shopokemon las propiedades respectivas para que sea mostrado en la home,
     pero al pokemon creado y pokemon favorito son objetos en vez de una array, por ende un condicional, 
     si es array sera true y hara el mapeo, caso contrario simplemente dara las propiedades usando
     las interacciones con objeto y la paginacion que se le pasa lo anterior mencionado */
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
                attack={e.attack}
              />
            ))
            .slice(firsListPok, lastListPok)
        ) : (
          <ShowPok
            imagen={pokemons.image}
            name={pokemons.name}
            type={pokemons.types}
            key={pokemons.id}
            id={pokemons.id}
            attack={pokemons.attack}
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
