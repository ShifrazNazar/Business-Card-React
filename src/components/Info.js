import React from "react"
import shifraz from "../images/Shifraz-Nazar.jpg"
import email from "../images/Email.png"

export default function Info() {
    return (
        <div>
            <img src={shifraz} alt="shifraz" className="profile-pic"></img>
            <h1 className="name">Shifraz Nazar</h1>
            <h2 className="post">Front-end developer</h2>
            <div className="email-container">
                <img src={email} alt="email" className="email-icon"></img>
                <p>Email</p>
            </div>
        </div>
    )
}
