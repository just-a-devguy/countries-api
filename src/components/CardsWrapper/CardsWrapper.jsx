import React from "react";

import Cards from "../Cards/Cards";
import "./CardsWrapper.css";
import Search from "../Search/Search";

class CardsWrapper extends React.Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      countrySearch: "",
      regionSearch: "",
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((country) => this.setState({ countries: country }));
  }

  render() {
    const { countries, countrySearch, regionSearch } = this.state;

    const filteredCountries = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(countrySearch.toLowerCase()) &&
        country.region.toLowerCase().includes(regionSearch.toLowerCase())
    );

    return (
      <div className="cards-wrapper ">
        <Search
          changeFormEvent={(e) =>
            this.setState({ countrySearch: e.target.value })
          }
          regionChange={(e) => this.setState({ regionSearch: e.target.value })}
          resetRegion={() => this.setState({ regionSearch: "" })}
        />
        <Cards countries={filteredCountries} />
      </div>
    );
  }
}

export default CardsWrapper;
