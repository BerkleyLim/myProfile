import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

const InputMenu1 = ({onChange}) => {
  return (
    <>
    <FormGroup row>
      <Label for="company" sm={2}>
        회사명(상호명)<span style={{color:"red"}}>(필수)</span>
      </Label>
      <Col sm={4}>
        <Input
          id="company"
          name="company"
          placeholder="with a placeholder"
          type="company"
          onChange={onChange}
        />
      </Col>
      <Label for="person" sm={2}>
        담당자<span style={{color:"red"}}>(필수)</span>
      </Label>
      <Col sm={4}>
        <Input
          id="person"
          name="person"
          placeholder="with a placeholder"
          type="person"
          onChange={onChange}
        />
      </Col>
    </FormGroup>
      <FormGroup row>
        <Label for="phone" sm={2}>
          연락처<span style={{color:"red"}}>(필수)</span>
        </Label>
        <Col sm={4}>
          <Input
            id="phone"
            name="phone"
            placeholder="with a placeholder"
            type="phone"
            onChange={onChange}
          />
        </Col>
        <Label for="email" sm={2}>
          이메일<span style={{color:"red"}}>(필수)</span>
        </Label>
        <Col sm={4}>
          <Input
            id="email"
            name="email"
            placeholder="with a placeholder"
            type="email"
            onChange={onChange}
          />
        </Col>
      </FormGroup>
    </>
  );
};

export default InputMenu1;
