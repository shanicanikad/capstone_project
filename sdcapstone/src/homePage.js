import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import "./homePage.css";
import logo1 from "../src/Images/COVIDMAP.png"
import Subscribe from "./subscribe";

function HomePage() {
  return (
    <div className="app">
      <div className="header">
        <h4>END COVID-19 NOW!</h4>
      </div>
      <div className="container">
        <h1 className="headline">Welcome to your COVID Informational Guide, Your Guide to All Things COVID-19</h1>
        <div className="links">
          <a href="/products" className="link">
            Products
           </a>
          <a href="/testing" className="link">
            COVID-19 Testing
            </a>
          <a href="/vaccine" className="link">
            Pfizer Vaccine
            </a>
          <a href="/covidTracking" className="link">
            COVID-19 Tracking 2020
            </a>
        </div>
        <p className="map">COVID TRACKING MAP</p>
        <div><img src={logo1} className="theMap" /></div>
      
      <p className="newCovidMap"><a href="https://coronavirus.jhu.edu/map.html">Click Here for Hourly Updates</a></p>
      <Subscribe/>
      </div>
      <footer className="name">Shanica Denis ©2020</footer>
    </div>
  );
}

export default HomePage;
