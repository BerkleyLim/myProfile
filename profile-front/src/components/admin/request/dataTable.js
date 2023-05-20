import React from "react";
import { useSelector } from "react-redux";

const DataTable = ({ trequests, openDetail }) => {
  return (
    <tbody>
      {trequests?.map((trequest, index) => (
        <tr onClick={() => openDetail(!!trequest)} key={index}>
          <th scope="row" className="col-md-1">
            {index + 1}
          </th>
          <td className="col-md-10">{trequest.title}</td>
          <td className="col-md-1">{trequest.viewNumber}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default DataTable;
