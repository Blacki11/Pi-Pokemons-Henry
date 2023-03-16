import { Link } from "react-router-dom";
import React from "react";

export default function ShowPok(Props) {
  return (
    <div>
      <h1>muestro pokemon</h1>
      <h2>{Props.image}</h2>
      <h2>
        <Link to="/Detail">{Props.name}</Link>
      </h2>
      <h2>{Props.types}</h2>
      <footer>
        <h7>
          <Link to="/About">About</Link>
        </h7>
      </footer>
    </div>
  );
}
