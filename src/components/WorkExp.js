import React, {Component} from "react";

class WorkExp extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        let workExp = this.props.workArray;

        return workExp.map(exp => {

            switch (true) {

                case (this.props.reference === true):
                    return (
                        <div className="work-exp">
                            <input data-id={exp.id} id="position" onChange={this.props.handleChange} value={exp.position} placeholder="Position"></input>
                            <input data-id={exp.id} id="company" onChange={this.props.handleChange} value={exp.company} placeholder="Company"></input>
                            <input data-id={exp.id} id="start-date" onChange={this.props.handleChange} value={exp.startDate} placeholder="Start Date"></input>
                            <input data-id={exp.id} id="end-date" onChange={this.props.handleChange} value={exp.endDate} placeholder="End Date"></input>
                            <input data-id={exp.id} id="description" onChange={this.props.handleChange} value={exp.description} placeholder="Description"></input>
                            <button id="btn-delete-work" data-id={exp.id} onClick={this.props.delete}>Delete</button>
                        </div>
                    );

                case (this.props.reference2 === true):    
                    return (

                        <div className="work-exp-display" data-id={exp.id}>
                            <div className="left-exp">
                                <h4>{exp.position}</h4> <div><span>{exp.company} | {exp.startDate} - {exp.endDate}</span></div>
                            </div>
                            <div className="description">{exp.description}</div>
                        </div>
                        
                    );

                default:
                    return exp;

            }
        }
        )
    }
}

export default WorkExp;