import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import ListGroup from 'react-bootstrap/ListGroup';



export default function CalendarView(date) {
    console.log(date)
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
    }  
    
    console.log(dateState)
    
    return (
        <>
            <Calendar
                value={dateState}
                onChange={changeDate}
            />
            <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>

            <h2>Menu Ideas</h2>
            <ListGroup>
                <ListGroup.Item>Date: {moment(dateState).format('MMMM Do YYYY')} </ListGroup.Item>
                <ListGroup.Item>Breakfast:  </ListGroup.Item>
                <ListGroup.Item>Lunch: </ListGroup.Item>
                <ListGroup.Item>Dinner:  </ListGroup.Item>
            </ListGroup>
        </>


    )
}