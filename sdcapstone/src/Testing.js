import React, { Component } from "react";
import "./testing.css";
import Nav from "./Nav.js";


class Testing extends Component {
    constructor(props) {
        super();
    }

    render() {
        console.log(this.props.data);
        return (
            <div className="two">
                <Nav />
                <h1>How to Stop the Spread of COVID-19</h1>
                <h3>Testing for COVID-19</h3>
                <div className="container-grid2">
                    {this.props.data.length !== 0
                        ? this.props.data.map((item) => (
                            <div class="border2">
                                <p>Product: {item.product}</p>
                                <p>Efficiency: {item.average_efficiency_percentage}%</p>
                                <p>Average Cost: ${item.average_pricing_USD}.00</p>
                                {item.available.map(product => (<div> <p>Where Available: {product.place}</p> <img src={product.image_url} /> <p><a href={product.infoLink}>Click Here for More Information</a></p> </div>))}
                            </div>
                        ))
                        : null}
                </div>
            </div>
        );
    }
}

export default Testing;