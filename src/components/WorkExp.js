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
                    return(
                        <div className="work-exp">
                            <input data-id={exp.id} placeholder="Company"></input>
                            <input data-id={exp.id} placeholder="Position"></input>
                            <input data-id={exp.id} placeholder="Start Date"></input>
                            <input data-id={exp.id} placeholder="End Date"></input>
                            <input data-id={exp.id} placeholder="Description"></input>
                        </div>
                    );
                case (this.props.reference2 === true):    
                    return(
                        <div className="work-exp" data-id={exp.id}>

                        </div>
                    );
                default:
                    return exp;
            }

            /* if (this.props.reference === true) {
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

            if (this.props.reference2 === true) {
                return(
                <div data-id={exp.id} className="work-exp">
                </div>
                )
            } */
            
        }
        )
    }
}

export default WorkExp;