import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

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
        </>
    )
}