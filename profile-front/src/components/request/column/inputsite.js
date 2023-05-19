import React from "react";
import { Col, FormGroup, FormText, Input, Label } from "reactstrap";

const InputSite = ({ index }) => {
  return (
    <FormGroup row>
      <Label for={"site" + (index)} sm={2}>
        참조 사이트{(index)}
      </Label>
      <Col sm={10}>
        <Input
          id={"site" + (index)}
          name={"site" + (index)}
          placeholder="with a placeholder"
          type={"site" + (index)}
        />
      </Col>
    </FormGroup>
  );
};

export default InputSite;
