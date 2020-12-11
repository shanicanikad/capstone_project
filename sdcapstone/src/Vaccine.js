import React, { Component } from "react";
import "./Vaccine.css";

class Vaccine extends Component {
    constructor(props) {
        super();
    }


    render() {
        console.log(this.props.vaccine);
        return (
            <div className="first">
                <p></p>
                {this.props.vaccine.length !==0
                ? this.props.vaccine.map((Vaccine) => (
                    <h1 className="second">
                        <span className="third">{Vaccine.product}</span>
                        <p className="product">{Vaccine.average_efficiency_precentage}</p>
                        <p className="product">{Vaccine.average_pricing_USD}</p>
                        <p className="product">{Vaccine.place}</p>
                        {/* <img src= {Vaccine.image_url} className= "productImage" alt="Responsive Pic"/>
                        <p className="product">{Vaccine.price}</p>
                        <p className="product">{Vaccine.link}</p>
                        <p className="product">{Vaccine.infoLink}</p> */}
                    </h1>
                ))
            : null}
            </div>
        );
    }
}

export default Vaccine;