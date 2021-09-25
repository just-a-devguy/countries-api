import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Card.css";

const Card = ({ country }) => {
  const { alpha3Code, name, population, region, capital, flags } = country;
  const flag = flags[1];
  return (
    <Link to={`/card-detail/${alpha3Code}`}>
      <div className="Card">
        <img src={flag} alt={name + " Flag"} />
        <div className="Card__Body">
          <h1 className="Card__Body-Title"> {name} </h1>
          <p className="Card__Body-Info">
            Population:<span> {population.toLocaleString()} </span>
          </p>
          <p className="Card__Body-Info">
            Region:<span> {region} </span>
          </p>
          <p className="Card__Body-Info">
            Capital:<span> {capital} </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default withRouter(Card);
