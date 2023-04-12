import React from "react";
import { useSelector } from "react-redux";

const DataTable = ({ boards, openDetail }) => {
  const user = useSelector(state => state.user);

  return (
    <tbody>
      {
        // !!sampleDatapagenation ? (
        // boards ? (
          // 변수명 뒤에 변수에 JSON 형식으로 저장되어야됨
          boards?.map((board, index) => (
            // sampleDatapagenation.map((together, index) => (
            <tr onClick={() => openDetail(board)} key={index}>
              {
                user.isLogin &&
              <th scope="row" className="col-md=1">
                <input type="checkbox"  checked={(board.mainYn === "Y"?true:false)} />
              </th>
              }
              <th scope="row" className="col-md-1">
                {index + 1}
              </th>
              <td className="col-md-10">{board.title}</td>
              {/* <td className="col-md-1">{together.viewNumber}</td> */}
              <td className="col-md-1">{board.viewNumber}</td>
            </tr>
          ))
        // ) : (
        //   <></>
        //   // <ImageWrap>
        //   //   <img src={loadingImg} alt="loadingImg" />
        //   // </ImageWrap>
        // )
      }
    </tbody>
  );
};

export default DataTable;
