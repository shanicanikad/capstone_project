import React, { Component } from "react";
import "./covidTracking.css";

class CovidTracking extends Component {
    constructor(props) {
        super();
    }

    render() {
        console.log(this.props.data);
        return (
            <div className="first">
                <p></p>
                {this.props.data.length !==0
                ? this.props.data.map((covidTracking) => (
                    <h1 className="second">
                        <p className="covid">{covidTracking.date}</p>
                        <p className="covid">{covidTracking.positive}</p>
                        <p className="covid">{covidTracking.negative}</p>
                        <p className="covid">{covidTracking.hospitalizedCurrently}</p>
                        <p className="covid">{covidTracking.inIcuCurrently}</p>
                        <p className="covid">{covidTracking.recovered}</p>
                        <p className="covid">{covidTracking.death}</p> 
                    </h1>
                ))
            : null}
            </div>
        );
    }
}

export default CovidTracking;