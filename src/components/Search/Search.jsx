import React from "react";
import CountrySearch from "./CountrySearch/CountrySearch";
import RegionSearch from "./RegionSearch/RegionSearch";
import "./Search.css";

const Search = ({ changeFormEvent, regionChange, resetRegion }) => {
  return (
    <div className="search">
      <CountrySearch changeFormEvent={changeFormEvent} />
      <RegionSearch resetRegion={resetRegion} regionChange={regionChange} />
    </div>
  );
};

export default Search;
