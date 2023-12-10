import React from "react";
import { useSelector } from "react-redux";

import URI from "../../../util/URI"

const DataTable = ({ boards, openDetail, mainYnBoard, setMainYnBoard }) => {
  const user = useSelector((state) => state.user);

  // 메인 바꾸기
  const selectOnChange = (e, board) => {
    console.log(board)
    if (window.confirm('공지 변경을 하겠습니까?')) {
      // 기존 메인 게시판 메인 공지 걸기 취소 
      const mainNotBoard = mainYnBoard;
      mainNotBoard.mainYn = "N"
      URI.post(process.env.REACT_APP_API_ROOT + "board/mainYn/update/",mainNotBoard)
        .then(
          () => {
            // 이후, 메인을 걸 게시판에 공지 걸기
            const changeMainBoard = board;
            changeMainBoard.mainYn = "Y"
            URI.post(process.env.REACT_APP_API_ROOT + "board/mainYn/update/",changeMainBoard)
              .then(() => {
                alert("변경 성공!")
                window.location.reload();
              })
              .catch(() => {
                alert("변경 실패")
              })
          }
        )
        .catch(() => alert("main 공지 창에 reset 되지 않음"))
    }
  }

  // 기존 게시판 삭제
  const deleteBoard = (board) => {
    console.log(board)
    if (window.confirm('삭제 하겠습니까?')) {
      URI.post(process.env.REACT_APP_API_ROOT + "board/delete",board)
        .then(
          () => {
            alert("삭제 성공")
            window.location.reload();
          }
        )
        .catch(() => alert("삭제 실패"))
    }
  }

  return (
    <tbody>
      {boards?.map((board, index) => (
        <tr key={index}>
          {user.isLogin && (
            <th scope="row" className="col-md=1">
              <input
                type="checkbox"
                checked={board.mainYn === "Y" ? true : false}
                onChange={(e) => selectOnChange (e, board)}
              />
            </th>
          )}
          <th scope="row" onClick={() => openDetail(board)} className="col-md-1">
            {index + 1}
          </th>
          <td onClick={() => openDetail(board)} className="col-md-9">{board.title}</td>
          <td onClick={() => openDetail(board)} className="col-md-1">{board.viewNumber}</td>
          <td className="col-md-1"><button onClick={() => {deleteBoard(board)}}>삭제</button></td>
        </tr>
      ))}
    </tbody>
  );
};

export default DataTable;
