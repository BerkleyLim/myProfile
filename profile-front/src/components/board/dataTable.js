import React from "react";

const dataTable = ({ togethers, openModal }) => {
  return (
    <tbody>
      {
        // !!sampleDatapagenation ? (
        !!togethers ? (
          // 변수명 뒤에 변수에 JSON 형식으로 저장되어야됨
          togethers.map((together, index) => (
            // sampleDatapagenation.map((together, index) => (
            <tr onClick={() => openModal(together)} key={index}>
              <th scope="row" className="col-md-1">
                {index + 1}
              </th>
              <td className="col-md-10">{together.title}</td>
              {/* <td className="col-md-1">{together.viewNumber}</td> */}
              <td className="col-md-1">0</td>
            </tr>
          ))
        ) : (
          <></>
          // <ImageWrap>
          //   <img src={loadingImg} alt="loadingImg" />
          // </ImageWrap>
        )
      }
    </tbody>
  );
};

export default dataTable;
