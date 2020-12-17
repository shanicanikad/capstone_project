import React, { Component } from "react";
import "./covidTracking.css";
import logo2 from "../src/Images/download.png"
import Nav from "./Nav.js";
import JwPagination from "jw-react-pagination"


class CovidTracking extends Component {
    constructor(props) {
        super();
        this.state = {pagination: 0}
    }

    paginate = () => {
        if (this.state.pagination <= this.props.data.length - 5)
        {let value = this.state.pagination + 5
        this.setState ({pagination: value})}
    }

    render() {
        console.log(this.props.data);
        return (
            <div className="four">
                <Nav />
                <h1>How to Stop the Spread of COVID-19</h1>
                <h3>Daily COVID-19 Tracking in the United States</h3>
                <a className="more" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html">MORE INFORMATION</a>
                <div><button onClick= {this.paginate}>Next Set</button></div>
                <img src={logo2} className="newMap" />

                <div className="container-grid4">
                    {this.props.data.length !== 0
                        ? this.props.data.slice(this.state.pagination, this.state.pagination + 5).map((covidTracking) => (<div className="container">
                            <p className="covid">Date: {covidTracking.date}</p>
                            <p className="covid">Positive: {covidTracking.positive}</p>
                            <p className="covid">Negative: {covidTracking.negative}</p>
                            <p className="covid">Current Hospitalizations: {covidTracking.hospitalizedCurrently}</p>
                            <p className="covid">Current in ICU: {covidTracking.inIcuCurrently}</p>
                            <p className="covid">Recovered: {covidTracking.recovered}</p>
                            <p className="covid">Deaths: {covidTracking.death}</p>
                        </div>
                        ))
                        : null}
                </div>
            </div>
        );
    }
}

export default CovidTracking;