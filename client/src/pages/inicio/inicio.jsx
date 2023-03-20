import { Link } from "react-router-dom";
import React from "react";
import "./landingPage.css";

function Inicio() {
  return (
    <div className="cont-btn">
      {/* <audio autoPlay>
        <source src="kantopokemon.mp3" type="audio/mp3"></source>
      </audio> */}
      <Link to="home">
        <button className="btn-bubble">
          <span>Bienvenido Entrenador</span>
        </button>
      </Link>
    </div>
  );
}

export default Inicio;
