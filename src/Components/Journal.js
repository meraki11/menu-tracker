import React, { Component } from 'react';
import Ideas from './Ideas';
import { Container, Row, Col, Image } from 'react-bootstrap/';
import CalendarView from './CalendarView';

export default class Journal extends Component {
    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col lg={9}>
                            <Ideas />
                        </Col>
                        <Col lg={3} style={{background: '#886839', justifyContent: 'center'}}>
                            <CalendarView />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }s
}