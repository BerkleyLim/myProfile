import React, { useState } from "react";

// import "./request.scss";
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

const AdminRequestForm = ({trequest}) => {
  return (
    <Form style={{padding:"50px 50px 50px 50px"}}>
    <InputMenu1 trequest={trequest}/>

    <FormGroup row>
      <Label for="title" sm={2}>
        의뢰 제목<span style={{color:"red"}}>(필수)</span>
      </Label>
      <Col sm={10}>
        {trequest.title}
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="object" sm={2}>
        의뢰 목적<span style={{color:"red"}}>(필수)</span>
      </Label>
      <Col sm={10}>
        {trequest.object}
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="contents" sm={2}>
        의뢰 내용<span style={{color:"red"}}>(필수)</span>
      </Label>
      <Col sm={10}>
        {trequest.contents}
      </Col>
    </FormGroup>
    <InputFile index={1} filepath={trequest.filepath1} />
    <InputFile index={2} filepath={trequest.filepath2} />
    <InputFile index={3} filepath={trequest.filepath3} />
    <InputSite index={1} site={trequest.site1} />
    <InputSite index={2} site={trequest.site2} />
    <InputSite index={3} site={trequest.site3} />
    <FormGroup check row>
      <Col
        sm={{
          offset: 2,
          size: 10,
        }}
      >
      </Col>
    </FormGroup>
  </Form>
  );
};

export default AdminRequestForm;
