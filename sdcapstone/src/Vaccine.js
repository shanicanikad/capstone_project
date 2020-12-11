import React, { Component } from "react";
import "./vaccine.css";

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
                        <p className="third">{Vaccine.vaccine}</p>
                        <p className="vaccine">{Vaccine.average_efficiency_precentage}</p>
                        <p className="vaccine">{Vaccine.average_pricing_USD}</p>
                        <p className="vaccine">{Vaccine.place}</p>
                        {/* <img src= {Vaccine.image_url} className= "vaccineImage" alt="Responsive Pic"/>
                        <p className="vaccine">{Vaccine.price}</p>
                        <p className="vaccine">{Vaccine.link}</p>
                        <p className="vaccine">{Vaccine.infoLink}</p> */}
                    </h1>
                ))
            : null}
            </div>
        );
    }
}

export default Vaccine;