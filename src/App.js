import React, {useState, useEffect} from "react";
import Info from "./components/Info";
import Header from "./components/Header";
import WorkExp from "./components/WorkExp";
import Education from "./components/Education";
import uniqid from 'uniqid';

function App() {

  const [leftWorkRef] = useState(true);
  const [rightWorkRef] = useState(true);
  const [isWorkExp, setIsWorkExp] = useState(true);
  const [rightStudyRef] = useState(true);
  const [isStudy, setIsStudy] = useState(true);

  const [dataArray, setDataArray] = useState([{
    name: 'Agustin Ituarte',
    title: 'Game Developer', 
    cel: '092164289', 
    email:'agustin242536@gmail.com', 
    location:'Canelones'
  }]);

  const [workArray, setWorkArray] = useState([{
    company: 'TCS',
    position: 'Programmer', 
    startDate: '24/08/2022', 
    endDate:'Currently working', 
    description:'dwadwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
    id: uniqid()
  }]);

  const [educationArray, setEducationArray] = useState([{
    school: 'Universidad de la Republica',
    title: 'CS Degree',
    date: '2022',
    id: uniqid(),
  }]);

  useEffect(() => {
    handleIsWorkExp(workArray);
    handleIsStudies(educationArray);
  }, [workArray, educationArray]);

  const handleIsWorkExp = (array) => {

    if (array.length > 0) {
      setIsWorkExp(true)
    } else {
      setIsWorkExp(false)
    }
    
  }

  const handleIsStudies = (array) => {

    if (array.length > 0) {
      setIsStudy(true);
    } else {
      setIsStudy(false);
    }
    
  }

  const handleStudiesChange = (e) => {
    let newValue = e.target.value;
    let idName = e.target.id;
    let id = e.target.dataset.id;

    const newArray = educationArray.map(data => {

      switch (true) {
        case (data.id === id && idName === 'school'): return {...data, school: newValue};
        case (data.id === id && idName === 'title'): return {...data, title: newValue};
        case (data.id === id && idName === 'date'): return {...data, date: newValue};
        default: return data;
      }

    });
    
    setEducationArray(newArray)
  }

  const handleWorkExperienceChange = (e) => {
    let newValue = e.target.value;
    let idName = e.target.id;
    let id = e.target.dataset.id;

    const newArray = workArray.map(data => {

      switch (true) {
        case (data.id === id && idName === 'company'): return {...data, company: newValue};
        case (data.id === id && idName === 'position'): return {...data, position: newValue};
        case (data.id === id && idName === 'start-date'): return {...data, startDate: newValue};
        case (data.id === id && idName === 'end-date'): return {...data, endDate: newValue};
        case (data.id === id && idName === 'description'): return {...data, description: newValue};
        default: return data;
      }

    });
    
    setWorkArray(newArray);
  }

  const deleteWorkExp = (e) => {
    let id = e.target.dataset.id;
    let btn = e.target.id;
    
    if (btn === 'btn-delete-work') {

      let newWorkArray = workArray.filter((item) => item.id !== id)
      setWorkArray(newWorkArray);
      
    } else {

      let newEducationArray = educationArray.filter((item) => item.id !== id)
      setEducationArray(newEducationArray);

    }
      
  }

  const addExperience = (e) => {

    if (e.target.className === 'add-work-btn') {

      let newObject = {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
        id: uniqid()
      };
      
      setWorkArray(workArray => [...workArray, newObject]);

    } else {
      let newObject = {
        school: '',
        title: '',
        date: '',
        id: uniqid(),
      };

      setEducationArray(educationArray => [...educationArray, newObject]);
    }  
    
  }

  const showDisplay = (evt) => {

    const newArray = dataArray.map(data => {

      switch (evt.target.id) {
        case 'nameInput': return {...data, name:evt.target.value};
        case 'titleInput': return {...data, title:evt.target.value};
        case 'phoneInput': return {...data, cel:evt.target.value};
        case 'emailInput': return {...data, email:evt.target.value};
        case 'locationInput': return {...data, location:evt.target.value};
        default: return data;
      }

    })
    setDataArray(newArray);
  }
        
  return(
    <div className="App">

        <div className="info">
          <Info dataArray={dataArray} showDisplay={showDisplay}></Info>

          <div className="work-experiences">
            <h2>Work Experience</h2>
            <WorkExp delete={deleteWorkExp} handleChange={handleWorkExperienceChange} reference={leftWorkRef} workArray={workArray}></WorkExp>
            <button className="add-work-btn" onClick={addExperience}>Add</button>
          </div>
          
          <div className="educations">
            <h2>Education</h2>
            <Education delete={deleteWorkExp} handleChange={handleStudiesChange} reference={leftWorkRef} educationArray={educationArray}></Education>
            <button className="add-study-btn" onClick={addExperience}>Add</button>
          </div>

        </div>
                    
        <div className="cv-display">
          <Header dataArray={dataArray}></Header>
          
          {isWorkExp ? (
            <div className="work-experiences">
              <h2>Work Experience</h2>
              <WorkExp reference2={rightWorkRef} workArray={workArray}></WorkExp>
            </div>
          
          ) : (
            null
          )}

          {isStudy ? (
            <div className="educations">
              <h2>Education</h2>
              <Education reference2={rightStudyRef} educationArray={educationArray}></Education>
            </div>
          
          ) : (
            null
          )}

          
        </div>
        
    </div>
  );
}
export default App;