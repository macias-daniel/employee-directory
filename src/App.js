import React from "react";
import Wrapper from "./components/wrapper/Wrapper";
import Navbar from "./components/navbar/Navbar"
import EmployeeCardContainer from "./components/employeeCardContainer/EmployeeCardContainer"

function App() {
  return (
    <Wrapper>
      <Navbar />
      <EmployeeCardContainer />
    </Wrapper>)
}

export default App;
