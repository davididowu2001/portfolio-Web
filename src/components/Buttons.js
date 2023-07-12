import React from "react";
import CV from './assets/CV.docx'

const Buttons =() =>{
    return(
        <div className="cv">
            <a href={CV} download className="btn">Download CV </a>

        </div>

    )
}
export default Buttons;