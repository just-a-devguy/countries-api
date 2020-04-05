import React from "react";

import "./Option.css";

const Option = ({ regionName, value, regionChange }) => {
  return (
    <div className="option">
      <label>
        {regionName}
        <input
          name="regions"
          type="radio"
          className="choice"
          value={value}
          onChange={regionChange}
        />
      </label>
    </div>
  );
};

export default Option;
