import React, { useState } from "react";
import { 
  useNavigate,
  // useParams
} from "react-router-dom";
import "./career.css";
import CareerService from "../../service/CareerService";
// import styled from "styled-components";

export default function CareerFormComponent({
  data,
  isLogin,
  moveCareer,
  index,
}) {
  //   const param = useParams();
  const navigate = useNavigate();

  const [isUpdate, setIsUpdate] = useState(false);
  const [career, setCareer] = useState({ ...data });

  // 기능 추가
  const onChange = (e) => {
    const { name, value } = e.target;
    setCareer({
      ...career,
      // [e.target.name]: e.target.value, // <- 변경 후
      [name]: value,
    });
  };

  const toggleCareer = () => {
    CareerService.updateCareer(career.cno, career)
      .then((res) => {
        alert("success");
        setIsUpdate(!isUpdate);
      })
      .catch((error) => {
        alert(error);
      });
    // console.log(introduction)
  };

  const cancelCareer = () => {
    setIsUpdate(!isUpdate);
  };

  const deleteCareer = (cno) => {
    CareerService.deleteCareer(cno);
    navigate(0);
  };

  //   console.log(data)
  return (
    <div>
      {isUpdate ? (
        <div key={index} className="card">
          <input
            type="date"
            placeholder="startDate"
            name="startDate"
            className="card-header"
            defaultValue={data.startDate}
            onChange={onChange}
          />
          <input
            type="date"
            placeholder="endDate"
            name="endDate"
            className="card-header"
            defaultValue={data.endDate}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="details"
            name="details"
            // className="card-header"
            defaultValue={data.detail}
            onChange={onChange}
          />
          <div className="card-footer row">
            <button className="col md-6" onClick={() => toggleCareer()}>
              수정
            </button>
            <button className="col md-6" onClick={() => cancelCareer()}>
              취소
            </button>
          </div>
        </div>
      ) : (
        <div className="row" key={index}>
          {isLogin && <div className="col-md-1">{index}</div>}
          <div className="col-md-3">
            {career.startDate} ~ {career.endDate}
          </div>
          <div className="col">{career.detail}</div>
          {isLogin && (
            <div className="row">
              <button
                className="col md-6"
                onClick={() => setIsUpdate(!isUpdate)}
              >
                이력 수정
              </button>
              <button
                className="col md-6"
                onClick={() => deleteCareer(career.cno)}
              >
                이력 삭제
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
