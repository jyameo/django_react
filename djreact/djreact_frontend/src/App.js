import React, { Component } from "react";

import { Button, Container, Row, Col } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      cur_id: 0,
      is_creating: true
    };
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
              <Button color="primary">Create a new note</Button>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <h5>List notes here....</h5>
            </Col>
            <Col xs="8">
              <p>Content editing here...</p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;