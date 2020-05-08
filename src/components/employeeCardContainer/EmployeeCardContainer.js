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
    let paginationArray
    API.getEmployees(1).then(firstEmployeeSet => {
      paginationArray = firstEmployeeSet.data.results
      setEmployees(paginationArray)
    })
  }, [])

  useEffect(() => {
    //Filter out employees whos name is not included by search
    const searchRelatesEmployee = employees.filter((employee) => {
      return (
        (employee.name).toLowerCase().includes(search))
    })

    //For each filtered employee create a card element and setEmployeeCard so dom rerenders
    setEmployeeCard(searchRelatesEmployee.map(employee => {
      return (<EmployeeCard
        key={employee.id}
        imgSrc={employee.image}
        name={employee.name}
        species={employee.species}
        status={employee.status}
      />)
    }))


  }, [search, employees])


  return (<div className="employeeCardContainer">
    <EmployeeSearchBar
      handleInputChange={(event) => { setSearch((event.target.value).toLowerCase()) }}
    />
    {employeeCard}
  </div>)
}

export default EmployeeCardContainer;