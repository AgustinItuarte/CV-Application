import React, {Component} from "react";

class Info extends Component {
    constructor() {

        super()

        this.state = {

        }

    }

    render(){
        return (
            <div className="info"> 
                <div className="personal-data">
                    <h2>Personal Details</h2>
                    <input id="nameInput" placeholder="Name" onChange={this.props.showDisplay}></input>
                    <input id="titleInput" placeholder="Title" onChange={this.props.showDisplay}></input>
                    <input placeholder="Phone"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="Location"></input>
                    <input placeholder="Description"></input>
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