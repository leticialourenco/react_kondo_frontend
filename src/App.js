import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          fieldA: '',
          fieldB: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }

    handleInputChange = (event, field) => {
        let inputValue = event.target.value;

        this.setState((prevState, props) => {
            if(field === "fieldA") {
                return { fieldA: inputValue }
            } else {
                return { fieldB: inputValue }
            }
        });
    }

    handleSubmission = event => {
        event.preventDefault();
        this.setState((prevState, props) => {
            return { fieldA: '', fieldB: '' }
        });
    }

  render() {
      const { fieldA, fieldB } = this.state;

      return (
      <Container fluid>
          <Container id="content">
              <Row>
                  <Col md={{ span: 6, offset: 3 }} className="terminal-window">
                      <div className="header">
                          <div className="button green">&nbsp;</div>
                          <div className="button yellow">&nbsp;</div>
                          <div className="button red">&nbsp;</div>
                      </div>
                      <div className="terminal">
                          <div className="title">
                              <p className="highlight">
                                  Welcome to Kondo Playground
                              </p>
                              <p className="content">

                                  enter two sentences and we'll run it through <br/>
                                  &#60;kondo-api&#62; so you can see the magic happen
                              </p>
                          </div>
                          <Form>
                              <Form.Control
                                  type="text"
                                  placeholder="&#36; enter a sentence"
                                  value={ fieldA }
                                  onChange={ event => this.handleInputChange(event, "fieldA") }
                                  autoCapitalize="off"
                                  autoComplete="off"
                                  spellCheck="false"
                                  autoCorrect="off"
                              />
                              <Form.Control
                                  type="text"
                                  placeholder="&#36; enter another sentence"
                                  value={ fieldB }
                                  onChange={ event => this.handleInputChange(event, "fieldB") }
                                  autoCapitalize="off"
                                  autoComplete="off"
                                  spellCheck="false"
                                  autoCorrect="off"
                              />
                              <Button
                                  block
                                  variant="outline-light"
                                  onClick={ this.handleSubmission }
                              >&#36; kondo-search run</Button>
                          </Form>
                          <div className="response">
                              <code>
                                  &#123;
                                  "sentence_meta"&#58; &#123;<br/>
                                  "angle"&#58; 42.93550485861645,<br/>
                                  "levenshtein_distance"&#58; 8.0,<br/>
                                  "same_bucket"&#58; true<br/>
                                  &#125;
                                  &#125;
                              </code>
                          </div>
                      </div>
                  </Col>
              </Row>
          </Container>
      </Container>
    );
  }
}

export default App;
