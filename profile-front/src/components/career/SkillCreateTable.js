import React, {
  // useState,
  // useEffect
} from "react";
import "./career.css";
import styled from "styled-components";

export default function SkillCreateTable({isSkillUpdate, classNm, buttonName}) {
  return (
    <div className={classNm}>
      {isSkillUpdate &&
        <h3><AddButton className="row">{buttonName}</AddButton></h3>
      }
    {isSkillUpdate && (
        <div className="skill-flex">
          {/* <div className="skill-left">
            <button>
              {category === "big"
                ? index + 1 + ") "
                : category === "medium"
                ? "● "
                : "- "}
            </button>
          </div> */}
          <div className="skill-middle">
            <ContentInput
              type="text"
              placeholder="skills"
              name="skill"
            //   defaultValue={data.skill}
            //   onChange={onChange}
            />
          </div>
          <div className="skill-right">
            <ContentTextArea
              placeholder="details"
              name="detail"
            //   defaultValue={data.detail}
            //   onChange={onChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const AddButton = styled.button`
  // width:70px;
  margin:10px;
  // border: 1px solid #999999;
  background-color: #00ff00;
  // color: #ffffff;
`

const ContentInput = styled.input`
  width:100%
`

const ContentTextArea = styled.textarea`
  resize: none;
  overflow: visible;
  // min-height: 40vh;
  width:100%;
  height:100%;
`;
