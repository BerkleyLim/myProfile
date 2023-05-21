import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

const InputSite = ({ index, site }) => {
  return (
    <FormGroup row>
      <Label for={"site" + (index)} sm={2}>
        참조 사이트{(index)}
      </Label>
      <Col sm={10}>
        {site}
      </Col>
    </FormGroup>
  );
};

export default InputSite;
