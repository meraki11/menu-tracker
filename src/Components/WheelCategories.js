import React, { Component } from 'react'
import { Form, ListGroup, Container, Row, Col } from 'react-bootstrap';

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
                        <Form className="wheel-categories">
                            <Form.Group inline>
                                <Form.Label >Option 1: </Form.Label>
                                <Form.Control type="text" name="opt1" placeholder="Option 1" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Option 2: </Form.Label>    
                                <Form.Control type="text" name="opt2" placeholder="Option 2" onChange={this.handleChange} />
                            </Form.Group> 
                            <Form.Group>
                                <Form.Label>Option 3: </Form.Label>     
                                <Form.Control type="text" name="opt3" placeholder="Option 3" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Option 4: </Form.Label>      
                                <Form.Control type="text" name="opt4" placeholder="Option 4" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Option 5: </Form.Label>     
                                <Form.Control type="text" name="opt5" placeholder="Option 5" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Option 6: </Form.Label> 
                                <Form.Control type="text" name="opt6" placeholder="Option 6" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>   
                                <Form.Label>Option 7: </Form.Label>   
                                <Form.Control type="text" name="opt7" placeholder="Option 7" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Option 8: </Form.Label>          
                                <Form.Control type="text" name="opt8" placeholder="Option 8" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Option 9: </Form.Label>           
                                <Form.Control type="text" name="opt9" placeholder="Option 9" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Option 10: </Form.Label>      
                                <Form.Control type="text" name="opt10" placeholder="Option 10" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Option 11: </Form.Label>     
                                <Form.Control type="text" name="opt11" placeholder="Option 11" onChange={this.handleChange} />
                            </Form.Group> 
                            <Form.Group>
                                <Form.Label>Option 12: </Form.Label>    
                                <Form.Control type="text" name="opt12" placeholder="Option 12" onChange={this.handleChange} />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col lg={5}>
                        <ListGroup className="list-items">
                            <ListGroup.Item>1: {this.state.opt1}</ListGroup.Item>
                            <ListGroup.Item>2: {this.state.opt2}</ListGroup.Item>
                            <ListGroup.Item>3: {this.state.opt3}</ListGroup.Item>
                            <ListGroup.Item>4: {this.state.opt4}</ListGroup.Item>
                            <ListGroup.Item>5: {this.state.opt5}</ListGroup.Item>
                            <ListGroup.Item>6: {this.state.opt6}</ListGroup.Item>
                            <ListGroup.Item>7: {this.state.opt7}</ListGroup.Item>
                            <ListGroup.Item>8: {this.state.opt8}</ListGroup.Item>
                            <ListGroup.Item>9: {this.state.opt9}</ListGroup.Item>
                            <ListGroup.Item>10: {this.state.opt10}</ListGroup.Item>
                            <ListGroup.Item>11: {this.state.opt11}</ListGroup.Item>
                            <ListGroup.Item>12: {this.state.opt12}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}