import React, { Component } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';

export default class MenuForm extends Component {
    state = {
        meals: [],
        currentMeal: "",
        mealEditing: null,
        currentEdit: ''
    };
        
    componentDidMount() {
        const json=localStorage.getItem('meals');
        const meals = JSON.parse(json);
        if (meals) {
            this.setState(() => ({ meals }));
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.meals.length !== this.state.meals.length) {
            const json = JSON.stringify(this.state.meals);
            localStorage.setItem("meals", json);
        }
        this.state.meals.forEach((meals, index) => {
            if (prevState.meals[index] !== meals) {
                const json = JSON.stringify(this.state.meals);
                localStorage.setItem('meals', json);
            }
        })
    }
    
    addMeal = () => {
        let meals = [...this.state.meals];
        meals.push(this.state.currentMeal);
        this.setState({ meals, currentMeal: ""});
    };

    deleteMeal = indexToDelete => {
        let meals = [...this.state.meals].filter(
          (meal, index) => index !== indexToDelete
        );
        this.setState({ meals });
    };

    setMealEditing = index => {
        this.setState({ mealEditing: index, currentEdit: this.state.meals[index]});
    };

    editMeal = event => {
        this.setState({ currentEdit: event.target.value });
    }

    submitEdit = index => {
        let meals = [...this.state.meals];
        meals[index] = this.state.currentEdit;
        this.setState({ meals, mealEditing: null });
    };
    
    render() {
        return (
            <Container fluid style={{background:"#E4B455"}}>
                
                <br/>
                <Row>
                    <Col lg={3}>
                        <Form className="meal-form">
                            <Form.Group>
                                <Form.Label>Meal Idea: </Form.Label>
                                <Form.Control
                                    onChange={event => this.setState({ currentMeal: event.target.value})}
                                    value={this.state.currentMeal}
                                    as="textarea"
                                    rows={10}
                                    name="mealName"
                                    placeholder="Meal Details Here"
                                />
                                <Button onClick={this.addMeal} variant="secondary" block>Add Meal</Button>
                            </Form.Group>
                        </Form>
                        <br />
                    </Col>
                    <Col lg={9} className="meals-layout">
                        {this.state.meals.map((meal, index) => (
                            <div className="meals" key={index}>
                                {this.state.mealEditing === null ||
                                this.state.mealEditing !== index ? (
                                    <div className="meal">
                                        <div className="meal-content">
                                            <div className="meal-text">{meal}</div>
                                            <Button className="edit" variant="success" 
                                                onClick={() => this.setMealEditing(index)}>Edit</Button>
                                        </div>
                                        <br/>
                                        <Button className="delete" variant="warning"
                                            onClick={() => this.deleteMeal(index)}>Delete</Button>
                                    </div>
                                ) : (
                                    <form className="meal">
                                            <div className="meal-content">
                                                <textarea
                                                    value={this.state.currentEdit}
                                                    onChange={event => this.editMeal(event)}
                                                />
                                                <Button className="edit" variant="success" 
                                                    onClick={() => this.submitEdit(index)}>Done
                                                </Button>
                                            </div>
                                            <br/>
                                            <Button className="delete" variant="warning"
                                                onClick={() => this.deleteMeal(index)}>Delete
                                            </Button>
                                    </form> 
                                )}
                            </div>                    
                        ))}
                    </Col>
                </Row>
                <Row className="meal-bottomImgs">
                    <Col lg={1}></Col>
                    <Col lg={2}><Image width={150} height={150} src="https://i.postimg.cc/Kcf4HNyn/luke-michael-1c-WZgn-Bh-ZRs-unsplash200.png" by Luke Michael on Unsplash roundedCircle /></Col>
                    <Col lg={2}><Image width={150} height={150} src="https://i.postimg.cc/HnRHXjfk/likemeat-Cb-NAux-SZTFo-unsplash.jpg" rounded Photo by LikeMeat on Unsplash/></Col>
                    <Col lg={2}><Image width={150} height={150} src="https://i.postimg.cc/T3d4dTyy/brooke-lark-oaz0rays-ASk-unsplash.jpg" Photo by Brooke Lark on Unsplash roundedCircle/></Col>
                    <Col lg={2}><Image width={150} height={150} src="https://i.postimg.cc/vTWGsG4q/alison-marras-4zm5e0-Zg-Yj-E-unsplash.jpg" rounded Photo by Alison Marras on Unsplash/></Col>
                    <Col lg={2}><Image width={150} height={150} src="https://i.postimg.cc/P5FbZHqF/nica-cn-Hl-Wz-U-v-Ldf-U-unsplash.jpg" roundedCircle Photo by Nica Cn on Unsplash/></Col>
                    <Col lg={1}></Col>
                </Row>
                
            </Container>
        );
    }

}