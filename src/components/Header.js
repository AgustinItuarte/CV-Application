function Header(props) {

    return props.dataArray.map((data) => {
        return(
            <div className="header">
                <div className="data-header">
                    <h1 className="name">{data.name}</h1>
                    <h3 className="title">{data.title}</h3>
                </div>
                
                <div className="contact-group">
                    <div className="contact">{data.cel}</div>
                    <div className="contact">{data.email}</div>
                    <div className="contact">{data.location}</div>
                </div>
            </div>
        )
        
    }           
    );
        
}

export default Header;