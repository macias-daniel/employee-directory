import React from "react";
import Wrapper from "./components/wrapper/Wrapper";
import Navbar from "./components/navbar/Navbar"
import Jumbotron from "./components/jumbotron/Jumbotron"
import EmployeeCardContainer from "./components/employeeCardContainer/EmployeeCardContainer"

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Jumbotron />
      <EmployeeCardContainer />
    </Wrapper>)
}

export default App;
