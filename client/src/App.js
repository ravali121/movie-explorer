import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import ActorDetails from "./components/ActorDetails/ActorDetails";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/movies/:id" component={MovieDetails}/>
          <Route exact path="/actors/:id" component={ActorDetails}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
