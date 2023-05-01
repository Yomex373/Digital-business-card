import React from "react"

function Info(){
    return(
        <div className="info-container">
             <img src="../images/Rectangle.jpg"/>
             <h2 className="name">Laura Smith</h2>
             <p className="role">Frontend Developer</p>
             <small className="web_address">laurasmith.website</small>
             <div className="btn-wrapper">
                <button className="btn-email"><img src="./images/Mail.png"/>Email</button>
                <button className="btn-linkedin"><img className="linkedin-icon" src="./images/linkedin.png"/>LinkedIn</button>
             </div>
        </div>
    )
}

export default Info