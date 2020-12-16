import React, { Component } from "react";
import "./products.css";
import Nav from "./Nav.js";


class Add extends Component {
    constructor(props) {
        super();
        this.state = {
            product: "",
            efficiency:"",
            averageCost: "",
            whereAvailable: "",
            imageURL: ""
        }
    }

    handleSubmitAdd = (id) => {
        fetch("https://sdcapstone.herokuapp.com/products/" + id, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ product: this.state.product, "status": false }),
        })
            .then((res) => res.json())
            .then((out) => this.fetchProductData());
    };

    handleProduct = (event) => {
        console.log(event.target.value)
        this.setState({product: event.target.value});
      }

      handleEfficiency = (event) => {
        console.log(event.target.value)
        this.setState({efficiency: event.target.value});
      }  

      handleAverageCost = (event) => {
        console.log(event.target.value)
        this.setState({averageCost: event.target.value});
      }
    render() {
        return (
            <div>
                <Nav />
                <form>
                   <label>
              Product: <p><input type="text" onChange={this.handleProduct} name="name" /></p>
              Efficiency: <p><input type="text" onChange={this.handleEfficiency} name="name" /></p>
              Average Cost: <p><input type="text" onChange={this.handleAverageCost} name="name" /></p>
              Where Available: <p><input type="text" onChange={this.handleSubmitAdd} name="name" /></p>
              Image URL: <p><input type="text" onChange={this.handleSubmitAdd} name="name" /></p> 
            </label>
                </form>

            </div>
        );

    }
}


export default Add;