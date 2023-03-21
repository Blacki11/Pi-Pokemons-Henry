import "./pagination.css";
import React from "react";

export const Pagination = ({
  pokPage,
  currentPage,
  setcurrentPage,
  totalPokemons,
}) => {
  //CAMBIAR EL A E BOTTON, PARA QUE SEA USO DEL DISEABLE

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokPage); i++) {
    pageNumbers.push(i);
  }
  const handleNext = () => {
    if (currentPage < Math.ceil(totalPokemons / pokPage)) {
      setcurrentPage(currentPage + 1);
    } else {
      return currentPage;
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    } else {
      return currentPage;
    }
  };

  const handlePage = (n) => {
    setcurrentPage(n);
  };

  return (
    <>
      <nav>
        <a onClick={handlePrev}>PREV PAGE</a>
        <ul>
          {pageNumbers.map((page) => (
            <li key={page}>
              <a onClick={() => handlePage(page)}>{page}</a>
            </li>
          ))}
        </ul>
        <a onClick={handleNext}>NEXT PAGE</a>
      </nav>
    </>
  );
};
