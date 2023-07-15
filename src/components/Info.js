function Info(props) {

    return props.dataArray.map(exp => {
        return (
            <div className="personal-data">
                <h2>Personal Details</h2>
                <input id="nameInput" placeholder="Name" onChange={props.showDisplay} value={exp.name}></input>
                <input id="titleInput" placeholder="Title" onChange={props.showDisplay} value={exp.title}></input>
                <input id="phoneInput" placeholder="Phone" onChange={props.showDisplay} value={exp.cel}></input>
                <input id="emailInput" placeholder="Email" onChange={props.showDisplay} value={exp.email}></input>
                <input id="locationInput" placeholder="Location" onChange={props.showDisplay} value={exp.location}></input>
            </div>
        )
    }                     
    );
}

export default Info;