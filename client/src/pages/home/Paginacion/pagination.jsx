import "./pagination.css";
import React from "react";
import "./pagination.css";

/* Paginacion, es la funcion que logra hacer que haya cierta cantidad de pokemons por pagina */
export const Pagination = ({
  pokPage,
  currentPage,
  setcurrentPage,
  totalPokemons,
}) => {
  const pageNumbers = []; /* Guarda cual es el numero de paginas */

  /* Toma el valor de pokemonstotales(api+db, ya que tomara todo lo que se cargue en la home) y este
  se divide por la cantidad de pokemons que quieres mostrar en pagina(la division esta redondeada) 
  esto se lo pasa al array para despues hacer uso de el */
  for (let i = 1; i <= Math.ceil(totalPokemons / pokPage); i++) {
    pageNumbers.push(i);
  }

  /* Funcion para el botton next, simplemente una validacion, si este se encuentra en una pagina que pueda
  avanza, entoncez le sumara 1 a la currentpage */
  const handleNext = () => {
    if (currentPage < Math.ceil(totalPokemons / pokPage)) {
      setcurrentPage(currentPage + 1);
    }
  };
  /* Caso contrario de lo de antes, si se encuentra en una currentpage mayor a 1 entonces puede retroceder */
  const handlePrev = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  /* Esta funcion se le da el numero actual de la pagina que se encuentra*/
  const handlePage = (n) => {
    setcurrentPage(n);
  };

  /* Como siempre, css, values y funciones dadas respectivamente */

  return (
    <div>
      <nav className="navPagination">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1 ? "paginationbuttondisable" : "paginationbutton"
          }`} /* Esto es para desactivar el boton si se encuentra en la primera pagina */
        >
          PREV PAGE
        </button>
        <ul className="pagination">
          {pageNumbers.map((page) => (
            <li key={page}>
              <a
                onClick={() =>
                  handlePage(page)
                } /* Esta es la funcion que dice en que pagina se encuentra */
                className={currentPage === page ? "active" : ""}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={handleNext}
          disabled={currentPage === Math.ceil(totalPokemons / pokPage)}
          className={`${
            currentPage === Math.ceil(totalPokemons / pokPage)
              ? "paginationbuttondisable"
              : "paginationbutton"
          }`} /* Esto es para desactivar el boton si se encuentra en la ultima pagina */
        >
          NEXT PAGE
        </button>
      </nav>
    </div>
  );
};
