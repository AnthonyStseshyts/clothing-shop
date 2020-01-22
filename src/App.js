import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./Pages/homepage";

import './App.css';

const HatsPage = () => (
  <div>HATS PAGE</div>
);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/hats" component={HatsPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
