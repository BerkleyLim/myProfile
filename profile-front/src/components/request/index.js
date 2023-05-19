import React from "react";

import "./request.scss";
import { Form, Col, FormGroup, FormText, Input, Label, Button } from "reactstrap";

const RequestIndex = () => {
  return (
    <div className="requestContainer">
      <Form>
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
            <Input id="selectObject" name="selectObject" type="selectObject">
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
        <FormGroup row>
          <Label for="file1" sm={2}>
            파일 첨부1
          </Label>
          <Col sm={10}>
            <Input id="file1" name="file1" type="file" />
            <FormText>
              This is some placeholder block-level help text for the above
              input. It‘s a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="file2" sm={2}>
            파일 첨부2
          </Label>
          <Col sm={10}>
            <Input id="file2" name="file2" type="file" />
            <FormText>
              This is some placeholder block-level help text for the above
              input. It‘s a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="file3" sm={2}>
            파일 첨부3
          </Label>
          <Col sm={10}>
            <Input id="file3" name="file3" type="file" />
            <FormText>
              This is some placeholder block-level help text for the above
              input. It‘s a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="site1" sm={2}>
            참조 사이트1
          </Label>
          <Col sm={10}>
            <Input
              id="site1"
              name="site1"
              placeholder="with a placeholder"
              type="site1"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="site2" sm={2}>
            참조 사이트2
          </Label>
          <Col sm={10}>
            <Input
              id="site2"
              name="site2"
              placeholder="with a placeholder"
              type="site2"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="site3" sm={2}>
            참조 사이트3
          </Label>
          <Col sm={10}>
            <Input
              id="site3"
              name="site3"
              placeholder="with a placeholder"
              type="site3"
            />
          </Col>
        </FormGroup>
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
