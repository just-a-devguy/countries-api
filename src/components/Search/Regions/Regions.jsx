import React from "react";
import Select from "react-select";

const Regions = ({ regionChange }) => {
  const options = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  return (
    <div className="Regions">
      <Select
        styles={customStyles}
        placeholder={"Filter by Regions"}
        options={options}
        isClearable={true}
        isSearchable={false}
        onChange={regionChange}
        openMenuOnFocus={true}
        classNamePrefix="Select-Dark"
      />
    </div>
  );
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
  }),
  control: () => ({
    width: "200px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "1px 1px 5px 1px rgba(0, 0, 0, 0.13)",
    borderRadius: "5px",
    backgroundColor: "#fff",
  }),
};

export default Regions;
