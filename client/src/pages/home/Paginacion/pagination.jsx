import "./pagination.css";
import React from "react";
import "./pagination.css";

export const Pagination = ({
  pokPage,
  currentPage,
  setcurrentPage,
  totalPokemons,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokPage); i++) {
    pageNumbers.push(i);
  }

  const handleNext = () => {
    if (currentPage < Math.ceil(totalPokemons / pokPage)) {
      setcurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  const handlePage = (n) => {
    setcurrentPage(n);
  };

  return (
    <div>
      <nav className="navPagination">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1 ? "paginationbuttondisable" : "paginationbutton"
          }`}
        >
          PREV PAGE
        </button>
        <ul className="pagination">
          {pageNumbers.map((page) => (
            <li key={page}>
              <a
                onClick={() => handlePage(page)}
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
          }`}
        >
          NEXT PAGE
        </button>
      </nav>
    </div>
  );
};
