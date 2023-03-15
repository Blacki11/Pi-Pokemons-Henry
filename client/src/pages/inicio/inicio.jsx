import { Link } from "react-router-dom";
import React from "react";

export default function Inicio() {
  return (
    <div
      style={{
        backgroundImage: `url("https://lh3.googleusercontent.com/05JfZ1ZdyzrRNvhJosUFdcjjJRFE7k2KhmeM2ujqeCbrcrCb1hkq7O_JdUBpQ3r9hi0YeSn4WgmKx3Ai8LHdM2SucxSzl9TRZ4fCAqETJ6WtHgE=w1440-e365")`,
      }}
    >
      <button>
        <Link to="home">Bienvenido</Link>
      </button>
    </div>
  );
}
