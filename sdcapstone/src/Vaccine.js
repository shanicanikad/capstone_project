import React, { Component } from "react";
import "./vaccine.css";

class Vaccine extends Component {
    constructor(props) {
        super();
    }


    render() {
        console.log(this.props.data);
        return (
            <div className="first">
                <p></p>
                {this.props.data.length !==0
                ? this.props.data.map((vaccine) => (
                    <h1 className="second">
                        <p className="vaccine">{vaccine.product}</p>
                        <p className="vaccine">{vaccine.average_efficiency_percentage}</p>
                        <p className="vaccine">{vaccine.average_pricing_USD}</p>
                        {/* <p className="vaccine">{vaccine.place}</p>
                        <img src= {vaccine.image_url} className= "vaccineImage" alt="Responsive Pic"/>
                        <p className="vaccine">{vaccine.price}</p>
                        <p className="vaccine">{vaccine.link}</p>
                        <p className="vaccine">{vaccine.infoLink}</p> */}
                    </h1>
                ))
            : null}
            </div>
        );
    }
}

export default Vaccine;