import React from "react";
import "../employeeCard/employeeCard.css"

function Row(props) {
  return (
    <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>
  );
}

export default Row;
