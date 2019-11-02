import React, { Component } from "react";
import { Form } from "react-bootstrap";

class Input extends Component {
  state = {};
  render() {
    return (
      <div className="c-inputs col-md-12">
        <label>{this.props.label}</label>
        {this.props.type === "input" ? (
          <Form.Control />
        ) : this.props.type === "file" ? (
          <input type="file" />
        ) : (
          <textarea className="form-control" />
        )}
      </div>
    );
  }
}

export default Input;
