import React, { Component } from "react";
import "./testing.css";

class Testing extends Component {
    constructor(props) {
        super();
    }

    render() {
        console.log(this.props.data);
        return (
            <div className="first">
                <p></p>
                {this.props.data.length !==0
                ? this.props.data.map((testing) => (
                    <h1 className="second">
                        <p className="testing">{testing.product}</p>
                        <p className="testing">{testing.average_efficiency_percentage}</p>
                        <p className="testing">{testing.average_pricing_USD}</p>
                        {/* <p className="testing">{testing.place}</p>
                        <img src= {testing.image_url} className= "testingImage" alt="Responsive Pic"/>
                        <p className="testing">{testing.price}</p>
                        <p className="testing">{testing.link}</p>
                        <p className="testing">{testing.infoLink}</p> */}
                    </h1>
                ))
            : null}
            </div>
        );
    }
}

export default Testing;