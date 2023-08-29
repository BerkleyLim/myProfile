import React from "react";
import { Col, FormGroup, FormText, Input, Label } from "reactstrap";

const InputFile = ({ index, filepath }) => {
  // const objectName = 
  const downloadFn = () => {

  }
  return (
    <FormGroup row>
      <Label for={"file" + index} sm={2}>
        파일 첨부{index}
      </Label>
      <Col sm={10}>
        <button onClick={() => downloadFn()}>{filepath}</button>
      </Col>
    </FormGroup>
  );
};

export default InputFile;
