import { Link } from "react-router-dom";
import React from "react";
import "./landingPage.css";

/* Incio del proyecto, la primera vista del usuario */
function Inicio() {
  return (
    <div className="cont-btn">
      <Link to="/Home">
        <button className="btn-bubble">
          <span>Bienvenido Entrenador</span>
        </button>
      </Link>
    </div>
  );
}

export default Inicio;
