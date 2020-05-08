import React from "react"
import "./employeeCard.css"


function employeeCard({ name, imgSrc, location, status }) {

  return (
    <div className="container">
      <div className="row cardRow">
        <div className="col-md-3 profileImgContainer">
          <img src={imgSrc} className="card-img-top profileImg" alt="Profile" />
        </div>
        <div className="col-md-3 name">
          <h4 >{name}</h4>
        </div>
        <div className="col-md-3 email">
          <p >{location}</p>
        </div>
        <div className="col-md-3 phoneNum">
          <p >{status}</p>
        </div>
      </div>
    </div>
  )
}

export default employeeCard