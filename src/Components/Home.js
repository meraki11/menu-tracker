import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';
// import DateForm from "./DateForm";
import WheelCategories from './WheelCategories';
import WheelDecider from "./WheelDecider";

export default function Home() {
  return (
    <>
      <Container fluid>
        <Row></Row>
        <Row>
          <Col lg={2}>
            
          </Col>
          <Col lg={5}>
            <WheelDecider />
          </Col>
          <Col lg={5}>
            <h2>Menu Ideas</h2>
            <WheelCategories />
          </Col>
        </Row>
      </Container>
    </>
  );
}