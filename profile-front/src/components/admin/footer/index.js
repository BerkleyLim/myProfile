import React from 'react'

import MasterFooterMenu from './master/menu'
import MasterFooterInfo from './master/info'

const FooterAdmin = () => {
  return (
    <div>
      <h1>Footer 설정</h1>

      <h3>마스터 링크 메뉴 관리</h3>
      <MasterFooterMenu />

      <h3>링크 관리</h3>
      <MasterFooterInfo />
    </div>
  )
}

export default FooterAdmin