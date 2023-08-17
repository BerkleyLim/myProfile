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

import URI from "../../util/URI"

const RequestIndex = () => {
  const [trequest, setTRequest] = useState();

  const onChange = (e) => {
    const { name, value } = e.target;
    setTRequest({
      ...trequest,
      [name]: value,
    });
  };
  console.log(trequest);

  // 파일 관련 정보 업로드
  const fileInput = (index, file) => {
    try {
      if (index === 1) {
        setTRequest({
          ...trequest,
          file1: file,
        });
      } else if (index === 2) {
        setTRequest({
          ...trequest,
          file2: file,
        });
      } else if (index === 3) {
        setTRequest({
          ...trequest,
          file3: file,
        });
      } else {
        console.error("파일 업로드 에러");
      }
    } catch (e) {
      console.log("파일 업로드 취소")
    }
  }

  // console.log(trequest)
  console.log(trequest?.file1?.fileInfo?.file)
  const createTRequest = () => {
    if (!!!trequest?.company) {
      alert("회사명 입력")
    } else if (!!!trequest?.person) {
      alert("담당자명 입력")
    } else if (!!!trequest?.phone) {
      alert ("연락처 입력")
    } else if (!!!trequest?.email) {
      alert ("이메일 입력")
    } else if (!!!trequest?.title) {
      alert ("의뢰 제목 입력")
    } else if (!!!trequest?.object) {
      alert ("의뢰 목적 입력") 
    } else if (!!!trequest?.contents) {
      alert ("의뢰 내용 입력")
    } else {
      URI.post(process.env.REACT_APP_API_ROOT + "/api/request/create", trequest)
        .then((response) => {
          alert("전송 완료")
        })
        .catch((e) => {
          console.error(e);
        })
    }
  }

  return (
    <div className="requestContainer">
      <Form>
        <InputMenu1 onChange={onChange}/>

        <FormGroup row>
          <Label for="title" sm={2}>
            의뢰 제목<span style={{color:"red"}}>(필수)</span>
          </Label>
          <Col sm={10}>
            <Input
              id="title"
              name="title"
              placeholder="with a placeholder"
              type="title"
              onChange={onChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="object" sm={2}>
            의뢰 목적<span style={{color:"red"}}>(필수)</span>
          </Label>
          <Col sm={10}>
            <Input id="object" name="object" type="select" onChange={onChange}>
              <option hidden>선택</option>
              <option>업체 구인</option>
              <option>프로젝트 의뢰</option>
              <option>프로젝트 파트너 구인</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="contents" sm={2}>
            의뢰 내용<span style={{color:"red"}}>(필수)</span>
          </Label>
          <Col sm={10}>
            <Input id="contents" name="contents" type="textarea" onChange={onChange}/>
          </Col>
        </FormGroup>
        <h5>파일 첨부 해결 완료!, 현재 파일 저장 관련된 DB는 아직 구현 중</h5>
        {Array(3).fill().map((d,index) => <InputFile key={index} index={index+1} fileInput={fileInput} />)}
        {Array(3).fill().map((d,index) => <InputSite key={index} index={index+1} onChange={onChange} />)}
        <FormGroup check row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button onClick={() => createTRequest()}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default RequestIndex;
