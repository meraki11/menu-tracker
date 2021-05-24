import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class DateForm extends Component {
    state = {
        dates: [],
        currentDate: "",
        date:'',
        breakfast: '',
        lunch:'',
        dinner:'',
        dateEditing: null,
        currentEdit: ""
    };
        
    componentDidMount() {
        const json=localStorage.getItem('dates');
        const dates = JSON.parse(json);
        if (dates) {
            this.setState(() => ({ dates }));
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.dates.length !== this.state.dates.length) {
            const json = JSON.stringify(this.state.dates);
            localStorage.setItem("dates", json);
        }
        this.state.dates.forEach((dates, index) => {
            if (prevState.dates[index] !== dates) {
                const json = JSON.stringify(this.state.dates);
                localStorage.setItem('dates', json);
            }
        })
    }

    addDate = () => {
        let dates = [...this.state.dates];
        dates.push(this.state.currentDate);
        this.setState({ dates, currentDate: ""});
    };

    deleteDate = indexToDelete => {
        let dates = [...this.state.dates].filter(
          (date, index) => index !== indexToDelete
        );
        this.setState({ dates });
    };

    setDateEditing = index => {
        this.setState({ dateEditing: index, currentEdit: this.state.dates[index]});
    };

    editDate = event => {
        this.setState({ currentEdit: event.target.value });
    }

    submitEdit = index => {
        let dates = [...this.state.dates];
        dates[index] = this.state.currentEdit;
        this.setState({ dates, dateEditing: null });
    };

    
    render() {

        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Meal Idea: </Form.Label>
                        <Form.Control
                            onChange={event => this.setState({ currentDate: event.target.value})}
                            value={this.state.date}
                            type="date"
                            name="date"
                            placeholder="Enter Date"
                        />
                        <Form.Control
                            onChange={event => this.setState({ currentDate: event.target.value})}
                            value={this.state.breakfast}
                            type="text"
                            name="breakfast"
                            placeholder="Enter Breakfast"
                        />
                        <Form.Control
                            onChange={event => this.setState({ currentDate: event.target.value})}
                            value={this.state.lunch}
                            type="text"
                            name="lunch"
                            placeholder="Enter Lunch"
                        />
                        <Form.Control
                            onChange={event => this.setState({ currentDate: event.target.value})}
                            value={this.state.dinner}
                            type="text"
                            name="dinner"
                            placeholder="Enter Dinner"
                        />
                        <Button onClick={this.addDate} variant="secondary">Add Date</Button>
                    </Form.Group>
                </Form>
                <div>
                    {this.state.dates.map((date, breakfast, lunch, dinner, index) => (
                        <div className="dates" key={index}>
                            {this.state.dateEditing === null ||
                            this.state.dateEditing !== index ? (
                                <div className="date">
                                    <div className="date-content">
                                        <div className="date">{date}</div>
                                        <div className="breakfast">{breakfast}</div>
                                        <div className="lunch">{lunch}</div>
                                        <div className="dinner">{dinner}</div>
                                        <button onClick={() => this.setDateEditing(index)}>Edit</button>
                                    </div>
                                    <button onClick={() => this.deleteDate(index)}>Delete</button>
                                </div>
                            ) : (
                               <div className="date">
                                    <div className="date-content">
                                       <input
                                        type="text"
                                        value={this.state.currentEdit}
                                        onChange={event => this.editDate(event)}
                                        placeholder="date"
                                        />
                                        <br/>
                                        <input
                                            type="text"
                                            value={this.state.currentEdit}
                                            onChange={event => this.editDate(event)}
                                            placeholder="breakfast"
                                        />
                                        <br/>
                                        <input
                                            type="text"
                                            value={this.state.currentEdit}
                                            onChange={event => this.editDate(event)}
                                            placeholder="lunch"
                                        />
                                        <br/>
                                        <input
                                            type="text"
                                            value={this.state.currentEdit}
                                            onChange={event => this.editDate(event)}
                                            placeholder="dinner"
                                        />
                                        
                                        <button onClick={() => this.submitEdit(index)}>Done</button>
                                    </div>
                                    <button onClick={() => this.deleteDate(index)}>Delete</button>
                                </div> 
                            )}
                        </div>                    
                    ))}
                </div>
            </div>
        );
    }

}