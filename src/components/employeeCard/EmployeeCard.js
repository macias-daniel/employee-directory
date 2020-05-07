import React from "react"
import "./employeeCard.css"

function employeeCard({ firstName, lastName, imgSrc, phoneNum, email }) {

  return (
    <div className="card" >
      <img src={imgSrc} className="card-img-top profileImg" alt="Profile" />
      <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
      <p >{email}</p>
      <p >{phoneNum}</p>
    </div>)
}

export default employeeCard