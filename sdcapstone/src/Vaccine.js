import React, { Component } from "react";
import "./vaccine.css";
import Nav from "./Nav.js";


class Vaccine extends Component {
    constructor(props) {
        super();
    }


    render() {
        console.log(this.props.data);
        return (
            <div className="three">
                <Nav />
                <h1>How to Stop the Spread of COVID-19</h1>
                <h3>The Up and Coming Pfizer Vaccine for COVID-19</h3>
                {this.props.data.length !== 0
                    ? this.props.data.map((item) => (
                        <div class="border3">
                            <p className= "item1">Product: {item.product}</p>
                            <p className= "item2">Efficiency: {item.average_efficiency_percentage}%</p>
                            <p className= "item3">Average Cost: ${item.average_pricing_USD}.00</p>
                            {item.available.map(product => (<div className= "item4"> <p>Where Available: {product.place}</p> <img src={product.image_url} /> <p><a href={product.infoLink}>Click Here for More Information</a></p> </div>))}
                        </div>
                    ))
                    : null}
            </div>
        );
    }
}

export default Vaccine;