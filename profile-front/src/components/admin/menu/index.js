import React from 'react'

const AdminMenu = () => {
  const returnMain = () => {
    window.location.href = process.env.REACT_APP_HOME_URL + "/";
  }
  return (
    <div className="admin-menu-component">
      <h3 className="common-menu-layout">관리 메뉴</h3>
      <div className="common-menu-layout">
        <button className="common-menu-button">(관리자용) 회원 관리</button>
      </div>
      <div className="common-menu-layout">
        <button className="common-menu-button">프로필 관리</button>
      </div>
      <div className="common-menu-layout">
        <button className="common-menu-button">이력서 관리</button>
      </div>
      <div className="common-menu-layout">
        <button className="common-menu-button">button4</button>
      </div>
      <div className="common-menu-layout">
        <button className="common-menu-button">button5</button>
      </div>
      <p className="common-menu-layout" onClick={() => returnMain()}>돌아가기</p>
    </div>
  )
}

export default AdminMenu;