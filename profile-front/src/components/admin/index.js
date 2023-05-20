import React from 'react'
import"./index.scss"
import Menu from "./menu/index"
import { Route, Routes } from 'react-router-dom'

import AdminRequest from './request'
import AdminBoard from './board'

const Admin = () => {
  // console.log(window.location.href);
  // console.log(window.location.pathname);
  return (
    <div className="adminContainer">
      <div className="adminMenu">
        <Menu />
      </div>
      <div className="adminContents">
        <Routes>
            <Route path="/admin/board" element={<AdminBoard />} />
            <Route path="/admin/request" element={<AdminRequest />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin