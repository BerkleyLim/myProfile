import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { VscClose } from "react-icons/vsc";
import { Navigate } from "react-router-dom";
import { Button, Col, FormGroup, FormText, Input, Label } from "reactstrap";

import styled from "styled-components";

// 리액트 파일 관련 참조 =
// https://velog.io/@st4889/React-%EC%B2%A8%EB%B6%80%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C-%EB%8B%A4%EC%9A%B4%EB%B0%9B%EA%B8%B0-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0api%EB%A1%9C-%EC%A0%84%EC%86%A1
// https://hojung-testbench.tistory.com/entry/React-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84
// https://velog.io/@chaeri93/React-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C-%EB%B0%8F-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-%EB%B2%84%ED%8A%BC%EC%9C%BC%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
const InputFile = ({ index, fileInput}) => {
  const fileInputRef = React.useRef(null);
  // const [fileInfo, setFileInfo] = useState(null);
  // const [fileReader, setFileReader] = useState(null);
  const [file, setFile] = useState(null);

  // state 값 바뀌면 useEffect 변환 시키기
  const [isChangeState, setIsChangeState] = useState(true);

  const uploadOnChange = (e) => {
    try {
      // setFileInfo(e.target.files[0]);
      const render = new FileReader();
      render.readAsDataURL(e.target.files[0]);
      render.onloadend = () => {
        const base64data = render.result;
        // setFileReader(base64data);
        setFile({
          ...file,
          name: e.target.files[0].name,
          size: e.target.files[0].size,
          lastModified: e.target.files[0].lastModified,
          type: e.target.files[0].type,
          webkitRelativePath: e.target.files[0].webkitRelativePath,
          fileReader: base64data,
        })

        setIsChangeState(!isChangeState);
      }
    } catch (e) {
      console.log("파일 업로드 취소")
      fileInput(index, null);
    }
  };

  useEffect(() => {
    fileInput(index, file);
  },[isChangeState])

  

  // console.log(fileInfo);
  // console.log(file);
  return (
    <FormGroup row>
      <Label for={"file" + index} sm={2}>
        파일 첨부{index}
      </Label>
      <Col sm={10}>
      {/* <img src={image} /> */}
        <Input
          name={"file" + index}
          type="file"
          onChange={(e) => uploadOnChange(e)}
          ref={fileInputRef}
          // multiple="multiple"
        />
        <FormText>
          This is some placeholder block-level help text for the above input.
          It‘s a bit lighter and easily wraps to a new line.
        </FormText>
      </Col>
    </FormGroup>
  );
};

export default InputFile;

export const DivImg = styled.div`
  justify-content: space-between;
  display: flex;
  border-radius: 0.3rem;
  border: 0.01rem solid #efeff1;
  display: flex;
  padding: 0.1rem;
  background-color: #efeff1;
  align-items: center;
  font-weight: 400;
  button {
    margin-left: 0.05rem;
    color: gray;
    background-color: white;
    border-radius: 0.5rem;
    height: 0.3rem;
  }
`;
