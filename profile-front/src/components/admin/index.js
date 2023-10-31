import React, { useEffect, useState } from 'react'
import styles from "./admin.module.scss"
import Menu from "./menu/index"
import MMenu from "./menu/mIndex"
import { Route, Routes } from 'react-router-dom'

import AdminHeader from './header'
import AdminRequest from './request'
import AdminBoard from './board'
import AdminFooter from './footer'
import AdminProject from './project'
import { Col, Row } from 'reactstrap'

const Admin = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  }, [innerWidth]);

  return (
    <> {
      innerWidth <= 750 ?
      <div className={`${styles?.mAdminContainer}`}>
        <Row className={`${styles?.mAdminHeader}`}>
          <Col className={`${styles?.mAdminHeaderLogo}`}>
            CleanWare.Inc
          </Col>
          <Col className={`${styles?.mAdminHeaderMenu}`}>
            <MMenu />
          </Col>
          <div className={`${styles?.mAdminContents}`}>
            <Routes>
                <Route path="/admin/header" element={<AdminHeader />} />
                <Route path="/admin/board" element={<AdminBoard />} />
                <Route path="/admin/board" element={<AdminBoard />} />
                <Route path="/admin/request" element={<AdminRequest />} />
                <Route path="/admin/footer" element={<AdminFooter />} />
            </Routes>
          </div>
        </Row>
      </div>
      :
    <div className={`${styles?.adminContainer}`}>
      <div className={`${styles?.adminMenu}`}>
        <Menu />
      </div>
      <div className={`${styles?.adminContents}`}>
        <Routes>
            <Route path="/admin/header" element={<AdminHeader />} />
            <Route path="/admin/board" element={<AdminBoard />} />
            <Route path="/admin/request" element={<AdminRequest />} />
            <Route path="/admin/footer" element={<AdminFooter />} />
            <Route path="/admin/project" element={<AdminProject />} />
        </Routes>
      </div>
    </div>

    }
    </>
  )
}

export default Admin