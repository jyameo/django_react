import React, { Component } from "react";

import { Button, Container, Row, Col } from "reactstrap";

import ListNotes from "./components/ListNotes";

var static_notes = [
  {
    id: 1,
    title: "firstREACT",
    content: "This is the first REACT note"
  },
  {
    id: 2,
    title: "secondREACT",
    content: "This is the second REACT note"
  },
  {
    id: 3,
    title: "thirdREACT",
    content: "This is the third REACT note"
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: static_notes,
      current_id: 0,
      is_creating: true
    };

    this.handleClickNoteEvent = this.handleClickNoteEvent.bind(this);
    this.handleAddNoteEvent = this.handleAddNoteEvent.bind(this);
  }

  handleClickNoteEvent(id) {
    this.setState(prevState => {
      return { is_creating: false, current_id: id };
    });
  }

  handleAddNoteEvent() {
    this.setState(prevState => {
      return { is_creating: true };
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs="10">
              <h2>Realtime notes</h2>
            </Col>
            <Col xs="2">
              <Button color="primary" onClick={this.handleAddNoteEvent}>
                Create a new note
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <ListNotes
                notes={this.state.notes}
                eventHandler={id => this.handleClickNoteEvent(id)}
              />
            </Col>
            <Col xs="8">
              <p>Content editing here...</p>
              {this.state.is_creating
                ? "Creating now..."
                : `Editing note with id ${this.state.current_id}`}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
