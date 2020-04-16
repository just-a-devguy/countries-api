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

  history = this.props;

  fetchCountry = (countryCode) => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
      .then((res) => res.json())
      .then((country) => this.setState({ countries: country }));
  };

  componentDidMount() {
    this.fetchCountry(this.props.match.params.cardId);
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
                Population:
                <span> {population && population.toLocaleString()} </span>
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
              {/*
              {borders && borders !== 0 ? (
                borders.map((border) => (
                  <button
                    key={border}
                    className="Border"
                    onClick={() => {
                      this.fetchCountry(border);
                      this.props.history.push(`/card-detail/${border}`);
                    }}
                  >
                    {border}
                  </button>
                ))
              ) : (
                <button>None</button>
              )}
              
                if there are borders, map over and display a button, if not return a paragraph with the word none
                */}
              {borders
                ? borders.map((border) => (
                    <button
                      key={border}
                      className="Border"
                      onClick={() => {
                        this.fetchCountry(border);
                        this.props.history.push(`/card-detail/${border}`);
                      }}
                    >
                      {border}
                    </button>
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
