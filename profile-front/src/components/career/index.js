import React, { useEffect, useState, useCallback } from "react";
import "./career.css";
// import CareerService from "../../service/CareerService";
// import SkillService from "../../service/SkillService";
import CareerForm from "./career/form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import update from "immutability-helper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import { useSelector, useDispatch } from 'react-redux'

import SkillDataTable from "./skill/SkillDataTable";
import SkillCreateTable from "./skill/SkillCreateTable";
import URI from "../../util/URI";
import { useSelector } from "react-redux";

export default function CareerComponent() {
  let navigate = useNavigate();
  const [careers, setCareers] = useState([]);
  const [bigSkills, setBigSkills] = useState([]);
  const [mediumSkills, setMediumSkills] = useState([]);
  const [smallSkills, setSmallSkills] = useState([]);
  const [isSkillUpdate, setIsSkillUpdate] = useState(false);

  const [careerStateUpdate, setCareerStateUpdate] = useState(false);
  const [skillStateUpdate, setSkillStateUpdate] = useState(false);

  const [inputs, setInputs] = useState();
  const user = useSelector((state) => state.user);

  let mStateIdx = 0;
  let sStateIdx = 0;

  useEffect(() => {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/career/")
      .then((res) => {
        setCareers(res.data);
        // console.log(res)
      })
      .catch((error) => console.log(error));
  }, [setCareers, careerStateUpdate]);

  useEffect(() => {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/skill/big/")
      .then((response) => {
        setBigSkills(response.data);
      })
      .catch((error) => console.log(error));
  }, [setBigSkills, skillStateUpdate]);

  useEffect(() => {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/skill/medium/")
      .then((response) => {
        setMediumSkills(response.data);
      })
      .catch((error) => console.log(error));
  }, [setMediumSkills, skillStateUpdate]);

  useEffect(() => {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/skill/small/")
      .then((response) => {
        setSmallSkills(response.data);
      })
      .catch((error) => console.log(error));
  }, [setSmallSkills, skillStateUpdate]);

  // career & skill 전용
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // ********************************* career **********************************************
  const careerAdd = () => {
    let Career = {
      startDate: inputs.startDate,
      endDate: inputs.endDate,
      detail: inputs.careerDetail,
    };
    URI.post(process.env.REACT_APP_API_ROOT + "/api/career/", Career)
      .then((res) => {
        alert("create success");
        setCareerStateUpdate(!careerStateUpdate);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const deleteCareer = (cno) => {
    URI.post(process.env.REACT_APP_API_ROOT + "/api/career/delete/" + cno)
      .then((res) => {
        if (res.status === 200) {
          alert("정상적으로 삭제 되었습니다");
          navigate(0);
        } else {
          alert("삭제 오류");
        }
      })
      .catch((error) => console.log(error));
    // navigate(0);
  };

  const toggleCareer = (data) => {
    URI.post(process.env.REACT_APP_API_ROOT + "/api/career/update", data)
      .then((res) => {
        alert("update success");
        setCareerStateUpdate(!careerStateUpdate)
      })
      .catch((error) => {
        alert(error);
      });
    // console.log(introduction)
  };

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
  // ********************************* career  끝 ******************************************

  // ********************************* Skill ***********************************************
  // 인풋 수정
  const bigSkillChangeState = (index, data) => {
    setBigSkills(
      update(bigSkills, {
        $merge: {
          [index]: data,
        },
      })
    );
  };

  const mediumSkillChangeState = (dataIndex, data) => {
    console.log(mediumSkills);
    setMediumSkills(
      update(mediumSkills, {
        $merge: {
          [dataIndex]: data,
        },
      })
    );
  };

  const smallSkillChangeState = (dataIndex, data) => {
    setSmallSkills(
      update(smallSkills, {
        $merge: {
          [dataIndex]: data,
        },
      })
    );
  };



  const onClickSkillAllUpdate = () => {
    // setIsSkillUpdate(!isSkillUpdate)
    console.log("전체 수정 기능 구현 중");
  };

  // 각각 업로드
  const skillUpdate = (data, category) => {
    const requestData = {
      no: data.no,
      skill: data.skill,
      detail: data.detail,
    }
    // console.log(requestData);
    // debugger;
    URI.post(process.env.REACT_APP_API_ROOT + "/api/skill/" + category + "/update/", requestData)
      .then(() => {
        alert("update success");
        setSkillStateUpdate(!skillStateUpdate);
      })
      .catch((e) => console.error(e));
  };
  const deleteSkill = (no, category) => {
    URI.post(process.env.REACT_APP_API_ROOT + "/api/skill/" + category + "/delete/" + no)
      .then((res) => {
        if (res.status === 200) {
          alert("정상적으로 삭제 되었습니다");
          navigate(0);
        } else {
          alert("삭제 오류");
        }
      })
      .catch((error) => console.log(error));
  };

  // ********************************* Skill  끝 *******************************************

  return (
    <div>
      {/* <h1>이력사항</h1>
      <div className="career">
        {careers.map((career, index) => (
          <DndProvider key={index} backend={HTML5Backend}>
            <CareerForm
              index={index}
              data={career}
              isLogin={user.isLogin}
              moveCareer={moveCareer}
              deleteCareer={deleteCareer}
              toggleCareer={toggleCareer}
            />
          </DndProvider>
        ))}
        {user.isLogin && (
          <div>
            <div className="row">
              <input
                type="month"
                placeholder="startDate"
                name="startDate"
                className="col-md-2"
                onChange={onChange}
              />
              <input
                type="month"
                placeholder="endDate"
                name="endDate"
                className="col-md-2"
                onChange={onChange}
              />
              <input
                type="text"
                placeholder="details"
                name="careerDetail"
                className="col"
                onChange={onChange}
              />
              <ContentAddButton className="col-md-2" onClick={careerAdd}>
                이력사항 추가
              </ContentAddButton>
            </div>
          </div>
        )}
      </div> */}

      <h1>기술</h1>
      {user.isLogin && (
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
              stateIdx={bindex}
              category="big"
              isSkillUpdate={isSkillUpdate}
              changeState={bigSkillChangeState}
              skillUpdate={skillUpdate}
              deleteSkill={deleteSkill}
              skillStateUpdate={skillStateUpdate}
              setSkillStateUpdate={setSkillStateUpdate}
            />

            {mediumSkills
              .filter((medium) => medium.bigSkill.no === bigSkill.no)
              .map((mediumSkill, mindex) => (
                <div key={mindex}>
                  <SkillDataTable
                    data={mediumSkill}
                    index={mindex}
                    stateIdx={mStateIdx++}
                    category="medium"
                    isSkillUpdate={isSkillUpdate}
                    changeState={mediumSkillChangeState}
                    skillUpdate={skillUpdate}
                    deleteSkill={deleteSkill}
                    skillStateUpdate={skillStateUpdate}
                    setSkillStateUpdate={setSkillStateUpdate}
                  />

                  {smallSkills
                    .filter((small) => small.mediumSkill.no === mediumSkill.no)
                    .map((smallSkill, sindex) => (
                      <div key={sindex}>
                        <SkillDataTable
                          data={smallSkill}
                          index={sindex}
                          stateIdx={sStateIdx++}
                          category="small"
                          isSkillUpdate={isSkillUpdate}
                          changeState={smallSkillChangeState}
                          skillUpdate={skillUpdate}
                          deleteSkill={deleteSkill}
                          skillStateUpdate={skillStateUpdate}
                          setSkillStateUpdate={setSkillStateUpdate}
                        />
                      </div>
                    ))}
                  <SkillCreateTable
                    isSkillUpdate={isSkillUpdate}
                    classNm="small-skill"
                    category="small"
                    buttonName={`"${mediumSkill.skill}"의 소분류 추가`}
                    parentsNo={mediumSkill.no}
                    parentsSkill={mediumSkill}
                    skillStateUpdate={skillStateUpdate}
                    setSkillStateUpdate={setSkillStateUpdate}
                  />
                </div>
              ))}
            <SkillCreateTable
              isSkillUpdate={isSkillUpdate}
              classNm="medium-skill"
              category="medium"
              buttonName={`"${bigSkill.skill}"의 중분류 추가`}
              parentsNo={bigSkill.no}
              parentsSkill={bigSkill}
              skillStateUpdate={skillStateUpdate}
              setSkillStateUpdate={setSkillStateUpdate}
            />
          </div>
        ))}
        <SkillCreateTable
          isSkillUpdate={isSkillUpdate}
          classNm="big-skill"
          category="big"
          buttonName="대분류 추가"
          skillStateUpdate={skillStateUpdate}
          setSkillStateUpdate={setSkillStateUpdate}
        />
      </pre>
    </div>
  );
}

const ContentAddButton = styled.button`
  // padding: 5vh;
  width: 100%;
`;
