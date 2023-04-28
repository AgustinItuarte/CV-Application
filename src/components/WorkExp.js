import React, {Component} from "react";

class WorkExp extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return(
            <div className="work-exp">
                <h2>Work Experience</h2>
                <button onClick={this.props.addExperience}>Add</button>
            </div>
        );
    }
}

export default WorkExp;