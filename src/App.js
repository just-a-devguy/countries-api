import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CardsDetails from "./components/CardsDetails/CardsDetails";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path={`/card-detail/:cardId`} component={CardsDetails} />
      </Switch>
    </div>
  );
}

export default App;
