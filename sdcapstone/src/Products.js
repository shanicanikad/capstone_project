import React, { Component } from "react";
import "./products.css";
import Nav from "./Nav.js";


class Products extends Component {
    constructor(props) {
        super();
        this.state = {
            product: []
        }
    }
    handleAdd = (id) => {
        fetch("https://sdcapstone.herokuapp.com/products/" + id, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ product: this.state.product, "status": false }),
        })
            .then((res) => res.json())
            .then((out) => this.fetchProductData());
    };


    handleDelete = (id) => {
        console.log('click2')
        console.log(id)
        fetch('https://sdcapstone.herokuapp.com/products/' + id, {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))

    }

    handleUpdate = (id) => {
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

    render() {
        console.log(this.props.data);
        return (
            <div className="one">
                <Nav />
                <h1>How to Stop the Spread of COVID-19</h1>
                <h3>Helpful Projects to Help Stop the Spread of COVID-19</h3>
                <a href="/add" className="new">
                    Add a Product
                            </a>
                <div className="container-grid1">
                    {this.props.data.length !== 0
                        ? this.props.data.map((item) => (
                            <div class="border1">
                                <p>Product: {item.product}</p>
                                <p>Efficiency: {item.average_efficiency_percentage}%</p>
                                <p>Average Cost: ${item.average_pricing_USD}.00</p>
                                <p><a href={item.infoLink}>Click Here for Important Health Information</a></p>
                                <div className="box">{item.available.map(product => (<div> <p>Where Available: {product.place}</p> <img src={product.image_url} className="pics" /> <p>Price: ${product.price}</p> <p><a href={product.link}>Buy Here</a></p> </div>))} </div>

                                <a href="#" className="delete" onClick={() => this.handleDelete(item._id)}>
                                    Delete
                            </a>
                                <a href="/update" className="update">
                                    Update
                            </a>
                            </div>
                        ))
                        : null}
                </div>
            </div>
        );

    }
}


export default Products;