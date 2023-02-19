import React, { useEffect, useState } from "react";
import "./introduction.css";
import IntroductionService from "../../service/IntroductionService";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IntroductionFormComponent from "./IntroductionFormComponent";

export default function IntroductionComponent({ isLogin }) {
  const [introductions, setIntroductions] = useState([]);
  const [inputs, setInputs] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    IntroductionService.getIntroduction().then((res) => {
      let response = res.data;
      setIntroductions(response);
    });
  }, []);
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      // [e.target.name]: e.target.value, // <- 변경 후
      [name]: value,
    });
  };

  const addContents = () => {
    // navigate(`/introduction-form/_create`);
  };

//   const deleteContents = (ino) => {
//     IntroductionService.deleteIntroduction(ino);
//     // navigate(0);
//   };

  return (
    <div>
      <h1>소개</h1>
      {introductions.map((introduction, index) => (
        <IntroductionFormComponent
          key={index}
          index={index}
          data={introduction}
          isLogin={isLogin}
        />
      ))}

      {isLogin && (
        <div>
          <div className="card">
            <input
              type="text"
              placeholder="title"
              name="title"
              className="card-header"
              onChange={onChange}
            />
            <ContentTextArea
              placeholder="contents"
              name="title"
              className="card-body"
              onChange={onChange}
            />
            <ContentAddButton onClick={() => addContents}>
              추가
            </ContentAddButton>
          </div>
        </div>
      )}
    </div>
  );
}

const ContentAddButton = styled.button`
  padding: 5vh;
`;

const ContentTextArea = styled.textarea`
  resize: none;
  overflow: visible;
  min-height: 40vh;
`;
