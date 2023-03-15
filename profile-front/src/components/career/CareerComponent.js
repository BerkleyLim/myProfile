import React, { useEffect, useState, useCallback } from "react";
import "./career.css";
import CareerService from "../../service/CareerService";
// import SkillService from "../../service/SkillService";
import CareerFormComponent from "./CareerFormComponent";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import update from "immutability-helper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import { useSelector, useDispatch } from 'react-redux'

import SkillDataTable from "./SkillDataTable";
import SkillCreateTable from "./SkillCreateTable";
import URI from "../../util/URI";

export default function CareerComponent({ isLogin }) {
  let navigate = useNavigate();
  const [careers, setCareers] = useState([]);
  const [bigSkills, setBigSkills] = useState([]);
  const [mediumSkills, setMediumSkills] = useState([]);
  const [smallSkills, setSmallSkills] = useState([]);

  const [inputs, setInputs] = useState();

  // 지금은 Career 컴포넌트 내에서만 Redux의 state가 동작한다.
  // const dispatch = useDispatch();
  // // const reduxCareer = useSelector(state => state.fruit);
  // const reduxCareer = dispatch({type:"setCareer", cno:1, startDate:"2022-11-01", endDate:"2022-12-15", detail:"근무"});
  // console.log(reduxCareer);
  // let bigNumber = 1;
  useEffect(() => {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/career/")
      .then((res) => {
        setCareers(res.data);
        // console.log(res)
      })
      .catch((error) => console.log(error));

    URI.get(process.env.REACT_APP_API_ROOT + "/api/skill/big/")
      .then((response) => {
        setBigSkills(response.data);
      })
      .catch((error) => console.log(error));
    URI.get(process.env.REACT_APP_API_ROOT + "/api/skill/medium/")
      .then((response) => {
        setMediumSkills(response.data);
      })
      .catch((error) => console.log(error));
    URI.get(process.env.REACT_APP_API_ROOT + "/api/skill/small/")
      .then((response) => {
        setSmallSkills(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      // [e.target.name]: e.target.value, // <- 변경 후
      [name]: value,
    });
  };

  const careerAdd = () => {
    // navigate(`/career-form/_create`);
    let Career = {
      startDate: inputs.startDate,
      endDate: inputs.endDate,
      detail: inputs.detail,
    };
    CareerService.createCareer(Career)
      .then((res) => {
        alert("success");
        navigate(0);
      })
      .catch((error) => {
        alert(error);
      });
  };

  // const careerDelete = (cno) => {
  //   // CareerService.deleteCareer(cno);
  //   // navigate(0);
  // };

  // Reorder an array
  const moveCareer = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = careers[dragIndex];

      setCareers(
        update(careers, {
          $splice: [
            [dragIndex, 1], // delete
            [hoverIndex, 0, dragCard], // Add
          ],
        })
      );

      // 여기서 전체 리스트 update API 삽입

      // 삽입 끝
    },
    [careers]
  );

  // useEffect(() => {
  //   console.log(bigSkills)
  //   console.log(mediumSkills)
  //   console.log(smallSkills)
  // }, [bigSkills, mediumSkills, smallSkills])

  // 인풋 수정
  const bigSkillChangeState = (index, data) => {
    setBigSkills(
      update(bigSkills, {
        $merge: {
          [index]: data,
        },
      })
    );
    // console.log(...bigSkills);
  };

  const mediumSkillChangeState = (index, data) => {
    setMediumSkills(
      update(mediumSkills, {
        $merge: {
          [index]: data,
        },
      })
    );
    console.log(index);
    console.log(data);
    // console.log(mediumSkills)
  };

  const smallSkillChangeState = (index, data) => {
    setSmallSkills(
      update(smallSkills, {
        $merge: {
          [index]: data,
        },
      })
    );
  };

  const [isSkillUpdate, setIsSkillUpdate] = useState(false);
  // const [isSkillUpdate, setIsSkillUpdate] = useState(true);

  const onClickSkillAllUpdate = () => {
    // setIsSkillUpdate(!isSkillUpdate)
    console.log("전체 수정 기능 구현 중");
  };

  // 각각 업로드
  const skillUpdate = (data, category) => {
    URI.post(process.env.REACT_APP_API_ROOT + "/" + category + "/update/", data)
      .then(alert("수정 성공"))
      .catch((e) => console.error(e));
  };
  // const deleteSkill = (no) => {};
  // useEffect(() => {
  // }, [isSkillUpdate])

  return (
    <div>
      <h1>이력사항</h1>
      <div className="career">
        {careers.map((career, index) => (
          <DndProvider key={index} backend={HTML5Backend}>
            <CareerFormComponent
              index={index}
              data={career}
              isLogin={isLogin}
              moveCareer={moveCareer}
            />
          </DndProvider>
        ))}
        {isLogin && (
          <div>
            <div className="card">
              <input
                type="date"
                placeholder="startDate"
                name="startDate"
                className="card-header"
                // defaultValue={data.startDate}
                onChange={onChange}
              />
              <input
                type="date"
                placeholder="endDate"
                name="endDate"
                className="card-header"
                // defaultValue={data.endDate}
                onChange={onChange}
              />
              <input
                type="text"
                placeholder="details"
                name="details"
                // className="card-header"
                // defaultValue={data.detail}
                onChange={onChange}
              />
            </div>
            <ContentAddButton className="row" onClick={careerAdd}>
              이력사항 추가
            </ContentAddButton>
          </div>
        )}
      </div>

      <h1>기술</h1>
      {isLogin && (
        <div className="row">
          {isSkillUpdate ? (
            <button
              className="col md-6"
              onClick={() => onClickSkillAllUpdate()}
            >
              전체 수정
            </button>
          ) : (
            <button className="col md-6" onClick={() => setIsSkillUpdate(true)}>
              수정
            </button>
          )}

          <button className="col md-6" onClick={() => setIsSkillUpdate(false)}>
            취소
          </button>
        </div>
      )}

      <pre>
        {bigSkills.map((bigSkill, bindex) => (
          <div key={bindex}>
            <SkillDataTable
              data={bigSkill}
              index={bindex}
              category="big"
              isSkillUpdate={isSkillUpdate}
              changeState={bigSkillChangeState}
              skillUpdate={skillUpdate}
            />

            {mediumSkills
              .filter((medium) => medium.bigSkill.no === bigSkill.no)
              .map((mediumSkill, mindex) => (
                <div key={mindex}>
                  <SkillDataTable
                    data={mediumSkill}
                    index={mindex}
                    category="medium"
                    isSkillUpdate={isSkillUpdate}
                    changeState={mediumSkillChangeState}
                    skillUpdate={skillUpdate}
                  />

                  {smallSkills
                    .filter((small) => small.mediumSkill.no === mediumSkill.no)
                    .map((smallSkill, sindex) => (
                      <div key={sindex}>
                        <SkillDataTable
                          data={smallSkill}
                          index={sindex}
                          category="small"
                          isSkillUpdate={isSkillUpdate}
                          changeState={smallSkillChangeState}
                          skillUpdate={skillUpdate}
                        />
                      </div>
                    ))}
                  <SkillCreateTable
                    isSkillUpdate={isSkillUpdate}
                    classNm="small-skill"
                    buttonName={`"${mediumSkill.skill}"` + "의 소분류 추가"}
                  />
                </div>
              ))}
            <SkillCreateTable
              isSkillUpdate={isSkillUpdate}
              classNm="medium-skill"
              buttonName={`"${bigSkill.skill}"` + "의 중분류 추가"}
            />
          </div>
        ))}
        <SkillCreateTable
          isSkillUpdate={isSkillUpdate}
          classNm="big-skill"
          buttonName="대분류 추가"
        />
      </pre>
    </div>
  );
}

const ContentAddButton = styled.button`
  padding: 5vh;
`;
