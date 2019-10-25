import React, { Component } from "react";
import { Col, FormGroup, Label, Input, Button } from "reactstrap";
import FormCardContainer from "../components/FormCardContainer";

export default class Help extends Component {
  render() {
    return (
      <div className="offers">
        <FormCardContainer title="Help">
          <h3>Information Desk</h3>
          <Col md={12}>
            <FormGroup>
              <Label for="exampleEmail">Phone Number</Label>
              <Input type="text" name="text" id="text" />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="exampleEmail">Email Id</Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>
          </Col>

          <h3>Help Desk</h3>
          <Col md={12}>
            <FormGroup>
              <Label for="exampleEmail">Phone Number</Label>
              <Input type="text" name="text" id="text" />
            </FormGroup>
          </Col>

          <Col md={12}>
            <Button className="btn-lg btn-block">Submit</Button>
          </Col>
        </FormCardContainer>
      </div>
    );
  }
}
