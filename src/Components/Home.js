import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';
import CalendarView from "./CalendarView";
import WheelDecider from "./WheelDecider";


export default function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={4}>
            <CalendarView />
          </Col>
          <Col lg={8}>
            <WheelDecider />
          </Col>
        </Row>
      </Container>
    </>
  );
}