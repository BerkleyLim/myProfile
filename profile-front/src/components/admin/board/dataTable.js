import React from "react";
import { useSelector } from "react-redux";

const DataTable = ({ boards, openDetail }) => {
  const user = useSelector((state) => state.user);

  return (
    <tbody>
      {boards?.map((board, index) => (
        <tr key={index}>
          {user.isLogin && (
            <th scope="row" className="col-md=1">
              <input
                type="checkbox"
                checked={board.mainYn === "Y" ? true : false}
              />
            </th>
          )}
          <th scope="row" onClick={() => openDetail(board)} className="col-md-1">
            {index + 1}
          </th>
          <td onClick={() => openDetail(board)} className="col-md-10">{board.title}</td>
          <td onClick={() => openDetail(board)} className="col-md-1">{board.viewNumber}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default DataTable;
