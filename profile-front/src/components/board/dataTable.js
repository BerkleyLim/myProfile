import React from "react";

const dataTable = ({ boards, openDetail }) => {
  return (
    <tbody>
      {
        // !!sampleDatapagenation ? (
        !!boards ? (
          // 변수명 뒤에 변수에 JSON 형식으로 저장되어야됨
          boards.map((board, index) => (
            // sampleDatapagenation.map((together, index) => (
            <tr onClick={() => openDetail(board)} key={index}>
              <th scope="row" className="col-md-1">
                {index + 1}
              </th>
              <td className="col-md-10">{board.title}</td>
              {/* <td className="col-md-1">{together.viewNumber}</td> */}
              <td className="col-md-1">{board.viewNumber}</td>
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
