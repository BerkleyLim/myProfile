import React, { useEffect, useState, useCallback } from "react";
import Style from "./career.css";
import CareerService from "../../service/CareerService";
import SkillService from "../../service/SkillService";
import CareerFormComponent from "./CareerFormComponent";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import update from "immutability-helper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import { useSelector, useDispatch } from 'react-redux'

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
  let bigNumber = 1;
  useEffect(() => {
    CareerService.getCareer()
      .then((res) => {
        setCareers(res.data);
      })
      .catch((error) => alert(error));
    SkillService.getSkill("big")
      .then((res) => {
        // console.log(res.data[0]);
        setBigSkills(res.data);
        // alert("오류")
      })
      .catch((error) => alert(error));
    SkillService.getSkill("medium")
      .then((res) => {
        setMediumSkills(res.data);
        // console.log(res.data[0]);
        // alert(res.data);
      })
      .catch((error) => alert(error));
    SkillService.getSkill("small")
      .then((res) => {
        setSmallSkills(res.data);
        // console.log(res.data[0]);
        // alert(res.data);
      })
      .catch((error) => alert(error));
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
        detail: inputs.detail
    }
    CareerService.createCareer(Career)
        .then((res) => {
            alert("success");
            navigate(0);
        })
        .catch((error) => {
            alert(error);
        });
  };



  const careerDelete = (cno) => {
    // CareerService.deleteCareer(cno);
    // navigate(0);
  };

  const skillAdd = (category, rootNo) => {
    // navigate(`/skill-form/${category}/_create/${rootNo}`);
  };

  const skillUpdate = (no, category, rootNo) => {
    // navigate(`/skill-form/${category}/${no}/${rootNo}`);
    // alert(error);
  };

  const skillDelete = (no, category) => {
    // SkillService.deleteSkill(no, category);
    // navigate(0);
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
        {isLogin ? (
          <div>
            <ContentAddButton className="row" onClick={careerAdd}>
              이력사항 추가
            </ContentAddButton>
          </div>
        ) : (
          <></>
        )}
      </div>

      <h1>기술</h1>
      {bigSkills.map((bigSkill) => (
        <pre>
          <h5>
            <div className="row">
              <div className="col-md-3">
                {" "}
                {bigNumber++}) {bigSkill.skill}{" "}
              </div>
              <div className="col-md-9 detail"> {bigSkill.detail} </div>
            </div>
            {/* {bigSkill.skill} - {bigSkill.detail} */}
          </h5>
          {isLogin ? (
            <div className="row">
              <button
                className="col md-6"
                onClick={() => skillUpdate(bigSkill.no, "big", -1)}
              >
                {" "}
                수정{" "}
              </button>
              <button
                className="col md-6"
                onClick={() => skillDelete(bigSkill.no, "big", -1)}
              >
                {" "}
                삭제{" "}
              </button>
            </div>
          ) : (
            <></>
          )}
          <blockquote>
            {mediumSkills.map((mediumSkill) => (
              <>
                {bigSkill.no === mediumSkill.bigSkill_no ? (
                  <div className="d-flex flex-column bd-highlight mb-4">
                    <div className="p-5 bd-highlight">
                      <div className="row">
                        <div className=""></div>
                        <div className="col-md-2"> ■ {mediumSkill.skill} </div>
                        <div className="col-md-10 detail">
                          {" "}
                          {mediumSkill.detail}{" "}
                        </div>
                      </div>
                      {/* {mediumSkill.skill} - {mediumSkill.detail} */}
                      {isLogin ? (
                        <div className="row">
                          <button
                            className="col md-6"
                            onClick={() =>
                              skillUpdate(mediumSkill.no, "medium", bigSkill.no)
                            }
                          >
                            {" "}
                            수정{" "}
                          </button>
                          <button
                            className="col md-6"
                            onClick={() =>
                              skillDelete(mediumSkill.no, "medium", bigSkill.no)
                            }
                          >
                            {" "}
                            삭제{" "}
                          </button>
                        </div>
                      ) : (
                        <></>
                      )}
                      <blockquote>
                        {smallSkills.map((smallSkill) => (
                          <>
                            {mediumSkill.no === smallSkill.mediumSkill_no ? (
                              <div className="d-flex flex-column bd-highlight mb-3">
                                <div className="p-5 bd-highlight">
                                  <div className="row">
                                    <div className=""></div>
                                    <div className="col-md-2">
                                      {" "}
                                      - {smallSkill.skill}{" "}
                                    </div>
                                    <div className="col-md-9 text-break">
                                      {" "}
                                      {smallSkill.detail}{" "}
                                    </div>
                                  </div>
                                  {/* {smallSkill.skill} - {smallSkill.detail} */}
                                </div>
                                {isLogin ? (
                                  <div className="row">
                                    <button
                                      className="col md-6"
                                      onClick={() =>
                                        skillUpdate(
                                          smallSkill.no,
                                          "small",
                                          mediumSkill.no
                                        )
                                      }
                                    >
                                      {" "}
                                      수정{" "}
                                    </button>
                                    <button
                                      className="col md-6"
                                      onClick={() =>
                                        skillDelete(
                                          smallSkill.no,
                                          "small",
                                          mediumSkill.no
                                        )
                                      }
                                    >
                                      {" "}
                                      삭제{" "}
                                    </button>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </div>
                            ) : (
                              <></>
                            )}
                          </>
                        ))}
                        {isLogin ? (
                          <div>
                            <ContentAddButton
                              className="row"
                              onClick={() => skillAdd("small", mediumSkill.no)}
                            >
                              {mediumSkill.skill} 기술 추가
                            </ContentAddButton>
                          </div>
                        ) : (
                          <></>
                        )}
                      </blockquote>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}

            {isLogin ? (
              <div>
                <ContentAddButton
                  className="row"
                  onClick={() => skillAdd("medium", bigSkill.no)}
                >
                  {bigSkill.skill} 기술 추가
                </ContentAddButton>
              </div>
            ) : (
              <></>
            )}
          </blockquote>
        </pre>
      ))}
      {isLogin ? (
        <div>
          <ContentAddButton className="row" onClick={() => skillAdd("big", -1)}>
            대분류 기술 추가
          </ContentAddButton>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

const ContentAddButton = styled.button`
  padding: 5vh;
`;
