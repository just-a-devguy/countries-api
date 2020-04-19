import React from "react";

import Card from "../Card/Card";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="Cards">
      {props.countries.map((country) => (
        <Card key={country.numericCode} country={country} />
      ))}
    </div>
  );
};

export default Cards;
