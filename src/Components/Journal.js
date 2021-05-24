import React, { Component } from 'react';
import Ideas from './Ideas';
import { Container, Row, Col } from 'react-bootstrap/';
import CalendarView from './CalendarView';

export default class Journal extends Component {
    constructor(props) {
        super(props);
    } 
    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col lg={4}>
                            <CalendarView />
                        </Col>
                        <Col lg={4}>
                            <Ideas />
                        </Col>
                    </Row>
                </Container>
                
                
            </>
        );
    }
}