import React, { useState, useEffect } from "react";
import EmployeeCard from "../employeeCard/EmployeeCard"
import EmployeeSearchBar from "../EmployeeSearchBar/EmployeeSearchBar"
import API from "../../utils/API"
import "./employeeCardContainer.css"


function EmployeeCardContainer() {

  const [employees, setEmployees] = useState([])
  const [employeeCard, setEmployeeCard] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    //ON first render grab all employees from db
    API.getEmployees().then(employee => {
      setEmployees(employee.data.results)
    }).catch(err => {
      console.log(err)
    })
  }, [])


  useEffect(() => {
    let idNum = 0
    //Filter out employees whos name is not included by search
    const searchRelatesEmployee = employees.filter((employee) => {
      return (
        (employee.name.first).toLowerCase().includes(search) ||
        (employee.name.last).toLowerCase().includes(search))
    })

    //For each filtered employee create a card element and setEmployeeCard so dom rerenders
    setEmployeeCard(searchRelatesEmployee.map(employee => {
      idNum++
      return (<EmployeeCard
        key={idNum}
        imgSrc={employee.picture.medium}
        firstName={employee.name.first}
        lastName={employee.name.last}
        phoneNum={employee.cell}
        email={employee.email}
      />)
    }))


  }, [search, employees])

  //Create an array of employee cards



  return (<div className="employeeCardContainer">
    <EmployeeSearchBar
      handleInputChange={(event) => { setSearch((event.target.value).toLowerCase()) }}
    />
    {employeeCard}
  </div>)
}

export default EmployeeCardContainer;