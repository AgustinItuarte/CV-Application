import React, {Component} from "react";
import Info from "./components/Info"
import Display from "./components/Cvdisplay"

class App extends Component {
  constructor(){
    super()

    this.state = {
      inputValue: '123',

      dataArray: [
        {name: 'Agustin', title: 'Game Developer'}
      ]
    }

    this.showDisplay = this.showDisplay.bind(this);
  }

  showDisplay(evt) {

    let dataArray = this.state.dataArray

    console.log(evt.target.value)
    

    const newArray = dataArray.map(data => {
      if (evt.target.id === 'nameInput') {
        return {...data, name:evt.target.value}
      } if (evt.target.id === 'titleInput') {
        return {...data, title:evt.target.value}
      } else {
        return data
      }
    })

    this.setState({ dataArray: newArray });
  }

  render() {

    return(
      <div className="App">
          <Info showDisplay={this.showDisplay}></Info>
          <Display text={this.state.dataArray}></Display>
      </div>
    );

  }
}

export default App;