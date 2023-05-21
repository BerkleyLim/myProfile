import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

const InputMenu1 = ({trequest}) => {
  return (
    <>
    <FormGroup row>
      <Label for="company" sm={2}>
        회사명(상호명)<span style={{color:"red"}}>(필수)</span>
      </Label>
      <Col sm={4}>
        {trequest.company}
      </Col>
      <Label for="person" sm={2}>
        담당자<span style={{color:"red"}}>(필수)</span>
      </Label>
      <Col sm={4}>
        {trequest.person}
      </Col>
    </FormGroup>
      <FormGroup row>
        <Label for="phone" sm={2}>
          연락처<span style={{color:"red"}}>(필수)</span>
        </Label>
        <Col sm={4}>
          {trequest.phone}
        </Col>
        <Label for="email" sm={2}>
          이메일<span style={{color:"red"}}>(필수)</span>
        </Label>
        <Col sm={4}>
          {trequest.email}
        </Col>
      </FormGroup>
    </>
  );
};

export default InputMenu1;
