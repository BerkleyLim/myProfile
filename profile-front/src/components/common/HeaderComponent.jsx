import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faGear } from "@fortawesome/free-solid-svg-icons";
// import { faGear } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import HeaderColumn from "./HeaderColumn";
import { useSelector } from "react-redux";
import {
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  Row,
} from "reactstrap";
import styles from "./../../App.module.scss";

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
        <div className={`${styles?.headerMobile}`}>
          <Row>
            <Col style={{ width: "120%" }} sm={0}>
              <a aria-current="page" href={process.env.REACT_APP_HOME_URL}>
                CleanWare.INC
              </a>
            </Col>
            <Col style={{ width: "20%" }}>
              <div
                style={{
                  overflow: "hidden",
                  padding: "8px",
                }}
              >
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret>메뉴 선택</DropdownToggle>
                  <DropdownMenu container="body">
                    {HeaderColumn?.map((column, index) => (
                      <DropdownItem
                        key={index}
                        className={column?.className}
                        onClick={() => movePage(column?.linkPath)}
                      >
                        {column?.title}
                      </DropdownItem>
                    ))}
                    {
                      // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
                      user.isLogin ? (
                        <DropdownItem
                          className="nav-link"
                          onClick={toggleLogout}
                        >
                          로그아웃
                        </DropdownItem>
                      ) : (
                        <DropdownItem
                          className="nav-link"
                          onClick={toggleLogin}
                        >
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
        <div className={`${styles?.header}`}>
          <Row className={`${styles?.headerTitle}`}>
            <Col>
              <Button
                size={"lg"}
                color="blank"
                style={{ width: "100%", textAlign: "left" }}
                onClick={() => {
                  window.location.href = process.env.REACT_APP_HOME_URL;
                }}
              >
                CleanWare.INC
              </Button>
            </Col>
            {
              // 소개, 이력 및 기술, 프로젝트, 파트너 모집
              HeaderColumn?.map((column, index) => (
                <Col key={index}>
                  <Button
                    color="blank"
                    size={"lg"}
                    style={{ width: "100%" }}
                    // className={column?.className}
                    onClick={() => movePage(column?.linkPath)}
                  >
                    {column?.title}
                  </Button>
                </Col>
              ))
            }
            <Col>
              {user?.isLogin ? (
                <Button
                  color="write"
                  size={"lg"}
                  style={{ width: "100%" }}
                  onClick={toggleLogout}
                >
                  로그아웃
                </Button>
              ) : (
                <Button
                  color="write"
                  size={"lg"}
                  style={{ width: "100%" }}
                  onClick={toggleLogin}
                >
                  로그인
                </Button>
              )}
            </Col>
            {user.isLogin && (
              <Col>
                <Button
                  color="write"
                  size={"lg"}
                  style={{width:"100%"}}
                  onClick={() => {
                    window.location.href =
                      process.env.REACT_APP_HOME_URL + "/admin";
                  }}
                >
                  <FontAwesomeIcon icon={faGear} />
                </Button>
              </Col>
            )}
          </Row>
        </div>
      )}
    </>
  );
}
