import React from "react";
import { Route } from "react-router-dom";

import { Home, About, Contact, Navigation } from "./components";

import "./App.css";

const App = () => (
  <div>
    <Navigation></Navigation>
      <Route exact path="/" component={Home}>Home</Route>
      <Route path="/about" component={About}>About</Route>
      <Route path="/Contact" component={Contact}>Contact</Route>
  </div>
);

export default App;
