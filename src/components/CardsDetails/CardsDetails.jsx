import React, { useState, useEffect } from "react";

import { withRouter, Link } from "react-router-dom";

import "./CardsDetails.css";

const CardsDetails = ({ match, history }) => {
  const [countries, setCountries] = useState([]);

  const fetchCountry = countryCode => {
    fetch(`https://restcountries.com/v2/alpha/${countryCode}`)
      .then(res => res.json())
      .then(country => setCountries(country));
  };

  useEffect(() => {
    fetchCountry(match.params.cardId);
  }, [match.params.cardId]);

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
    flags,
  } = countries;

  // const flag = flags[1];

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
          <img src={flags && flags[1]} alt={name + "flag"} />
        </div>

        <div className="Details-Info">
          <h2>{name}</h2>
          <div className="Name-Details">
            <p>
              Native Name: <span> {nativeName} </span>
            </p>
            <p>
              Population:
              <span>{population && population.toLocaleString()}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Sub Region: <span>{subregion}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
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
                {languages ? languages.map(lan => `${lan.name},`) : null}
              </span>
            </p>
          </div>

          <div className="Borders">
            Borders:
            {borders
              ? borders.map(border => (
                  <button
                    key={border}
                    className="Border"
                    onClick={() => {
                      fetchCountry(border);
                      history.push(`/card-detail/${border}`);
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
};

export default withRouter(CardsDetails);
