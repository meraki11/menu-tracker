import React, { Component } from 'react';
import Ideas from './Ideas';
import { Container, Row, Col } from 'react-bootstrap/';


export default class Journal extends Component {
    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Ideas />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}