import React from "react"
import "./jumbotron.css"
function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container textContainer">
        <h1 className="display-4 mainText">Keeping track of the humanoids you <em><strong>Need</strong></em> </h1>
        <p className="lead mt-5">Use our newly created Expendable Humanoid Tracker to deal with all the annoying things that went into tracking your expendables! Search for the humanoid you want in our patent pending searchbar. Even sort humanoids in alphabetical order!  (It's crazy I know)</p>
      </div>
    </div >)
}

export default Jumbotron