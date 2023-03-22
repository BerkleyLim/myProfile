import React, {
  useState
} from "react";
import styled from "styled-components";

const SkillDataTable = ({ data, index, category, isSkillUpdate, changeState, skillUpdate, deleteSkill, stateIdx, }) => {
  const [hide, setHide] = useState(false);

  const onHide = () => {
    setHide(!hide)
  }


  const onChange = (e) => {
    const { name, value } = e.target;
    data[name] = value;
    console.log(data);
    changeState(stateIdx, data);
  };
  return (
    <div className={data.classNm}>
      {isSkillUpdate ? (
        <div className="skill-flex">
          <div className="skill-left">
            <button onClick={onHide}> 
              {(category === "big")
                ? index + 1 + ") "
                : ((category === "medium")
                ? "● " 
                : "- ")}
            </button>
          </div>
          <div className="skill-middle">
            <ContentInput
              type="text"
              placeholder="skills"
              name="skill"
              defaultValue={data.skill}
              onChange={onChange}
            />
          </div>
          <div className="skill-right">
            <ContentTextArea
              placeholder="details"
              name="detail"
              defaultValue={data.detail}
              onChange={onChange}
            />
          </div>
          <div>
            <UploadButton onClick={() => skillUpdate(data, category)}>수정</UploadButton>
            <DeleteButton onClick={() => deleteSkill(data.no, category)}>삭제</DeleteButton>
          </div>
        </div>
      ) : (
        <div className="skill-flex">
          <div className="skill-left">
            <button onClick={onHide}>
              {category === "big"
                ? index + 1 + ") "
                : category === "medium"
                ? "● "
                : "- "}
            </button>
          </div>
          <div className="skill-middle">{data.skill}</div>
          <div className="skill-right"> {data.detail} </div>
        </div>
      )}
    </div>
  );
};
// <div className="">
//   <div className="p-5 bd-highlight">
//     <div className="row">
//       <div className=""></div>
//       <div className="col-md-2"> - smallSkill.skill </div>
//       <div className="col-md-9 text-break"> smallSkill.detail </div>
//     </div>
//   </div>
// </div>

export default SkillDataTable;

const UploadButton = styled.button`
  width:50px;
  // border: 1px solid #999999;
  background-color: #0000ff;
  color: #ffffff;
`

const DeleteButton = styled.button`
  width:50px;
  // border: 1px solid #999999;
  background-color: #ff0000;
  color: #ffffff;
`

const ContentInput = styled.input`
  width:100%
`

const ContentTextArea = styled.textarea`
  resize: none;
  overflow: visible;
  // display:block;
  min-height: 25vh;
  width:100%;
  // min-height:100%;
`;
