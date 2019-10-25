import React from "react";
import { Col, FormGroup, Label, Input, Button } from "reactstrap";

import FormCardContainer from "../components/FormCardContainer";

function Offers() {
  return (
    <FormCardContainer title="Offers">
      <Col md={12}>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="text" name="text" id="text" />
        </FormGroup>
      </Col>
      <Col md={12}>
        <FormGroup>
          <Label for="exampleEmail">Description</Label>
          <Input type="textarea" name="text" id="text" />
        </FormGroup>
      </Col>
      <Col md={12}>
        <FormGroup>
          <Label for="exampleEmail">Date</Label>
          <Input type="date" name="text" id="text" />
        </FormGroup>
      </Col>
      <Col md={12}>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
      <Col md={12}>
        <Button className="btn-lg btn-block">Submit</Button>
      </Col>
    </FormCardContainer>
  );
}

export default Offers;
