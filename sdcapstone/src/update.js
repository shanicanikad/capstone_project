import React, { Component } from "react";
import "./products.css";
import Nav from "./Nav.js";


class Update extends Component {
    constructor(props) {
        super();
        this.state = {
            product: []
        }
    }

    handleSubmitUpdate = (id) => {
        fetch("https://sdcapstone.herokuapp.com/products/" + id, {
            method: "POST",
        })
            .then((res) => res.json())
            .then((out) => this.fetchProductData());
    };

    render() {
        return (
            <div>                 
                <Nav />
                <form>
                   <label>
              Product: <p><input type="text" onChange={this.handleSubmitUpdate} name="name" /></p>
              Efficiency: <p><input type="text" onChange={this.handleSubmitUpdate} name="name" /></p>
              Average Cost: <p><input type="text" onChange={this.handleSubmitUpdate} name="name" /></p>
              Where Available: <p><input type="text" onChange={this.handleSubmitUpdate} name="name" /></p>
              Image URL: <p><input type="text" onChange={this.handleSubmitUpdate} name="name" /></p> 
            </label>
                </form>

            </div>
        );

    }
}


export default Update;