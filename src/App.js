import React, {Component} from "react";
import Info from "./components/Info"
import Display from "./components/Cvdisplay"

class App extends Component {
  constructor(){
    super()

    this.state = {

    }

  }

  render() {

    return(
      <div className="App">
         <div className="info">
          <Info></Info>
         </div>
         <div className="cv-display">
          <Display></Display>
         </div>
      </div>
    );

  }
}

export default App;