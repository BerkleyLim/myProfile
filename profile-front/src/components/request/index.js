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
  // console.log(trequest);

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
  // console.log(trequest?.file1?.fileInfo?.file)
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
      <h1>의뢰 양식</h1>
      <div>다음은 아래와 같이 의뢰 목적을 입력하여 주시기 바랍니다.</div>
      <div>현재, 개발 외주 의뢰와 사이드 프로젝트 참여 제안만 받습니다.</div>
      <div>의뢰 요청 시 아래와 같이 자료를 입력 해 주시고, 사이드 프로젝트 구인 및 프로젝트 팀원 문의 목적일 경우 회사명은 프로젝트 팀명 or 프로젝트 제목을 입력해주세요.</div>
      <div>파일 첨부는 요청 설계서와 자신 or 업체에서 처한 환경이 무엇이며 화면 설계서 작성하여 보내주시기 바랍니다. (첨부 하지 않을 시 의뢰 거절이 있을 수 있습니다.)</div>
      <div>또한 업체에서 외주 의뢰 시 사업자 등록증 필히 첨부하여 보내주시기 바랍니다.</div>
      <br/><br/>
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
              <option>외주 의뢰</option>
              <option>사이드 프로젝트 구인</option>
              <option>프로젝트 팀원 의뢰</option>
              <option>구인 요청</option>
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
