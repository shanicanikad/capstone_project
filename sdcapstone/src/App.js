import React, { Component } from "react";
import "./App.css";
// import Nav from "./Nav.js";
import Products from "./products";
import Testing from "./testing";
import Vaccine from "./vaccine";
import CovidTracking from "./covidTracking";

import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsJson: [],
      testingJson: [],
      vaccineJson: [],
      covidTrackingJson: []
    };
  }

  componentDidMount() {
    fetch("https://sdcapstone.herokuapp.com/Products", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ productsJson: output }));

    fetch("https://sdcapstone.herokuapp.com/Testing", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ testingJson: output }));

    fetch("https://sdcapstone.herokuapp.com/Vaccine", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ vaccineJson: output }));

    fetch("https://sdcapstone.herokuapp.com/CovidTracking", {
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((output) => this.setState({ covidTrackingJson: output }));
  }

  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            {/* <Nav /> */}
            <Switch>
              <Route exact path="/Products">
                <Products data={this.state.productsJson} />
              </Route>
              <Route exact path="/Testing">
                <Testing data={this.state.testingJson} />
              </Route>
              <Route exact path="/Vaccine">
                <Vaccine data={this.state.vaccineJson} />
              </Route>
              <Route exact path="/CovidTracking">
                <CovidTracking data={this.state.covidTrackingJson} />
              </Route>       
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
