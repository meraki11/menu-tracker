import React, { Component } from 'react'
import { Form, Container, Row, Col } from 'react-bootstrap';

export default class WheelCategories extends Component {
    constructor() {
        super()
        this.state = {
            opt1: "",
            opt2: "",
            opt3: "",
            opt4: "",
            opt5: "",
            opt6: "",
            opt7: "",
            opt8: "",
            opt9: "",
            opt10: "",
            opt11: "",
            opt12: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }    

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                    <Col lg={2}>
                        <Form className="wheel-categories" inline style={{background:'#F9EEC9'}}>
                            <Form.Group inline>
                                <Form.Label column sm={4}>Option 1: </Form.Label>
                                <Col sm={8}>
                                <Form.Control type="text" name="opt1" placeholder="Option 1" onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm={4}>Option 2: </Form.Label>    
                                <Col sm={8}>
                                <Form.Control type="text" name="opt2" placeholder="Option 2" onChange={this.handleChange} />
                                </Col>
                            </Form.Group> 
                            <Form.Group>
                                <Form.Label column sm={4}>Option 3: </Form.Label>     
                                <Col sm={8}>
                                <Form.Control type="text" name="opt3" placeholder="Option 3" onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm={4}>Option 4: </Form.Label>      
                                <Col sm={8}>
                                <Form.Control type="text" name="opt4" placeholder="Option 4" onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm={4}>Option 5: </Form.Label>     
                                <Col sm={8}>
                                <Form.Control type="text" name="opt5" placeholder="Option 5" onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm={4}>Option 6: </Form.Label> 
                                <Col sm={8}>
                                <Form.Control type="text" name="opt6" placeholder="Option 6" onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group>   
                                <Form.Label column sm={4}>Option 7: </Form.Label>   
                                <Col sm={8}>
                                <Form.Control type="text" name="opt7" placeholder="Option 7" onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm={4}>Option 8: </Form.Label>          
                                <Col sm={8}>
                                <Form.Control type="text" name="opt8" placeholder="Option 8" onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm={4}>Option 9: </Form.Label>           
                                <Col sm={8}>
                                <Form.Control type="text" name="opt9" placeholder="Option 9" onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm={4}>Option 10: </Form.Label>      
                                <Col sm={8}>
                                <Form.Control type="text" name="opt10" placeholder="Option 10" onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm={4}>Option 11: </Form.Label>     
                                <Col sm={8}>
                                <Form.Control type="text" name="opt11" placeholder="Option 11" onChange={this.handleChange} />
                                </Col>
                            </Form.Group> 
                            <Form.Group>
                                <Form.Label column sm={4}>Option 12: </Form.Label>    
                                <Col sm={8}>
                                <Form.Control type="text" name="opt12" placeholder="Option 12" onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}