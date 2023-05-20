import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

const InputSite = ({ index, onChange }) => {
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
          onChange={onChange}
        />
      </Col>
    </FormGroup>
  );
};

export default InputSite;
