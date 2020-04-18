import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Card.css";

const Card = ({ country, history }) => (
  <Link to={`/card-detail/${country.alpha3Code}`}>
    <div className="Card">
      <img src={country.flag} alt={country.name + " Flag"} />
      <div className="Card__Body">
        <h1 className="Card__Body-Title"> {country.name} </h1>
        <p className="Card__Body-Info">
          Population:<span> {country.population.toLocaleString()} </span>
        </p>
        <p className="Card__Body-Info">
          Region:<span> {country.region} </span>
        </p>
        <p className="Card__Body-Info">
          Capital:<span> {country.capital} </span>
        </p>
      </div>
    </div>
  </Link>
);

export default withRouter(Card);
