import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap/';
import NavbarDisplay from "./Components/NavbarDisplay";
import Home from "./Components/Home";
import Meals from "./Components/Meals";
import Journal from "./Components/Journal";
import Footer from "./Components/Footer";
import './App.css';

export default function App() {
  return (
    <Container fluid>
      <Router>
        <NavbarDisplay />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/meals" component={Meals} />
            <Route path="/journal" component={Journal} />
            <Route path="*" component={NotFound} />
          </Switch>
        <Footer />
      </Router>
    </Container>    
  );
}

function NotFound () {
  return <>You stumbled into a page that does not exist in this time stream</>;
}
