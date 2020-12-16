import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import "./Nav.css";

function Nav() { 
    return (
        <div>
        <nav className="header">
          <div className="tabs">
         <Link to= "/">     
          <a className="tab">
                Home
           </a>
           </Link>
           <Link to= "/products"> 
            <a className="tab">
                Products
           </a>
           </Link>
           <Link to= "/testing"> 
            <a className="tab">
               COVID-19 Testing
            </a>
            </Link>
            <Link to= "/vaccine"> 
            <a className="tab">
               Pfizer Vaccine 
            </a>
            </Link>
            <Link to= "/covidTracking"> 
            <a className="tab">
               COVID-19 Tracking 2020
            </a>
            </Link>
           </div> 
      </nav>
      </div>
    );
  }
  
  export default Nav;
  