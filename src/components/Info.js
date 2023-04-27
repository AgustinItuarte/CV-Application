import React, {Component} from "react";

class Info extends Component {
    constructor() {

        super()

        this.state = {

        }

    }

    render(){
        return (
            <div className="info-container"> 
                <div className="personal-data">
                    <h2>Personal Details</h2>
                    <input id="nameInput" placeholder="Name" onChange={this.props.showDisplay}></input>
                    <input id="titleInput" placeholder="Title" onChange={this.props.showDisplay}></input>
                    <input id="phoneInput" placeholder="Phone" onChange={this.props.showDisplay}></input>
                    <input id="emailInput" placeholder="Email" onChange={this.props.showDisplay}></input>
                    <input id="locationInput" placeholder="Location" onChange={this.props.showDisplay}></input>
                </div>
                <div className="work-exp">
                    <h2>Work Experience</h2>
                </div>
                <div className="education">
                    <h2>Personal Details</h2>
                </div>
            </div>
                      

        );
    }
}

export default Info;