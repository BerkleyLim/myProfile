import React from "react";
import { Col, FormGroup, FormText, Input, Label } from "reactstrap";

const InputFile = ({ index, file }) => {
  // const objectName = 
  return (
    <FormGroup row>
      <Label for={"file" + index} sm={2}>
        파일 첨부{index}
      </Label>
      <Col sm={10}>
        {file}
      </Col>
    </FormGroup>
  );
};

export default InputFile;
