import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import CardsWrapper from "./components/CardsWrapper/CardsWrapper";
import CardsDetails from "./components/CardsDetails/CardsDetails";
import Header from "./components/Header/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const themeSwitch = (e) => {
    e.preventDefault();

    setDarkMode(!darkMode);
  };
  return (
    <div className={`App ${darkMode ? "Dark-Mode" : ""}`}>
      <Header themeSwitch={themeSwitch} />
      <Switch>
        <Route exact path="/" component={CardsWrapper} />
        <Route exact path={`/card-detail/:cardId`} component={CardsDetails} />
      </Switch>
    </div>
  );
};

export default App;
