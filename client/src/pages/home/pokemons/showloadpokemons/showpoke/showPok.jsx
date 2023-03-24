import { Link } from "react-router-dom";
import React from "react";
import "./showingpokemon.css";

export default function ShowPok(Props) {
  const createType = isNaN(Props.id)
    ? Props.type?.map((e, index) => (
        <span className="colortype" key={index}>
          {" "}
          {e.name}{" "}
        </span>
      ))
    : Props.type?.map((e, index) => (
        <span className="colortype" key={index}>
          {" "}
          {e}{" "}
        </span>
      ));

  //INTENTAR CAMBIAR NOMBRE SEGUN EL TIPO,

  return (
    <div className="cajasloadpok c1">
      <Link to={`/Detail/${Props.id}`}>
        <img className="showImagen" src={Props.imagen} alt={Props.name} />
      </Link>
      <h1>
        <span className="colorname">{Props.name}</span>
      </h1>
      <h1>{createType}</h1>
    </div>
  );
}
