import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faGear } from "@fortawesome/free-solid-svg-icons";
// import { faGear } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import HeaderColumn from "./HeaderColumn";
import { useSelector } from "react-redux";
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
  Row,
} from "reactstrap";

export default function HeaderComponent({ toggleLogout, toggleLogin }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const movePage = (menu) => {
    navigate(menu);
  };


  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    // console.log(innerWidth);
  }, [innerWidth]);

  return (
    <>
      {innerWidth <= 750 ? (
        <div className="headerMobile">
          <Row>
            <Col style={{ width: "120%" }} sm={0}>
              <a
                className="nav nav-link"
                aria-current="page"
                href={process.env.REACT_APP_HOME_URL}
              >
                My.Dev{" "}
              </a>
            </Col>
            <Col style={{ width: "20%" }}>
              <div
                style={{
                  // border: "1px solid #000",
                  // height: 100,
                  overflow: "hidden",
                  padding: "8px",
                  // width: "300px",
                }}
              >
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret>메뉴 선택</DropdownToggle>
                  <DropdownMenu container="body">
                    {HeaderColumn.map((column, index) => (
                      <DropdownItem
                        key={index}
                        className={column.className}
                        onClick={() => movePage(column.linkPath)}
                      >
                        {column.title}
                      </DropdownItem>
                    ))}
                      {
                        // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
                        user.isLogin ? (
                          <DropdownItem className="nav-link" onClick={toggleLogout}>
                            로그아웃
                          </DropdownItem>
                        ) : (
                          <DropdownItem className="nav-link" onClick={toggleLogin}>
                            로그인
                          </DropdownItem>
                        )
                      }
                      {user.isLogin && (
                        <DropdownItem
                            className="nav-link"
                            onClick={() => {
                              window.location.href =
                                process.env.REACT_APP_HOME_URL + "/admin";
                            }}
                          >
                            관리자 페이지
                        </DropdownItem>
                      )}
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <div className="header">
          <Navbar className="navbar-expand-lg headerNavbar">
            <div className="nav container-fluid">
              <a
                className="nav nav-link"
                aria-current="page"
                href={process.env.REACT_APP_HOME_URL}
              >
                My.Dev{" "}
              </a>
              {/* 소개, 이력 및 기술, 프로젝트, 파트너 모집*/}
              {HeaderColumn.map((column, index) => (
                <li className="nav-item" key={index}>
                  <button
                    className={column.className}
                    onClick={() => movePage(column.linkPath)}
                  >
                    {column.title}
                  </button>
                </li>
              ))}
              <li className="nav-item ">
                {
                  // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
                  user.isLogin ? (
                    <button className="nav-link" onClick={toggleLogout}>
                      로그아웃
                    </button>
                  ) : (
                    // <button className="nav-link" onClick={() => openModal()}>
                    <button className="nav-link" onClick={toggleLogin}>
                      로그인
                    </button>
                  )
                }
                {user.isLogin && (
                  <li className="nav-item">
                    {/* <button className="nav-link" onClick={() => movePage("/admin")}> */}
                    <button
                      className="nav-link"
                      onClick={() => {
                        window.location.href =
                          process.env.REACT_APP_HOME_URL + "/admin";
                      }}
                    >
                      <FontAwesomeIcon icon={faGear} />
                    </button>
                  </li>
                )}
              </li>
            </div>
          </Navbar>
        </div>
      )}
    </>
  );
}
