import React, { Component } from "react";
import "./Products.css";

class Products extends Component {
    constructor(props) {
        super();
    }

    render() {
        console.log(this.props.products);
        return (
            <div className="first">
                <p></p>
                {this.props.products.length !==0
                ? this.props.products.map((Products) => (
                    <h1 className="second">
                        <span className="third">{Products.product}</span>
                        <p className="product">{Products.average_efficiency_precentage}</p>
                        <p className="product">{Products.average_pricing_USD}</p>
                        <p className="product">{Products.available}</p>
                        {/* <img src= {Products.image_url} className= "productImage" alt="Responsive Pic"/>
                        <p className="product">{Products.price}</p>
                        <p className="product">{Products.link}</p>
                        <p className="product">{Products.infoLink}</p> */}
                    </h1>
                ))
            : null}
            </div>
        );
    }
}

export default Products;