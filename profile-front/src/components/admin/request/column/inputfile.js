import React from "react";
import { Col, FormGroup, Label } from "reactstrap";

const InputFile = ({ index, filepath, filename }) => {

  // 다운로드 기능 추가
  const downloadFn = () => {
    const download = document.createElement('a');

    download.href = filepath;
    download.setAttribute('download', filepath);
    download.setAttribute('type', 'application/json');
    download.click();
  }

  return (
    <FormGroup row>
      <Label for={"file" + index} sm={2}>
        파일 첨부{index}
      </Label>
      <Col sm={10}>
        <button onClick={() => downloadFn()}>{filename}</button>
      </Col>
    </FormGroup>
  );
};

export default InputFile;
