import React, { Component } from "react";
import "./subscribe.css";

class Subscribe extends Component {
    constructor(props) {
        super();
    }

    render() {
        console.log(this.props.data);
        return (
            <div className="forMore"> For Daily Updates, Please Subscribe
                <div class="contain1">
                    <input type="text" placeholder="Email address" name="mail" required />
                    <button onClick={() => alert("Thank you for Subscribing!")}> Subscribe </button>
                </div>
            </div>
        )
    }
}
export default Subscribe;
