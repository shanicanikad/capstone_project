import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav.js";
import Products from "./Products.js";
import Testing from "./Testing.js";
import Vaccine from "./Vaccine.js";
import CovidTracking from "./CovidTracking.js";

import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductsJson: [],
      TestingJson: [],
      VaccineJson: [],
      CovidTrackingJson: []
    };
  }

  componentDidMount() {
    fetch("https://sdcapstone.herokuapp.com/Products", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ ProductsJson: output }));

    fetch("https://sdcapstone.herokuapp.com/Testing", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ TestingJson: output }));

    fetch("https://sdcapstone.herokuapp.com/Vaccine", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ VaccineJson: output }));

    fetch("https://sdcapstone.herokuapp.com/CovidTrackingJson", {
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((output) => this.setState({ CovidTrackingJson: output }));
  }

  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Nav />
            <Switch>
              <Route exact path="/Products">
                <Products data={this.state.ProductsJson} />
              </Route>
              <Route exact path="/Testing">
                <Testing data={this.state.TestingJson} />
              </Route>
              <Route exact path="/Vaccine">
                <Vaccine data={this.state.VaccineJson} />
              </Route>
              <Route exact path="/CovidTracking">
                <CovidTracking data={this.state.CovidTrackingJson} />
              </Route>       
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
