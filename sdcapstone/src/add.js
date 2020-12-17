import React, { Component } from "react";
import "./products.css";
import Nav from "./Nav.js";
import {withRouter} from "react-router-dom"


class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: "",
            average_efficiency_percentage: "",
            average_pricing_USD: "",
            infoLink: "",
            place: "",
            image_url: "",
            price: "",
            link: "",
            message:""
        }
    }


    handleSubmitAdd = (event) => {
        event.preventDefault ()
        fetch("https://sdcapstone.herokuapp.com/products/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ product: this.state.product, average_efficiency_percentage: this.state.average_efficiency_percentage, average_pricing_USD: this.state.average_pricing_USD, infoLink: this.state.infoLink, available: [{ place: this.state.place, image_url: this.state.image_url, price: this.state.price, link: this.state.link }] }),
        })
            .then((res) => res.json())
            .then((out) => {
                console.log(this.props)
                this.props.history.push("/products")
            // this.setState({message: "CONGRADULATIONS! You have made a new product!"})
        }
            );
    };

    handleProduct = (event) => {
        console.log(event.target.value)
        this.setState({ product: event.target.value });
    }

    handleEfficiency = (event) => {
        console.log(event.target.value)
        this.setState({ average_efficiency_percentage: event.target.value });
    }

    handleAverageCost = (event) => {
        console.log(event.target.value)
        this.setState({ average_pricing_USD: event.target.value });
    }

    handleInfoLink = (event) => {
        console.log(event.target.value)
        this.setState({ infoLink: event.target.value });
    }

    handleWhereAvailable = (event) => {
        console.log(event.target.value)
        this.setState({ place: event.target.value });
    }

    handleImageURL = (event) => {
        console.log(event.target.value)
        this.setState({ image_url: event.target.value });
    }

    handlePrice = (event) => {
        console.log(event.target.value)
        this.setState({ price: event.target.value });
    }

    handleLink = (event) => {
        console.log(event.target.value)
        this.setState({ link: event.target.value });
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
                        Info Link: <p><input type="text" onChange={this.handleInfoLink} name="name" /></p>
                        Where Available: <p><input type="text" onChange={this.handleWhereAvailable} name="name" /></p>
                        Image URL: <p><input type="text" onChange={this.handleImageURL} name="name" /></p>
                        Price: <p><input type="text" onChange={this.handlePrice} name="name" /></p>
                        Link: <p><input type="text" onChange={this.handleLink} name="name" /></p>
                        {this.state.message}
                    </label>
                    <button onClick={(event) => this.handleSubmitAdd(event)}>Submit</button>
                </form>
            </div>
        );

    }
}


export default withRouter (Add);