import React, {Component} from "react";

class Education extends Component {
    constructor() {
        super();

        this.state = {}
    }


    render() {
        let educationArray = this.props.educationArray;

        return educationArray.map(study => {

            switch (true) {

                case (this.props.reference === true):
                    return (
                        <div className="studies-left">
                            <input data-id={study.id} id="title" onChange={this.props.handleChange} value={study.title} placeholder="Title"></input>
                            <input data-id={study.id} id="school" onChange={this.props.handleChange} value={study.school} placeholder="School"></input>
                            <input data-id={study.id} id="date" onChange={this.props.handleChange} value={study.date} placeholder="Date"></input>
                            <span><button id="btn-delete-study" data-id={study.id} onClick={this.props.delete}>Delete</button></span> 
                        </div>
                    );

                case (this.props.reference2 === true):    
                    return (

                        <div className="work-study-display" data-id={study.id}>
                            <div className="left-study">
                                <h4>{study.title}</h4> <div><span>{study.school} | {study.date}</span></div>
                            </div>
                        </div>
                        
                    );

                default: return study;

            }
        }
        )
    }
    }

export default Education;