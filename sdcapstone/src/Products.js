import React, { Component } from "react";
import "./products.css";

class Products extends Component {
    constructor(props) {
        super();
    }

    render() {
        console.log(this.props.data);
        return (
            <div className="first">
                <p></p>
                {this.props.data.length !==0
                ? this.props.data.map((products) => (
                    <h1 className="second">
                        <p className="product">{products.product}</p>
                        <p className="product">{products.average_efficiency_percentage}</p>
                        <p className="product">{products.average_pricing_USD}</p>
                        {/* <p className="product">{products.available}</p>
                        <img src= {Products.image_url} className= "productImage" alt="Responsive Pic"/>
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