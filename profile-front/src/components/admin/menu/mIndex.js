import React from "react";
import { useState } from "react";
import { ListUl } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const MAdminMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const navigate = useNavigate();
  const returnMain = () => {
    window.location.href = process.env.REACT_APP_HOME_URL + "/";
  };
  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="blank" caret>
          <ListUl />
        </DropdownToggle>
        <DropdownMenu container="body">
          <DropdownItem onClick={() => navigate("/admin/profile")}>
            프로필 관리
          </DropdownItem>
          <DropdownItem onClick={() => navigate("/admin/board")}>
            게시판/공지
          </DropdownItem>
          <DropdownItem onClick={() => navigate("/admin/request")}>
            의뢰목록
          </DropdownItem>
          <DropdownItem onClick={() => navigate("/admin/request")}>
            대쉬보드
          </DropdownItem>
          <DropdownItem onClick={() => returnMain()}>
            돌아가기
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default MAdminMenu;
