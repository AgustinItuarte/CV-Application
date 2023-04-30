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
                            <input data-id={exp.id} id="position" onChange={this.props.handleChange} placeholder="Position"></input>
                            <input data-id={exp.id} id="company" onChange={this.props.handleChange} placeholder="Company"></input>
                            <input data-id={exp.id} id="start-date" onChange={this.props.handleChange} placeholder="Start Date"></input>
                            <input data-id={exp.id} id="end-date" onChange={this.props.handleChange} placeholder="End Date"></input>
                            <input data-id={exp.id} id="description" onChange={this.props.handleChange} placeholder="Description"></input>
                            <button>Delete</button>
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