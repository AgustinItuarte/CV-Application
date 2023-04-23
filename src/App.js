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
          <Info></Info>
          <Display></Display>
      </div>
    );

  }
}

export default App;