import { Link } from "react-router-dom";
import React from "react";

import "./landingPage.css";

function Inicio() {
  return (
    <div className="cont-btn">
      <Link to="home">
        <button className="btn-bubble">
          <span>Bienvenido Entrenador</span>
        </button>
      </Link>
    </div>
  );
}

export default Inicio;
