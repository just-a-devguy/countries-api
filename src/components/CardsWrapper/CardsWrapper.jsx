import React, { useState, useEffect } from "react";

import Cards from "../Cards/Cards";
import "./CardsWrapper.css";
import Search from "../Search/Search";

const CardsWrapper = () => {
  const fetchCountries = () => {
    fetch("https://restcountries.com/v2/all")
      .then(res => res.json())
      .then(country => setCountries(country));
  };

  const [countries, setCountries] = useState([]),
    [countrySearch, setCountrySearch] = useState(""),
    [regionSearch, setRegionSearch] = useState("");

  useEffect(() => {
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(
    country =>
      country.name.toLowerCase().includes(countrySearch.toLowerCase()) &&
      country.region.toLowerCase().includes(regionSearch.toLowerCase())
  );

  return (
    <div className="Cards-Wrapper">
      <Search
        changeFormEvent={e => setCountrySearch(e.target.value)}
        regionChange={e => (e ? setRegionSearch(e.label) : setRegionSearch(""))}
        resetRegion={() => setRegionSearch("")}
      />

      <Cards countries={filteredCountries} />
    </div>
  );
};

export default CardsWrapper;
