import React from "react"
import "./employeeCard.css"

function employeeCard() {
  const name = "Daniel Macias"
  const email = "email@email.com"
  const phoneNum = "(619) 730-5398"

  return (
    <div className="card" >
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p >{email}</p>
        <p >{phoneNum}</p>
      </div>
    </div>)
}

export default employeeCard