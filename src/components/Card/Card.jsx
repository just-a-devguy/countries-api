import React from "react";
import "./Card.css";

const Card = (props) => (
  <div className="card">
    <img src={props.country.flag} alt={props.country.name + " Flag"} />
    <div className="card__body">
      <h1 className="card__body-title"> {props.country.name} </h1>
      <p className="card__body-info">
        Population:<span> {props.country.population} </span>
      </p>
      <p className="card__body-info">
        Region:<span> {props.country.region} </span>
      </p>
      <p className="card__body-info">
        Capital:<span> {props.country.capital} </span>
      </p>
    </div>
  </div>
);

export default Card;
