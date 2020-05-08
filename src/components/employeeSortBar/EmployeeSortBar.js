import React from "react"
import "./employeeSortBar.css"


function SortBar(props) {

  return (<div className="container">
    <div className="row">
      <div className="col-3 sortLabels">
        <p> Image</p>
      </div>
      <SortBarLabelsCol handleOnClick={props.handleOnClick}>
        Name
      </SortBarLabelsCol>
      <div className="col-3 sortLabels">
        <p> Location</p>
      </div>
      <div className="col-3 sortLabels">
        <p> Status</p>
      </div>
    </div>
  </div>)
}


function SortBarLabelsCol(props) {
  return (
    <p className="col-3 sortLabels">
      <a href="/#" onClick={props.handleOnClick}>
        {props.children}
        <span className="sortIcon">
          <svg className="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
          </svg>
        </span>
      </a>
    </p>
  )
}

export default SortBar