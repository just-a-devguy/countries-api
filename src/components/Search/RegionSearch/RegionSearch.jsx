import React from "react";
import Option from "./Option/Option";

import "./RegionSearch.css";

const RegionSearch = ({ regionChange, resetRegion }) => {
  return (
    <div className="region-search">
      <div className="search-title">
        <p>Filter by Region</p>
        <div className="title-icon">
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </div>

      <div className="region-options">
        <Option
          regionName="Africa"
          value="africa"
          regionChange={regionChange}
        />
        <Option
          regionName="America"
          value="america"
          regionChange={regionChange}
        />
        <Option regionName="Asia" value="asia" regionChange={regionChange} />
        <Option
          regionName="Europe"
          value="europe"
          regionChange={regionChange}
        />
        <Option
          regionName="Oceania"
          value="oceania"
          regionChange={regionChange}
        />
      </div>
    </div>
  );
};

export default RegionSearch;
