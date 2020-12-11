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
                    this.props.available.map((available) => (

                    <h1 className="second">
                        <p className="product">{products.product}</p>
                        <p className="product">{products.average_efficiency_percentage}</p>
                        <p className="product">{products.average_pricing_USD}</p>
                        <p className="product">{products.available}</p>
                        <img src= {available.image_url}/>
                        <p key={index}> Place: {available.place} </p>
                        <p key={index}> Price: {available.price} </p>
                        <p key={index}> Link: {available.link} </p>
                    </h1>
                )));
            : null
            
            </div>
        );
        
    }
}

export default Products;