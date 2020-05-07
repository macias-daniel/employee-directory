import React from "react";
import Wrapper from "./components/wrapper/Wrapper";
import Navbar from "./components/navbar/Navbar"
import EmployeeSearchBar from "./components/EmployeeSearchBar/EmployeeSearchBar"
import EmployeeCardContainer from "./components/employeeCardContainer/EmployeeCardContainer"

function App() {
  return (
    <Wrapper>
      <Navbar />
      <EmployeeSearchBar />
      <EmployeeCardContainer />
    </Wrapper>)
}

export default App;
