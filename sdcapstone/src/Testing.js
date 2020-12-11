import React, { Component } from "react";
import "./testing.css";

class Testing extends Component {
    constructor(props) {
        super();
    }

    render() {
        console.log(this.props.testing);
        return (
            <div className="first">
                <p></p>
                {this.props.testing.length !==0
                ? this.props.testing.map((Testing) => (
                    <h1 className="second">
                        <p className="testing">{Testing.testing}</p>
                        <p className="testing">{Testing.average_efficiency_precentage}</p>
                        <p className="testing">{Testing.average_pricing_USD}</p>
                        <p className="testing">{Testing.place}</p>
                        {/* <img src= {Testing.image_url} className= "testingImage" alt="Responsive Pic"/>
                        <p className="testing">{Testing.price}</p>
                        <p className="testing">{Testing.link}</p>
                        <p className="testing">{Testing.infoLink}</p> */}
                    </h1>
                ))
            : null}
            </div>
        );
    }
}

export default Testing;