import React from "react";

import { Link } from "react-router-dom";

import "./CardsDetails.css";

class CardsDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://restcountries.eu/rest/v2/alpha/${this.props.match.params.cardId}`
    )
      .then((res) => res.json())
      .then((country) => this.setState({ countries: country }));
  }
  render() {
    const {
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
      flag,
    } = this.state.countries;

    console.log(name);

    return (
      <div>
        <Link to="/">Back to Home</Link>
        <h1>This is Cards Details {this.props.match.params.cardId}</h1>
        <p>{name}</p>
        <p>{nativeName}</p>
        <p>{population}</p>
        <p>{region}</p>
        <p>{subregion}</p>
        <p>{capital}</p>
        <p>{topLevelDomain}</p>
        <p>{flag}</p>
      </div>
    );
  }
}

export default CardsDetails;
