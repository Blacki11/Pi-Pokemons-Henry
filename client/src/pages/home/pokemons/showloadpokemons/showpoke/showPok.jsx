import { Link } from "react-router-dom";
import React from "react";
import "./showingpokemon.css";

export default function ShowPok(Props) {
  return (
    <div className="showCard">
      <img src={Props.imagen} alt={Props.name} />
      <h3 className="showName">
        <Link to={`/Detail/${Props.id}`}>{Props.name}</Link>
      </h3>
      <h5 className="showType ">{Props.types} TYPOS</h5>
    </div>
  );
}
