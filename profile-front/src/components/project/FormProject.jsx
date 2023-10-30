import React from 'react'
import { Table } from 'reactstrap'

const FormProject = () => {
  return (
    <div style={{ minHeight: "300px", overflowY: "scroll" }}>
      <h3 className="m-3">프로젝트 추가</h3>
      <Table className="m-3" style={{ width: "90%" }}>
        <tr>
          <th width="20%">링크</th>
          <td width="80%">
            https://www.profile.com`
          </td>
        </tr>
        <tr>
          <th width="20%">Github</th>
          <td width="80%">
            https://github.com/hongil/github
          </td>
        </tr>
        <tr>
          <th width="20%">blog</th>
          <td width="80%">
            https://gil.tistory.com/
          </td>
        </tr>
      </Table>
      <div className='m-3'>html 출력 영역</div>
    </div>
  )
}

export default FormProject