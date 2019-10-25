import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Input from "../components/input";
class Shops extends Component {
  state = {};
  render() {
    return (
      <div className="shops">
        <div>
          <Input type="input" label="Shop name" />
          <Input type="input" label="Floor" />
          <Input type="input" label="Category" />
          <Input label="Description" />
          <Input type="file" label="Path" />
          <Input type="file" label="Floorplan" />
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
