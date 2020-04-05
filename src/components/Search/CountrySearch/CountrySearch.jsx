import React from "react";
import "./CountrySearch.css";

const CountrySearch = ({ changeFormEvent }) => {
  return (
    <div className="country-search">
      <div className="search-icon">
        <ion-icon name="search-outline"></ion-icon>
      </div>
      <input
        type="search"
        // placeholder={placeholder}
        placeholder="Search for a country"
        onChange={changeFormEvent}
      />
    </div>
  );
};

export default CountrySearch;
