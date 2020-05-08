import React, { useState, useEffect } from "react";
import EmployeeCard from "../employeeCard/EmployeeCard"
import EmployeeSearchBar from "../employeeSearchBar/EmployeeSearchBar"
import EmployeeSortBar from "../employeeSortBar/EmployeeSortBar"
import API from "../../utils/API"
import "./employeeCardContainer.css"


function EmployeeCardContainer() {

  const [employees, setEmployees] = useState([])
  const [employeeCard, setEmployeeCard] = useState([])
  const [search, setSearch] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")

  useEffect(() => {
    //ON first render grab all employees from db

    API.getEmployees(1).then(data => {
      setEmployees(data.data.results)
    })
  }, [])

  //Whenever employees are updated or search is updated
  useEffect(() => {
    //Filter out employees whos name is not included by search
    const searchRelatesEmployee = employees.filter((employee) => {
      return (
        (employee.name).toLowerCase().includes(search)
      )
    })

    // For each filtered employee create a card element and setEmployeeCard so dom rerenders
    setEmployeeCard(searchRelatesEmployee.map(employee => {
      return (<EmployeeCard
        key={employee.id}
        imgSrc={employee.image}
        name={employee.name}
        location={employee.location.name}
        status={employee.status}
      />)
    }))
  }, [employees, search])

  //Component to render
  return (
    <div className="employeeCardContainer">
      <EmployeeSearchBar
        handleInputChange={(event) => { setSearch((event.target.value).toLowerCase()) }}
      />
      <EmployeeSortBar handleOnClick={(event) => {
        //Check what order the is sort is occuring and sort the opposiite way
        setEmployees(sortEmployees())
      }} />
      {employeeCard}
    </div>
  )

  //Sorts employees and sets the sortOrder to the opposite
  function sortEmployees() {
    if (sortOrder === "asc") {
      setSortOrder("desc")
      return employees.slice(0).sort(compareValues("name", "asc"))
    } else {
      setSortOrder("asc")
      return employees.slice(0).sort(compareValues("name", "desc"))
    }
  }

}

//Sorts employee objects
function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

export default EmployeeCardContainer;



