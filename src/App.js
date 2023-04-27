import React, {Component} from "react";
import Info from "./components/Info"
import Display from "./components/Cvdisplay"

class App extends Component {
  constructor(){
    super()

    this.state = {
      inputValue: '123',

      dataArray: [
        {name: 'Agustin Ituarte', title: 'Game Developer', cel: '092164289', email:'agustin242536@gmail.com', location:'Canelones'}
      ]
    }

    this.showDisplay = this.showDisplay.bind(this);
  }

  showDisplay(evt) {

    let dataArray = this.state.dataArray

    console.log(evt.target.value)

    const newArray = dataArray.map(data => {
      switch (evt.target.id) {
        case 'nameInput':
          return {...data, name:evt.target.value};
        case 'titleInput':
          return {...data, title:evt.target.value};
        case 'phoneInput':
          return {...data, cel:evt.target.value};
        case 'emailInput':
          return {...data, email:evt.target.value};
        case 'locationInput':
          return {...data, location:evt.target.value};
        default:
          return data;
      }
      /* if (evt.target.id === 'nameInput') {
        return {...data, name:evt.target.value}
      } if (evt.target.id === 'titleInput') {
        return {...data, title:evt.target.value}
      } else {
        return data
      } */
    })

    this.setState({ dataArray: newArray });
  }

  render() {

    return(
      <div className="App">
          <div className="info">
            <Info showDisplay={this.showDisplay}></Info>
          </div>
          
          <div className="cv-display">
            <Display text={this.state.dataArray}></Display>
          </div>
          
      </div>
    );

  }
}

export default App;