import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Card.css";

// onClick={() => history.push(`/card-detail/${country.numericCode}`)} add to card div

const Card = ({ country, history }) => (
  // const separator = () => {}

  <Link to={`/card-detail/${country.alpha3Code}`}>
    <div className="Card">
      <img src={country.flag} alt={country.name + " Flag"} />
      <div className="Card__Body">
        <h1 className="Card__Body-Title"> {country.name} </h1>
        <p className="Card__Body-Info">
          Population:<span> {separator(country.population)} </span>
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

function separator(num) {
  let num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}

export default withRouter(Card);
