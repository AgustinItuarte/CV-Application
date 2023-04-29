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
            return(
                <div className="work-exp">
                    <input data-id={exp.id} placeholder="Company"></input>
                    <input data-id={exp.id} placeholder="Position"></input>
                    <input data-id={exp.id} placeholder="Start Date"></input>
                    <input data-id={exp.id} placeholder="End Date"></input>
                    <input data-id={exp.id} placeholder="Description"></input>
                </div>
            )
        }
        )
    }
}

export default WorkExp;