import React from "react"
import facebook from "../images/FaceBook.png"
import instagram from "../images/Instagram.png"
import linkedin from "../images/LinkedIn.png"
import github from "../images/GitHub.png"

export default function Footer() {
    return (
       <div>
            <div className="footer-container">
            <img src={facebook} alt="facebook" className="social-icons" />
            <img src={instagram} alt="instagram" className="social-icons" />
            <img src={linkedin} alt="linkedin" className="social-icons" />
            <img src={github} alt="github" className="social-icons" />
            </div>
       </div>
    )
}
