import React, { Component } from "react";
import { Form } from "react-bootstrap";
class Events extends Component {
  state = {};
  render() {
    return (
      <div className="events">
        <div>
          <h3>Events Information</h3>
          <div className="c-inputs">
            <label>Floor</label>
            <Form.Control />
          </div>
          <div className="c-inputs">
            <label>Category</label>
            <Form.Control />
          </div>
          <div className="c-inputs">
            <label>Description</label>
            <textarea className="form-control" />
          </div>
          <button className="submit">Submit</button>
        </div>
        <div className="shop-logo">
          <div>
            <div>+</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
