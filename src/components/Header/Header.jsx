import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1> Where in the world? </h1>
      <button>
        <ion-icon name="moon-outline"></ion-icon> Dark Mode
      </button>
    </div>
  );
};

export default Header;
