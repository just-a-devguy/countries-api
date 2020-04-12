import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Card.css";

// onClick={() => history.push(`/card-detail/${country.numericCode}`)} add to card div

const Card = ({ country, history }) => (
  <Link to={`/card-detail/${country.alpha2Code}`}>
    <div className="card">
      <img src={country.flag} alt={country.name + " Flag"} />
      <div className="card__body">
        <h1 className="card__body-title"> {country.name} </h1>
        <p className="card__body-info">
          Population:<span> {country.population} </span>
        </p>
        <p className="card__body-info">
          Region:<span> {country.region} </span>
        </p>
        <p className="card__body-info">
          Capital:<span> {country.capital} </span>
        </p>
      </div>
    </div>
  </Link>
);

export default withRouter(Card);
