import { Link } from "react-router-dom";
import React from "react";

export default function Inicio() {
  return (
    <div
      style={{
        backgroundImage: `url("https://via.placeholder.com/500")`,
      }}
    >
      <button>
        <Link to="home">Bienvenido</Link>
      </button>
    </div>
  );
}
