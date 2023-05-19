import React, { useState } from "react";

import "./request.scss";
import {
  Form,
  Col,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";

import InputMenu1 from "./column/inputmenu1";
import InputFile from "./column/inputfile";
import InputSite from "./column/inputsite";

const RequestIndex = () => {
  const [company, setCompany] = useState();
  const [person, setPerson] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [title, setTitle] = useState();
  const [object, setObject] = useState();
  return (
    <div className="requestContainer">
      <Form>

        <InputMenu1
          company={company}
          person={person}
          phone={phone}
          email={email}
        />
        <FormGroup row>
          <Label for="title" sm={2}>
            의뢰 제목
          </Label>
          <Col sm={10}>
            <Input
              id="title"
              name="title"
              placeholder="with a placeholder"
              type="title"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="selectObject" sm={2}>
            의뢰 목적
          </Label>
          <Col sm={10}>
            <Input id="selectObject" name="selectObject" type="select">
              <option>업체 구인</option>
              <option>프로젝트 의뢰</option>
              <option>프로젝트 파트너 구인</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="selectContents" sm={2}>
            의뢰 내용
          </Label>
          <Col sm={10}>
            <Input id="selectContents" name="selectContents" type="textarea" />
          </Col>
        </FormGroup>
        {/* {Array(3).fill(<InputFile />)} */}
        {Array(3).fill().map((d,index) => <InputFile key={index} index={index+1} />)}
        {Array(3).fill().map((d,index) => <InputSite key={index} index={index+1}/>)}
        {/* <FormGroup row tag="fieldset">
          <legend className="col-form-label col-sm-2">Radio Buttons</legend>
          <Col sm={10}>
            <FormGroup check>
              <Input name="radio2" type="radio" />{" "}
              <Label check>
                Option one is this and that—be sure to include why it‘s great
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio2" type="radio" />{" "}
              <Label check>
                Option two can be something else and selecting it will deselect
                option one
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Input disabled name="radio2" type="radio" />{" "}
              <Label check>Option three is disabled</Label>
            </FormGroup>
          </Col>
        </FormGroup> */}
        {/* <FormGroup row>
          <Label for="checkbox2" sm={2}>
            Checkbox
          </Label>
          <Col
            sm={{
              size: 10,
            }}
          >
            <FormGroup check>
              <Input id="checkbox2" type="checkbox" />{" "}
              <Label check>Check me out</Label>
            </FormGroup>
          </Col>
        </FormGroup> */}
        <FormGroup check row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default RequestIndex;
