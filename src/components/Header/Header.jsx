import React from "react";

import "./Header.css";

const Header = ({ themeSwitch }) => {
  return (
    <div className="Header">
      <h1> Where in the world? </h1>
      <button onClick={themeSwitch}>
        <ion-icon name="moon-outline"></ion-icon> Dark Mode
      </button>
    </div>
  );
};

export default Header;
