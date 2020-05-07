import React from "react"
import "./employeeCard.css"
import Container from "../layout/Container"
import Col from "../layout/Col"
import Row from "../layout/Row"

function employeeCard({ firstName, lastName, imgSrc, phoneNum, email }) {

  return (
    <Container>
      <Row>
        <Col size="md-3">
          <img src={imgSrc} className="card-img-top profileImg" alt="Profile" />
        </Col>
        <Col size="md-3">
          <h4 className="name">{`${firstName} ${lastName}`}</h4>
        </Col>
        <Col size="md-3">
          <p className="email">{email}</p>
        </Col>
        <Col size="md-3">
          <p className="phoneNum">{phoneNum}</p>
        </Col>
      </Row>
    </Container >
  )
}

export default employeeCard