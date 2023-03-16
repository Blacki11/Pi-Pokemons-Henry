import { Link } from "react-router-dom";
import React from "react";

export default function ShowPok(Props) {
  return (
    <div>
      <img src={Props.imagen} alt={Props.name} />
      <h2>
        <Link to={`/Detail/${Props.id}`}>{Props.name}</Link>
      </h2>
      <h2>{Props.types}</h2>
    </div>
  );
}
