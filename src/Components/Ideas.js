import React, { Component } from 'react'
import { Button, Container, Row, Col, Image } from 'react-bootstrap';

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
          <div>
            {this.state.notes.map((note, index) => (
                <div className="journal-entry" key={index}>
                  {this.state.noteEditing === null ||
                  this.state.noteEditing !== index ? (
                    <div className="note">
                      <div className="note-content">
                        <div className="note-text">{note}</div>
                        <Button onClick={() => this.setNoteEditing(index)} variant="success">Edit</Button>
                      </div>
                      <Button onClick={() =>this.deleteNote(index)} variant="warning">Delete</Button>
                    </div>
                  ) : (
                    <div className="note">
                      <div className="note-content">
                        <input
                          type="text"
                          value={this.state.currentEdit}
                          onChange={event => this.editNote(event)}
                        />
                        <Button onClick={() => this.submitEdit(index)} variant="success">Done</Button>
                      </div>
                      <Button onClick={() =>this.deleteNote(index)} variant="warning">Delete</Button>
                    </div>
                  )}
                </div>
              ))
            }
          </div>
        </div>
      </Row>
      </Container>
    );
  }  
}
