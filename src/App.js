import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        {/* <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/jackets" component={JackersPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
