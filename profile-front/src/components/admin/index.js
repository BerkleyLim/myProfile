import React from 'react'
import styles from "./admin.module.scss"
import Menu from "./menu/index"
import { Route, Routes } from 'react-router-dom'

import AdminRequest from './request'
import AdminBoard from './board'

const Admin = () => {
  return (
    <div className={`${styles?.adminContainer}`}>
      <div className={`${styles?.adminMenu}`}>
        <Menu />
      </div>
      <div className={`${styles?.adminContents}`}>
        <Routes>
            <Route path="/admin/board" element={<AdminBoard />} />
            <Route path="/admin/request" element={<AdminRequest />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin