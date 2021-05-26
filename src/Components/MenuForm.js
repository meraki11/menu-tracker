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
                    <Col lg={4}>
                        <Row>
                            <Form className="meal-form">
                                <Form.Group>
                                    <Form.Label>Meal Idea: </Form.Label>
                                    <Form.Control
                                        onChange={event => this.setState({ currentMeal: event.target.value})}
                                        value={this.state.currentMeal}
                                        as="textarea"
                                        rows={5}
                                        name="mealName"
                                        placeholder="Meal Details Here"
                                    />
                                    <Button onClick={this.addMeal} variant="secondary" block>Add Meal</Button>
                                </Form.Group>
                            </Form>
                        </Row>
                        <br />
                        <Row className="meal-quote">
                            <Image width={300} src="https://i.postimg.cc/JhvjWZX3/this-is-my-invariable-advice.jpg" rounded
                            alt="Quote 'This is my invariable advice to people: learn how to cook- tyr new recipes, 
                            learn from your mistakes, be fearless, and above all have fun! by Julia Child' 
                            over image of pots and pans with spaghetti and sauce raw ingredients on cyan background, 
                            Photo by Icons8 Team on Unsplash"/>
                        </Row>
                    </Col>
                    <Col lg={8} className="meals-layout">
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
            </Container>
        );
    }

}