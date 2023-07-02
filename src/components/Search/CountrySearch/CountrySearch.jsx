import React from "react";
import "./CountrySearch.css";

const CountrySearch = ({ changeFormEvent }) => {
  return (
    <div className="Country-Search">
      <div className="Search-Icon">
        <ion-icon name="search-outline"></ion-icon>
      </div>
      <input
        aria-label="search"
        type="search"
        placeholder="Search for a country"
        onChange={changeFormEvent}
      />
    </div>
  );
};

export default CountrySearch;
