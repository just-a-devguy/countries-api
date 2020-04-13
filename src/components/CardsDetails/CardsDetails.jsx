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
      // borders,
      flag,
    } = this.state.countries;

    // work on being able to display currencies

    // const currencies = this.state.countries.currencies;

    // if (this.state.countries.currencies) {
    //   console.log(currencies[0].code);
    // }

    return (
      <div className="Cards-Details">
        <Link to="/">Back to Home</Link>
        <h1>This is Cards Details {this.props.match.params.cardId}</h1>

        <div className="Details-Info">
          <div className="Detail-Flag">
            <img src={flag} alt={name + "flag"} />
          </div>
          <div>
            <h2> {name} </h2>
            <p>
              Native Name: <span> {nativeName} </span>
            </p>
            <p>
              Population: <span> {population} </span>
            </p>
            <p>
              Region: <span> {region} </span>
            </p>
            <p>
              Sub Region: <span> {subregion} </span>
            </p>
            <p>
              Capital: <span> {capital} </span>
            </p>
          </div>
          <div>
            <p>
              Top Level Domain: <span>{topLevelDomain}</span>
            </p>
            <p>
              Currency: <span>{currencies ? currencies[0].code : null}</span>
            </p>
            <p>
              Languages:
              <span>
                {languages ? languages.map((lan) => `${lan.name},`) : null}
              </span>
            </p>
          </div>
          <div>Info Sec</div>
        </div>
      </div>
    );
  }
}

export default CardsDetails;
