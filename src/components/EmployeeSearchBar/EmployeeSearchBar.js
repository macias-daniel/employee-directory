import React from "react"
import "./employeeSearchBar.css"

function employeeSearch() {
  return (
    <form>
      <div class="form-group">
        <label for="employeeSearch">Employee Search</label>
        <input type="text" className="form-control" name="employeeSearch" aria-describedby="emailHelp" />
      </div>
    </form>
  )
}

export default employeeSearch