import React, {Component} from "react";
import Info from "./components/Info"
import Header from "./components/Header"
import WorkExp from "./components/WorkExp"
import uniqid from 'uniqid'

class App extends Component {
  constructor(){
    super()

    this.state = {

      leftWorkRef: true,
      rightWorkRef: true,

      dataArray: [
        {name: 'Agustin Ituarte',
        title: 'Game Developer', 
        cel: '092164289', 
        email:'agustin242536@gmail.com', 
        location:'Canelones'}
      ],

      workArray: []
    }

    this.showDisplay = this.showDisplay.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.handleWorkExperienceChange = this.handleWorkExperienceChange.bind(this);
  }

  handleWorkExperienceChange(e) {
    let newValue = e.target.value;
    let workArray = this.state.workArray;
    let idName = e.target.id;
    let id = e.target.dataset.id;

    const newArray = workArray.map(data => {

      switch (true) {
        case (data.id === id && idName === 'company'):
          
          return {...data, company: newValue};

        case (data.id === id && idName === 'position'):
          
          return {...data, position: newValue};

        case (data.id === id && idName === 'start-date'):
          
          return {...data, startDate: newValue};

        case (data.id === id && idName === 'end-date'):
          
          return {...data, endDate: newValue};

        case (data.id === id && idName === 'description'):
          
          return {...data, description: newValue};
        
        default:
          return data;
      }

    });
    
    this.setState({ workArray: newArray });
  }

  deleteWorkExp() {
    
  }

  addExperience() {

    let newObject = {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      id: uniqid()
    };

    this.setState({ workArray: [...this.state.workArray, newObject] }, () => console.log(this.state.workArray));    
  }

  showDisplay(evt) {

    let dataArray = this.state.dataArray

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

    })

    this.setState({ dataArray: newArray });
  }

  render() {

    return(
      <div className="App">

          <div className="info">
            <Info showDisplay={this.showDisplay}></Info>

            <div className="work-experiences">
              <h2>Work Experience</h2>
              <WorkExp handleChange={this.handleWorkExperienceChange} reference={this.state.leftWorkRef} workArray={this.state.workArray}></WorkExp>
              <button onClick={this.addExperience}>Add</button>
            </div>
            
          </div>
                     
          <div className="cv-display">
            <Header data={this.state.dataArray}></Header>

            <div className="work-experiences">
              <h2>Work Experience</h2>
              <WorkExp reference2={this.state.rightWorkRef} workArray={this.state.workArray}></WorkExp>
            </div>
          </div>
          
      </div>
    );

  }
}

export default App;