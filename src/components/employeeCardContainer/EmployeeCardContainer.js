import React from "react";
import EmployeeCard from "../employeeCard/EmployeeCard"
import API from "../../utils/API"
import "./employeeCardContainer.css"

class EmployeeCardContainer extends React.Component {

  state = {
    employees: []
  }

  //On mount grab all employees from our db
  componentDidMount = () => {
    API.getEmployees().then(employee => {
      this.setState({ employees: employee.data.results })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    let idNum = 0
    const employeeCards = this.state.employees.map(employee => {
      idNum++
      return (<EmployeeCard
        key={idNum}
        imgSrc={employee.picture.medium}
        firstName={employee.name.first}
        lastName={employee.name.last}
        phoneNum={employee.cell}
        email={employee.email}
      />)
    })


    return (<div className="employeeCardContainer">{employeeCards}</div>)
  }
}

export default EmployeeCardContainer;