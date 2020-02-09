import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import ShopPage from "./pages/shop/shop.component";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

const JackersPage = () => (
  <div>
    <h1>Jackers Page</h1>
  </div>
)


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/jackets" component={JackersPage} />
      </Switch>
    </div>
  );
}

export default App;
