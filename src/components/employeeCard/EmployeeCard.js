import React from "react"
import "./employeeCard.css"


function employeeCard({ firstName, lastName, imgSrc, phoneNum, email }) {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 profileImgContainer">
          <img src={imgSrc} className="card-img-top profileImg" alt="Profile" />
        </div>
        <div className="col-md-3 name">
          <h4 >{`${firstName} ${lastName}`}</h4>
        </div>
        <div className="col-md-3 email">
          <p >{email}</p>
        </div>
        <div className="col-md-3 phoneNum">
          <p >{phoneNum}</p>
        </div>
      </div>
    </div>
  )
}

export default employeeCard