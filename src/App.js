import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CashContainer from './components/cash.container';
import Navbar from './components/navbar';

function App() {

  return (
    <Router>
      <Navbar />
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contactus">
          <Contactus />
        </Route>
        <Route path="/">
          <CashContainer />
        </Route>
      </Switch>
    </Router>
  );
}
function Home() {
  return <h2>Welcome to the jungle</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contactus() {
  return <h2>Contact Us</h2>;
}
export default App;