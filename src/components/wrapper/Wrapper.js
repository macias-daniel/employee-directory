import React from "react"

function Wrapper(props) {
  console.log(props)
  return <div className="wrapper">{props.children}</div>
}

export default Wrapper


