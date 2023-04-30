import React, {Component} from "react";

class Info extends Component {
    constructor() {

        super()

        this.state = {

        }

    }

    render(){
        let dataArray = this.props.dataArray;
        return dataArray.map(exp => {
            return (
                <div className="personal-data">
                    <h2>Personal Details</h2>
                    <input id="nameInput" placeholder="Name" onChange={this.props.showDisplay} value={exp.name}></input>
                    <input id="titleInput" placeholder="Title" onChange={this.props.showDisplay} value={exp.title}></input>
                    <input id="phoneInput" placeholder="Phone" onChange={this.props.showDisplay} value={exp.cel}></input>
                    <input id="emailInput" placeholder="Email" onChange={this.props.showDisplay} value={exp.email}></input>
                    <input id="locationInput" placeholder="Location" onChange={this.props.showDisplay} value={exp.location}></input>
                </div>
            )
        }

            
                      

        );
    }
}

export default Info;