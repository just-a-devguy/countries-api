import React from "react";

import { withRouter, Link } from "react-router-dom";

import "./CardsDetails.css";

class CardsDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
    };

    // this.separator = this.separator.bind(this);
  }

  componentDidMount() {
    fetch(
      `https://restcountries.eu/rest/v2/alpha/${this.props.match.params.cardId}`
    )
      .then((res) => res.json())
      .then((country) => this.setState({ countries: country }));
  }

  // separator(population) {
  //   let population_parts = population.toString().split(".");
  //   population_parts[0] = population_parts[0].replace(
  //     /\B(?=(\d{3})+(?!\d))/g,
  //     ","
  //   );
  //   console.log(population_parts.join("."));
  // }

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

    // work on being able to display currencies

    // const currencies = this.state.countries.currencies;

    // if (this.state.countries.currencies) {
    //   console.log(currencies[0].code);
    // }

    return (
      <div className="Cards-Details">
        <div id="Back-Section">
          <Link to="/" className="Back">
            <ion-icon name="arrow-back-outline" id="Back-Icon"></ion-icon>
            Back
          </Link>
        </div>

        <div className="Details">
          <div className="Details-Flag">
            <img src={flag} alt={name + "flag"} />
          </div>

          <div className="Details-Info">
            <h2> {name} </h2>
            <div className="Name-Details">
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

            <div className="Other-Details">
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

            <div className="Borders">
              Borders:
              {borders
                ? borders.map((border) => (
                    <Link
                      key={border}
                      to={`/card-detail/${border}`}
                      className="Border"
                    >
                      {border}
                    </Link>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardsDetails);
