import React, {Component} from "react";

class Display extends Component {
    constructor() {

        super()

        this.state = {

        }

    }

    render(){
        let dataArray = this.props.text;
        // return(
        //     <div className="cv-display">
        //         <h1 id="name">{dataArray[0].name}</h1>
        //     </div>
        // )
        return dataArray.map((data) => {
            return(
                <div className="cv-display">
                    <h1 id="name">{data.name}</h1>
                    <h3 id="title">{data.title}</h3>
                </div>
            )
            
        }           

        );
    }
}

export default Display;