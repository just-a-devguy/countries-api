import React from "react";
import CountrySearch from "./CountrySearch/CountrySearch";
import Regions from "./Regions/Regions";
import "./Search.css";

const Search = ({ changeFormEvent, regionChange, resetRegion }) => {
  return (
    <div className="Search">
      <CountrySearch changeFormEvent={changeFormEvent} />

      <Regions regionChange={regionChange} />
    </div>
  );
};

export default Search;
