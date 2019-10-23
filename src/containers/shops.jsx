import React, { Component } from "react";
import { Form } from "react-bootstrap";
class Shops extends Component {
  state = {};
  render() {
    return (
      <div className="shops">
        <div>
          <div className="c-inputs">
            <label>Shop name</label>
            <Form.Control />
          </div>
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
          <div className="c-inputs">
            <label>Path</label>
            <input type="file" />
          </div>
          <div className="c-inputs">
            <label>Floorplan</label>
            <input type="file" />
          </div>
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

export default Shops;
