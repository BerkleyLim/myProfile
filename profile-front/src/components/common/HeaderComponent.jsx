import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import styles from "./../../App.module.scss";
import URI from '../../util/URI';

export default function HeaderComponent({ toggleLogout, toggleLogin }) {
  const navigate = useNavigate();
  const [headerData, setHeaderData] = useState();
  const user = useSelector((state) => state.user);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const movePage = (menu) => {
    navigate(menu);
  };

  useEffect(() => {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/master/header/")
    .then((response) => {
      setHeaderData(response.data);
    })
    .catch((e) => {
      console.error(e)
    })
  },[])

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
            <Col>
              <Button
                size={"lg"}
                color="blank"
                style={{ width: "100%", textAlign: "left" }}
                onClick={() => {
                  window.location.href = process.env.REACT_APP_HOME_URL;
                }}
              >
                <span style={{color:"#fff"}}>CleanWare.INC</span>
              </Button>
            </Col>
            <Col>
              <div
                style={{
                  overflow: "hidden",
                  padding: "8px",
                }}
              >
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle color="blank" style={{color:"#fff", float:"right"} }caret><span style={{color:"#fff"}}>메뉴 선택</span></DropdownToggle>
                  <DropdownMenu container="body">
                    {headerData?.filter(d=>d.hideYn === 'Y').map((column, index) => (
                      <DropdownItem
                        key={index}
                        className={`${styles?.headerMenu}`}
                        onClick={() => movePage(column?.link)}
                      >
                        {column?.title}
                      </DropdownItem>
                    ))}
                    {
                      // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
                      user.isLogin ? (
                        <DropdownItem
                          onClick={toggleLogout}
                          className={`${styles?.headerMenu}`}
                        >
                          로그아웃
                        </DropdownItem>
                      ) : (
                        <DropdownItem
                          onClick={toggleLogin}
                          className={`${styles?.headerMenu}`}
                        >
                          로그인
                        </DropdownItem>
                      )
                    }
                    {user.isLogin && (
                      <DropdownItem
                        className={`${styles?.headerMenu}`}
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
                <span style={{color:"#fff"}}>CleanWare.INC</span>
              </Button>
            </Col>
            {
              // 소개, 이력 및 기술, 프로젝트, 파트너 모집
              headerData?.filter(d=>d.hideYn === 'Y').map((column, index) => (
                <Col key={index}>
                  <Button
                    color="blank"
                    size={"lg"}
                    className={`${styles?.headerMenu}`}
                    onClick={() => movePage(column?.link)}
                  >
                    <span style={{color:"#fff"}}>{column?.title}</span>
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
                  <span style={{color:"#fff"}}>로그아웃</span>
                </Button>
              ) : (
                <Button
                color="write"
                size={"lg"}
                style={{ width: "100%" }}
                onClick={toggleLogin}
                >
                  <span style={{color:"#fff"}}>로그인</span>
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
