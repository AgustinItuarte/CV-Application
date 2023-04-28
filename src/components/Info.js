import React, {Component} from "react";

class Info extends Component {
    constructor() {

        super()

        this.state = {

        }

    }

    render(){
        return (
            <div className="personal-data">
                <h2>Personal Details</h2>
                <input id="nameInput" placeholder="Name" onChange={this.props.showDisplay}></input>
                <input id="titleInput" placeholder="Title" onChange={this.props.showDisplay}></input>
                <input id="phoneInput" placeholder="Phone" onChange={this.props.showDisplay}></input>
                <input id="emailInput" placeholder="Email" onChange={this.props.showDisplay}></input>
                <input id="locationInput" placeholder="Location" onChange={this.props.showDisplay}></input>
            </div>
                      

        );
    }
}

export default Info;