import React, { useState } from "react";

export default function CareerForm({
  data,
  isLogin,
  moveCareer,
  index,
  deleteCareer,
  toggleCareer,
}) {

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
    // console.log(career)
  };



  const cancelCareer = () => {
    setIsUpdate(!isUpdate);
  };



  //   console.log(data)
  return (
    <div>
      {isUpdate ? (
        <div key={index} className="row">
          <input
            type="month"
            placeholder="startDate"
            name="startDate"
            className="col-md-2"
            defaultValue={data.startDate}
            onChange={onChange}
          />
          <input
            type="month"
            placeholder="endDate"
            name="endDate"
            className="col-md-2"
            defaultValue={data.endDate}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="details"
            name="detail"
            className="col"
            defaultValue={data.detail}
            onChange={onChange}
          />
          <div className="card-footer col-md-2 row">
            <button className="col md-6" onClick={() => toggleCareer(career)}>
              수정
            </button>
            <button className="col md-6" onClick={() => cancelCareer()}>
              취소
            </button>
          </div>
        </div>
      ) : (
        <div className="row" key={index} style={{fontSize:"90%"}}>
          {isLogin && <div className="col-md-1">{index}</div>}
          <div className="col-md-3">
            {career.startDate} ~ {career.endDate}
          </div>
          <div className="col">{career.detail}</div>
          {isLogin && (
            <div className="col-md-3 row">
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
