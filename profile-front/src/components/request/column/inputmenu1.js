import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

const InputMenu1 = () => {
  return (
    <>
    <FormGroup row>
      <Label for="company" sm={2}>
        회사명(상호명)
      </Label>
      <Col sm={4}>
        <Input
          id="company"
          name="company"
          placeholder="with a placeholder"
          type="company"
        />
      </Col>
      <Label for="person" sm={2}>
        담당자
      </Label>
      <Col sm={4}>
        <Input
          id="person"
          name="person"
          placeholder="with a placeholder"
          type="person"
        />
      </Col>
    </FormGroup>
      <FormGroup row>
        <Label for="phone" sm={2}>
          연락처
        </Label>
        <Col sm={4}>
          <Input
            id="phone"
            name="phone"
            placeholder="with a placeholder"
            type="phone"
          />
        </Col>
        <Label for="email" sm={2}>
          이메일
        </Label>
        <Col sm={4}>
          <Input
            id="email"
            name="email"
            placeholder="with a placeholder"
            type="email"
          />
        </Col>
      </FormGroup>
    </>
  );
};

export default InputMenu1;
