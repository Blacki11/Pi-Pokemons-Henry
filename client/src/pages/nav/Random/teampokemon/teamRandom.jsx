import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RandomSearchTeam } from "../../../../Redux/actions/Actions";
import "./team.css";

/* Funcion para traer un team pokemon aleatorio */
export const TeamRandom = () => {
  const dispatch = useDispatch();

  /* Hace la request al back para traer exclusivamente un team(SEIS) pokemon aleatorio */
  const onClick = (e) => {
    e.preventDefault();
    dispatch(RandomSearchTeam());
  };

  return (
    <a className="buttonTeamRandom">
      <button type="submit" onClick={onClick}>
        <Link to="/Home">Team Aleatorio</Link>
      </button>
    </a>
  );
};
