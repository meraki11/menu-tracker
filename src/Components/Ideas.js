import React, { Component } from 'react'
import { Button, Container, Col, Row, Image } from 'react-bootstrap';
import CalendarView from './CalendarView';

export default class Ideas extends Component {
  state = {
    notes: [],
    currentNote: '',
    noteEditing: null,
    currentEdit: ''
  };

  componentDidMount() {
    const json = localStorage.getItem('notes');
    const notes = JSON.parse(json);
    if (notes) {
      this.setState(() => ({ notes }));
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes.length !== this.state.notes.length) {
      const json = JSON.stringify(this.state.notes);
      localStorage.setItem("notes", json);
    }
    this.state.notes.forEach((note, index) => {
      if (prevState.notes[index] !== note) {
        const json= JSON.stringify(this.state.notes);
        localStorage.setItem("notes", json);
      }
    })
  }

  addNote = () => {
    let notes = [...this.state.notes];
    notes.push(this.state.currentNote);
    this.setState({ notes, currentNote: ""});
  };

  deleteNote = indexToDelete => {
    let notes = [...this.state.notes].filter(
      (note, index) => index !== indexToDelete
    );
    this.setState({ notes });
  };

  //called when edit Button is clicked beside note
  setNoteEditing = index => {
    this.setState({ noteEditing: index, currentEdit: this.state.notes[index] });
  };

  // data binding between input boxes and currentEdit var
  editNote = event => {
    this.setState({ currentEdit: event.target.value });
  };

  //fires when user clicks submit after completing note edit, 
  //copies notes array, replace edited note, update notes array, reset noteEditing var
  submitEdit = index => {
    let notes = [...this.state.notes];
    notes[index] = this.state.currentEdit;
    this.setState({ notes, noteEditing: null });
  };

  render() {
    return (
      <Container fluid style={{background:"#886839"}}>
        <Row>
          <Col lg={3}>
            <div className="journal-form">
              <h1>Food Journal</h1>
              <textarea 
                onChange={event => this.setState({ currentNote: event.target.value })}
                value={this.state.currentNote}
                className="input" 
                placeholder="Notes" 
              />
              <br/>
              <Button className="Button" onClick={this.addNote} variant="secondary">Submit</Button>
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={5} className="quote-image"><Image width={600} src="https://i.postimg.cc/8cyqNL8H/this-magical-marvelous-food-on-resize.jpg" 
            alt="Quote 'This magical, marvelous food on our plate, this sustenance we absorb, has a story to tell. It has a journey. by Joel Salatin' 
            over photo of group meal at a dining table, Photo by Jay Wennington on Unsplash rounded"/></Col>
          <Col lg={3} className="calendar"><CalendarView /></Col>
        </Row>
        <Row>
          <div className="journal-layout">
            {this.state.notes.map((note, index) => (
                <div className="journal-entry" key={index}>
                  {this.state.noteEditing === null ||
                  this.state.noteEditing !== index ? (
                    <div className="note">
                      <div className="note-content">
                        <div className="note-text">{note}</div>
                        <Button onClick={() => this.setNoteEditing(index)} className="edit" variant="success">Edit</Button>
                      </div>
                      <br/>
                      <Button onClick={() =>this.deleteNote(index)} className="delete" variant="warning">Delete</Button>
                    </div>
                  ) : (
                    <div className="note">
                      <div className="note-content">
                        <textarea
                          value={this.state.currentEdit}
                          onChange={event => this.editNote(event)}
                        />
                        <Button onClick={() => this.submitEdit(index)} className="edit" variant="success">Done</Button>
                      </div>
                      <br/>
                      <Button onClick={() =>this.deleteNote(index)} className="delete" variant="warning">Delete</Button>
                    </div>
                  )}
                </div>
              ))
            }
          </div>
        </Row>
      </Container>
    );
  }  
}
