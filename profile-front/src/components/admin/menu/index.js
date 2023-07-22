import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';

const AdminMenu = () => {
  const navigate = useNavigate();
  const returnMain = () => {
    window.location.href = process.env.REACT_APP_HOME_URL + "/";
  }
  return (
    <div>
      <ListGroup>
        <ListGroupItemHeading>관리 메뉴</ListGroupItemHeading>
          <ListGroupItem active tag="button" action>(관리자용) 회원 관리</ListGroupItem>
          <ListGroupItem tag="button" onClick={() => navigate("/admin/profile")}  action>프로필 관리</ListGroupItem>
          <ListGroupItem tag="button" onClick={() => navigate("/admin/board")} action>게시판/공지</ListGroupItem>
          <ListGroupItem tag="button" onClick={() => navigate("/admin/request")} action>의뢰 목록</ListGroupItem>
          <ListGroupItem tag="button" onClick={() => navigate("/admin/dashboard")} action>대쉬보드</ListGroupItem>
          <ListGroupItem tag="button" onClick={() => {returnMain()}} action>돌아가기</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default AdminMenu;