import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RandomSearchTeam } from "../../../../Redux/actions/Actions";
import "./team.css";

export const TeamRandom = () => {
  const dispatch = useDispatch();

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
