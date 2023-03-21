import { Link } from "react-router-dom";
import React from "react";
import "./showingpokemon.css";

export default function ShowPok(Props) {
  const type = Props.type ? Props.type.join(" / ") : "loading";
  return (
    <div className="">
      <img src={Props.imagen} alt={Props.name} />
      <h3 className="showName">
        <Link to={`/Detail/${Props.id}`}>{Props.name}</Link>
      </h3>
      <h5 className="showType ">{type}</h5>
    </div>
  );
}
