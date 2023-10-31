import React, { useEffect, useState } from 'react'
import { Button, Input, Table } from 'reactstrap'
import URI from '../../../util/URI'

const AdminHeader = () => {
  const [data, setData] = useState();

  const [createData, setCreateData] = useState();

  const [updateData, setUpdateData] = useState();

  // 화면 렌더링
  useEffect(()=> {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/master/header/")
      .then((response) => {
        console.log(response)
        setData(response.data);
        setUpdateData(response.data);
      })
      .catch((e) => {
        console.error(e)
      })
  }, [])

  // 생성 입력 변화
  const onChange = (e) => {
    const {name, value} = e.target;
    setCreateData({
      ...createData,
      [name]:value
    })
  }

  // 생성 api
  const createEvent = () => {
    URI.post(process.env.REACT_APP_API_ROOT + "/api/master/header/insert")
    .then((response) => {
      console.log(response)
      setData(response.data);
      setUpdateData(response.data);
    })
    .catch((e) => {
      console.error(e)
    })
  }

  // 수정 입력 변화
  const updateOnChange = (e, index) => {
    const {name, value} = e.target;

    setUpdateData({
      [index]:{
        ...updateData[index],
        [name]: value
      }
    })
  }

  return (
    <div>
      <h1>메인 화면 헤더 관리</h1>
      <Table>
        <thead>
          <tr>
            <th>mhno</th>
            <th>link</th>
            <th>gubun</th>
            <th>title</th>
            <th>className</th>
            <th>orderBy</th>
            <th>hideYn</th>
            <th>{""}</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map((d,index) =>
            <tr key={index}>
              <td>{d?.mhno}</td>
              <td><Input name="link" defaultValue={updateData?.link} onChange={updateOnChange}></Input></td>
              <td><Input name="gubun" defaultValue={updateData?.gubun} onChange={updateOnChange}></Input></td>
              <td><Input name="title" defaultValue={updateData?.title} onChange={updateOnChange}></Input></td>
              <td><Input name="className" defaultValue={updateData?.className} onChange={updateOnChange}></Input></td>
              <td><Input name="orderBy" defaultValue={updateData?.orderBy} onChange={updateOnChange}></Input></td>
              <td><Input name="hideYn" defaultValue={updateData?.hideYn} onChange={updateOnChange}></Input></td>
              <td>
                <Button>수정</Button>
                <Button>삭제</Button>
              </td>
            </tr> 
            )
          }
        </tbody>
        <tfoot>
            <tr>
              <td></td>
              <td><Input name="link" defaultValue={createData?.link} onChange={onChange}></Input></td>
              <td><Input name="gubun" defaultValue={createData?.gubun} onChange={onChange}></Input></td>
              <td><Input name="title" defaultValue={createData?.title} onChange={onChange}></Input></td>
              <td><Input name="className" defaultValue={createData?.className} onChange={onChange}></Input></td>
              <td><Input name="orderBy" defaultValue={createData?.orderBy} onChange={onChange}></Input></td>
              <td><Input name="hideYn" defaultValue={createData?.hideYn} onChange={onChange}></Input></td>
              <td>
                <Button onClick={() => createEvent()}>추가</Button>
              </td>
            </tr> 
        </tfoot>
      </Table>
    </div>
  )
}

export default AdminHeader