function Education (props) {

    return props.educationArray.map(study => {

        switch (true) {

            case (props.reference === true):
                return (
                    <div className="studies-left">
                        <input data-id={study.id} id="title" onChange={props.handleChange} value={study.title} placeholder="Title"></input>
                        <input data-id={study.id} id="school" onChange={props.handleChange} value={study.school} placeholder="School"></input>
                        <input data-id={study.id} id="date" onChange={props.handleChange} value={study.date} placeholder="Date"></input>
                        <span><button id="btn-delete-study" data-id={study.id} onClick={props.delete}>Delete</button></span> 
                    </div>
                );

            case (props.reference2 === true):    
                return (

                    <div className="work-study-display" data-id={study.id}>
                        <div className="left-study">
                            <h4>{study.title}</h4> <div><span>{study.school} | {study.date}</span></div>
                        </div>
                    </div>
                    
                );

            default: return study;

        }
    }
    )

}

export default Education;