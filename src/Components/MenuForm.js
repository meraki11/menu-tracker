import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

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
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Meal Idea: </Form.Label>
                        <Form.Control
                            onChange={event => this.setState({ currentMeal: event.target.value})}
                            value={this.state.currentMeal}
                            type="textarea"
                            rows={"5"}
                            name="mealName"
                            placeholder="Meal Name"
                        />
                        <Button onClick={this.addMeal} variant="secondary">Add Meal</Button>
                    </Form.Group>
                </Form>
                <div>
                    {this.state.meals.map((meal, index) => (
                        <div className="meals" key={index}>
                            {this.state.mealEditing === null ||
                            this.state.mealEditing !== index ? (
                                <div className="meal">
                                    <div className="meal-content">
                                        <div className="meal-text">{meal}</div>
                                        <button onClick={() => this.setMealEditing(index)}>Edit</button>
                                    </div>
                                    <button onClick={() => this.deleteMeal(index)}>Delete</button>
                                </div>
                            ) : (
                               <div className="meal">
                                    <div className="meal-content">
                                       <input
                                        type="text"
                                        value={this.state.currentEdit}
                                        onChange={event => this.editMeal(event)}
                                        />
                                        <button onClick={() => this.submitEdit(index)}>Done</button>
                                    </div>
                                    <button onClick={() => this.deleteMeal(index)}>Delete</button>
                                </div> 
                            )}
                        </div>                    
                    ))}
                </div>
            </div>
        );
    }

}