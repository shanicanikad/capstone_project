import React, { Component } from "react";
import "./CovidTracking.css";

class CovidTracking extends Component {
    constructor(props) {
        super();
    }

    render() {
        console.log(this.props.covidTracking);
        return (
            <div className="first">
                <p></p>
                {this.props.covidTracking.length !==0
                ? this.props.covidTracking.map((CovidTracking) => (
                    <h1 className="second">
                        <span className="third">{CovidTracking.date}</span>
                        <p className="product">{CovidTracking.positive}</p>
                        <p className="product">{CovidTracking.negative}</p>
                        <p className="product">{CovidTracking.hospitalizedCurrently}</p>
                        <p className="product">{CovidTracking.inIcuCurrently}</p>
                        <p className="product">{CovidTracking.recovered}</p>
                        <p className="product">{CovidTracking.death}</p> 
                    </h1>
                ))
            : null}
            </div>
        );
    }
}

export default CovidTracking;