import React from "react";
import { Col, FormGroup, FormText, Input, Label } from "reactstrap";

const InputFile = ({ index, onChange }) => {
  return (
    <FormGroup row>
      <Label for={"file" + index} sm={2}>
        파일 첨부{index}
      </Label>
      <Col sm={10}>
        <Input id={"file" + index} name={"file" + index} type="file" onChange={onChange}/>
        <FormText>
          This is some placeholder block-level help text for the above input.
          It‘s a bit lighter and easily wraps to a new line.
        </FormText>
      </Col>
    </FormGroup>
  );
};

export default InputFile;
