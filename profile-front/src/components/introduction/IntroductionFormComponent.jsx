import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import "./introduction.css";
import IntroductionService from "../../service/IntroductionService";
import styled from "styled-components";

export default function IntroductionFormComponent({ key, data, isLogin }) {
//   const param = useParams();
//   const navigate = useNavigate();
  const [introduction, setIntroduction] = useState({...data});
  const [isUpdate, setIsUpdate] = useState(false);

  // 기능 추가
  const onChange = (e) => {
    const { name, value } = e.target;
    setIntroduction({
      ...introduction,
      // [e.target.name]: e.target.value, // <- 변경 후
      [name]: value,
    });
  };

  const cancelIntroduction = () => {
    setIsUpdate(!isUpdate);
  };

  const toggleIntroduction = () => {
    IntroductionService.updateIntroduction(introduction.ino, introduction)
      .then((res) => {
        alert("success");
        setIsUpdate(!isUpdate);
        // navigate(-1);
      })
      .catch((error) => {
        alert(error);
      });
    // console.log(introduction)
  };

  const deleteContents = (ino) => {
    IntroductionService.deleteIntroduction(ino);
    // navigate(0);
  };

  return (
    <div>
      {isUpdate ? (
        <div key={key} id={data.ino} className="card">
          <input
            type="text"
            placeholder="title"
            name="title"
            className="card-header"
            defaultValue={data.title}
            onChange={onChange}
          />
          <ContentTextArea
            placeholder="contents"
            name="contents"
            className="card-body"
            defaultValue={data.contents}
            onChange={onChange}
          />
            <div className="card-footer row">
              <button
                className="col md-6"
                onClick={() => toggleIntroduction() }
              >
                수정
              </button>
              <button
                className="col md-6"
                onClick={() => cancelIntroduction()}
              >
                취소
              </button>
            </div>
        </div>
      ) : (
        <div key={key} id={data.ino} className="card">
          <h5 className="card-header">{data.title}</h5>
          <div className="card-body">
            <span className="card-text"> {data.contents}</span>
          </div>
          {isLogin && (
            <div className="card-footer row">
              <button
                className="col md-6"
                onClick={() => setIsUpdate(!isUpdate) }
              >
                내용 수정
              </button>
              <button
                className="col md-6"
                onClick={() => deleteContents(data.ino)}
              >
                내용 삭제
              </button>
            </div>
          )}
        </div>
      )}
      
    </div>
  );
}

// const ContentAddButton = styled.button`
//   padding: 5vh;
// `;

const ContentTextArea = styled.textarea`
  resize: none;
  overflow: visible;
  min-height: 40vh;
`;
