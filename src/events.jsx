import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Input from "./components/input";
class Events extends Component {
  state = {};
  render() {
    return (
      <div className="events">
        <div>
          <h3>Events Information</h3>
          <Input type="input" label="Floor" />
          <Input type="input" label="Category" />
          <Input label="Description" />

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
