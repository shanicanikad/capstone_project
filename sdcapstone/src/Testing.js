import React, { Component } from "react";
import "./Testing.css";

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
                        <span className="third">{Testing.product}</span>
                        <p className="product">{Testing.average_efficiency_precentage}</p>
                        <p className="product">{Testing.average_pricing_USD}</p>
                        <p className="product">{Testing.place}</p>
                        {/* <img src= {Testing.image_url} className= "productImage" alt="Responsive Pic"/>
                        <p className="product">{Testing.price}</p>
                        <p className="product">{Testing.link}</p>
                        <p className="product">{Testing.infoLink}</p> */}
                    </h1>
                ))
            : null}
            </div>
        );
    }
}

export default Testing;