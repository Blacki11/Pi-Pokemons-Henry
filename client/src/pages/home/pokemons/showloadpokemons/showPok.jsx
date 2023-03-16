import { Link } from "react-router-dom";
import React from "react";

export default function ShowPok(Props) {
  return (
    <div>
      <h2>{Props.image}</h2>
      <h2>
        <Link to="/Detail">{Props.name}</Link>
      </h2>
      <Link to={Props.url}>{Props.url}</Link>
    </div>
  );
}
