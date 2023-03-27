import React from 'react'
import "./index.css"
import Menu from "./menu/index"
import SampleContents from "./samplecontents/index"
// import { Route, Routes } from "react-router-dom";

const Admin = () => {
  // console.log(window.location.href);
  // console.log(window.location.pathname);
  return (
    <div className="admin-container">
      <div className="admin-menu">
        <Menu />
      </div>
      <div className="admin-container">
        <SampleContents />
      </div>
    </div>
  )
}

export default Admin