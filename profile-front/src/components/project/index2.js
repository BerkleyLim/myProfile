import React, { useEffect, useState } from "react";
import "./index2.css";

export default function ProjectComponent() {
  return (
    <div>
      <article id="34852c52-9118-4d0a-a893-bcb31b647e65" className="page sans">
        <header>
          <img
            className="page-cover-image"
            src="https://www.notion.so/images/page-cover/solid_yellow.png"
            style={{objectPosition:"center 40%"}}
          />
          <div className="page-header-icon page-header-icon-with-cover">
            <span className="icon">👋</span>
          </div>
          <h1 className="page-title">포트폴리오</h1>
          <p className="page-description"></p>
        </header>
        <div className="page-body">
          <blockquote id="17ec1a52-4c5f-45e8-bc83-9e9f09f6875a" className="">
            👋 안녕하세요, React 및 Spring Boot 개발자 <strong>Berkley</strong>{" "}
            입니다. 현재 React 우선으로 개발을 진행 하고 있으며, Spring 및
            Spring Boot 개발 부분에 있어서 GitHub 프로젝트를 통해 개발 상황을
            올릴 예정입니다. <br/>
            <a href={process.env.REACT_APP_NOTION_PORTFOLIO_V2}>편하게 보기</a>
          </blockquote>
          <p id="f946b724-814c-4458-b592-31bf7e7b497d" className=""></p>
          <div
            id="3906120f-95c4-430a-be23-cf4506287588"
            className="collection-content"
          >
            <h4 className="collection-title">사이드 프로젝트</h4>
            <table className="collection-content">
              <thead>
                <tr>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:"0", "-webkit-backface-visibility":"hidden"}}
                        className="typesTitle"
                      >
                        <path d="M0.637695 13.1914C1.0957 13.1914 1.32812 13 1.47852 12.5215L2.24414 10.3887H6.14746L6.90625 12.5215C7.05664 13 7.2959 13.1914 7.74707 13.1914C8.22559 13.1914 8.5332 12.9043 8.5332 12.4531C8.5332 12.2891 8.50586 12.1523 8.44434 11.9678L5.41602 3.79199C5.2041 3.21777 4.82129 2.9375 4.19922 2.9375C3.60449 2.9375 3.21484 3.21777 3.0166 3.78516L-0.0322266 12.002C-0.09375 12.1797 -0.121094 12.3232 -0.121094 12.4668C-0.121094 12.918 0.166016 13.1914 0.637695 13.1914ZM2.63379 9.12402L4.17871 4.68066H4.21973L5.76465 9.12402H2.63379ZM12.2793 13.2324C13.3115 13.2324 14.2891 12.6787 14.7129 11.8037H14.7402V12.5762C14.7471 12.9863 15.0273 13.2393 15.4238 13.2393C15.834 13.2393 16.1143 12.9795 16.1143 12.5215V8.00977C16.1143 6.49902 14.9658 5.52148 13.1543 5.52148C11.7666 5.52148 10.6592 6.08887 10.2695 6.99121C10.1943 7.15527 10.1533 7.3125 10.1533 7.46289C10.1533 7.81152 10.4062 8.04395 10.7686 8.04395C11.0215 8.04395 11.2129 7.94824 11.3496 7.73633C11.7529 6.99121 12.2861 6.65625 13.1064 6.65625C14.0977 6.65625 14.6992 7.20996 14.6992 8.1123V8.67285L12.5664 8.7959C10.7686 8.8916 9.77734 9.69824 9.77734 11.0107C9.77734 12.3369 10.8096 13.2324 12.2793 13.2324ZM12.6621 12.1387C11.8008 12.1387 11.2129 11.667 11.2129 10.9561C11.2129 10.2725 11.7598 9.82129 12.7578 9.75977L14.6992 9.62988V10.3203C14.6992 11.3457 13.7969 12.1387 12.6621 12.1387Z"></path>
                      </svg>
                    </span>
                    이름
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <img
                        src="https://www.notion.so/icons/dashboard_gray.svg"
                        style={{width:"14px", height:"14px"}}
                      />
                    </span>
                    Blog
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:"0", "-webkit-backface-visibility":"hidden"}}
                        className="typesUrl"
                      >
                        <path d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"></path>
                      </svg>
                    </span>
                    URL
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:"0", "-webkit-backface-visibility":"hidden"}}
                        className="typesDate"
                      >
                        <path d="M3.29688 14.4561H12.7031C14.1797 14.4561 14.9453 13.6904 14.9453 12.2344V3.91504C14.9453 2.45215 14.1797 1.69336 12.7031 1.69336H3.29688C1.82031 1.69336 1.05469 2.45215 1.05469 3.91504V12.2344C1.05469 13.6973 1.82031 14.4561 3.29688 14.4561ZM3.27637 13.1162C2.70898 13.1162 2.39453 12.8154 2.39453 12.2207V5.9043C2.39453 5.30273 2.70898 5.00879 3.27637 5.00879H12.71C13.2842 5.00879 13.6055 5.30273 13.6055 5.9043V12.2207C13.6055 12.8154 13.2842 13.1162 12.71 13.1162H3.27637ZM6.68066 7.38086H7.08398C7.33008 7.38086 7.41211 7.30566 7.41211 7.05957V6.66309C7.41211 6.41699 7.33008 6.3418 7.08398 6.3418H6.68066C6.44141 6.3418 6.35938 6.41699 6.35938 6.66309V7.05957C6.35938 7.30566 6.44141 7.38086 6.68066 7.38086ZM8.92285 7.38086H9.31934C9.56543 7.38086 9.64746 7.30566 9.64746 7.05957V6.66309C9.64746 6.41699 9.56543 6.3418 9.31934 6.3418H8.92285C8.67676 6.3418 8.59473 6.41699 8.59473 6.66309V7.05957C8.59473 7.30566 8.67676 7.38086 8.92285 7.38086ZM11.1582 7.38086H11.5547C11.8008 7.38086 11.8828 7.30566 11.8828 7.05957V6.66309C11.8828 6.41699 11.8008 6.3418 11.5547 6.3418H11.1582C10.9121 6.3418 10.8301 6.41699 10.8301 6.66309V7.05957C10.8301 7.30566 10.9121 7.38086 11.1582 7.38086ZM4.44531 9.58203H4.84863C5.09473 9.58203 5.17676 9.50684 5.17676 9.26074V8.86426C5.17676 8.61816 5.09473 8.54297 4.84863 8.54297H4.44531C4.20605 8.54297 4.12402 8.61816 4.12402 8.86426V9.26074C4.12402 9.50684 4.20605 9.58203 4.44531 9.58203ZM6.68066 9.58203H7.08398C7.33008 9.58203 7.41211 9.50684 7.41211 9.26074V8.86426C7.41211 8.61816 7.33008 8.54297 7.08398 8.54297H6.68066C6.44141 8.54297 6.35938 8.61816 6.35938 8.86426V9.26074C6.35938 9.50684 6.44141 9.58203 6.68066 9.58203ZM8.92285 9.58203H9.31934C9.56543 9.58203 9.64746 9.50684 9.64746 9.26074V8.86426C9.64746 8.61816 9.56543 8.54297 9.31934 8.54297H8.92285C8.67676 8.54297 8.59473 8.61816 8.59473 8.86426V9.26074C8.59473 9.50684 8.67676 9.58203 8.92285 9.58203ZM11.1582 9.58203H11.5547C11.8008 9.58203 11.8828 9.50684 11.8828 9.26074V8.86426C11.8828 8.61816 11.8008 8.54297 11.5547 8.54297H11.1582C10.9121 8.54297 10.8301 8.61816 10.8301 8.86426V9.26074C10.8301 9.50684 10.9121 9.58203 11.1582 9.58203ZM4.44531 11.7832H4.84863C5.09473 11.7832 5.17676 11.708 5.17676 11.4619V11.0654C5.17676 10.8193 5.09473 10.7441 4.84863 10.7441H4.44531C4.20605 10.7441 4.12402 10.8193 4.12402 11.0654V11.4619C4.12402 11.708 4.20605 11.7832 4.44531 11.7832ZM6.68066 11.7832H7.08398C7.33008 11.7832 7.41211 11.708 7.41211 11.4619V11.0654C7.41211 10.8193 7.33008 10.7441 7.08398 10.7441H6.68066C6.44141 10.7441 6.35938 10.8193 6.35938 11.0654V11.4619C6.35938 11.708 6.44141 11.7832 6.68066 11.7832ZM8.92285 11.7832H9.31934C9.56543 11.7832 9.64746 11.708 9.64746 11.4619V11.0654C9.64746 10.8193 9.56543 10.7441 9.31934 10.7441H8.92285C8.67676 10.7441 8.59473 10.8193 8.59473 11.0654V11.4619C8.59473 11.708 8.67676 11.7832 8.92285 11.7832Z"></path>
                      </svg>
                    </span>
                    날짜
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:"0", "-webkit-backface-visibility":"hidden"}}
                        className="typesCreatedAt"
                      >
                        <path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM4.54102 8.91211H7.99316C8.30078 8.91211 8.54004 8.67285 8.54004 8.37207V3.8877C8.54004 3.58691 8.30078 3.34766 7.99316 3.34766C7.69238 3.34766 7.45312 3.58691 7.45312 3.8877V7.83203H4.54102C4.2334 7.83203 4.00098 8.06445 4.00098 8.37207C4.00098 8.67285 4.2334 8.91211 4.54102 8.91211Z"></path>
                      </svg>
                    </span>
                    생성 일시
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:"0", "-webkit-backface-visibility":"hidden"}}
                        className="typesUrl"
                      >
                        <path d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"></path>
                      </svg>
                    </span>
                    저장소
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:"0", "-webkit-backface-visibility":"hidden"}}
                        className="typesMultipleSelect"
                      >
                        <path d="M1.91602 4.83789C2.44238 4.83789 2.87305 4.40723 2.87305 3.87402C2.87305 3.34766 2.44238 2.91699 1.91602 2.91699C1.38281 2.91699 0.952148 3.34766 0.952148 3.87402C0.952148 4.40723 1.38281 4.83789 1.91602 4.83789ZM5.1084 4.52344H14.3984C14.7607 4.52344 15.0479 4.23633 15.0479 3.87402C15.0479 3.51172 14.7607 3.22461 14.3984 3.22461H5.1084C4.74609 3.22461 4.45898 3.51172 4.45898 3.87402C4.45898 4.23633 4.74609 4.52344 5.1084 4.52344ZM1.91602 9.03516C2.44238 9.03516 2.87305 8.60449 2.87305 8.07129C2.87305 7.54492 2.44238 7.11426 1.91602 7.11426C1.38281 7.11426 0.952148 7.54492 0.952148 8.07129C0.952148 8.60449 1.38281 9.03516 1.91602 9.03516ZM5.1084 8.7207H14.3984C14.7607 8.7207 15.0479 8.43359 15.0479 8.07129C15.0479 7.70898 14.7607 7.42188 14.3984 7.42188H5.1084C4.74609 7.42188 4.45898 7.70898 4.45898 8.07129C4.45898 8.43359 4.74609 8.7207 5.1084 8.7207ZM1.91602 13.2324C2.44238 13.2324 2.87305 12.8018 2.87305 12.2686C2.87305 11.7422 2.44238 11.3115 1.91602 11.3115C1.38281 11.3115 0.952148 11.7422 0.952148 12.2686C0.952148 12.8018 1.38281 13.2324 1.91602 13.2324ZM5.1084 12.918H14.3984C14.7607 12.918 15.0479 12.6309 15.0479 12.2686C15.0479 11.9062 14.7607 11.6191 14.3984 11.6191H5.1084C4.74609 11.6191 4.45898 11.9062 4.45898 12.2686C4.45898 12.6309 4.74609 12.918 5.1084 12.918Z"></path>
                      </svg>
                    </span>
                    태그
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr id="04b4a923-2e83-410a-8cbb-ea0987b40009">
                  <td className="cell-title">
                    <a href="https://www.notion.so/CLNEWZE-04b4a9232e83410a8cbbea0987b40009?pvs=21">
                      CLNEWZE
                    </a>
                  </td>
                  <td className="cell-Xt_Z"></td>
                  <td className="cell-fN=H"></td>
                  <td className="cell-^XIj"></td>
                  <td className="cell-gqb&gt;">
                    <time>@2023년 7월 10일 오후 9:28</time>
                  </td>
                  <td className="cell-jKUS">
                    <a
                      href="https://github.com/BerkleyLim/CLNEWZE"
                      className="url-value"
                    >
                      https://github.com/BerkleyLim/CLNEWZE
                    </a>
                  </td>
                  <td className="cell-exW_">
                    <span className="selected-value select-value-color-orange">
                      AWS
                    </span>
                    <span className="selected-value select-value-color-orange">
                      React
                    </span>
                    <span className="selected-value select-value-color-orange">
                      Spring boot
                    </span>
                    <span className="selected-value select-value-color-green">
                      UI/UX
                    </span>
                    <span className="selected-value select-value-color-pink">
                      css
                    </span>
                    <span className="selected-value select-value-color-red">
                      dbeaver
                    </span>
                    <span className="selected-value select-value-color-blue">
                      git
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      html
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      java
                    </span>
                    <span className="selected-value select-value-color-blue">
                      javascript
                    </span>
                    <span className="selected-value select-value-color-green">
                      json
                    </span>
                    <span className="selected-value select-value-color-green">
                      mariadb
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      my-batis
                    </span>
                    <span className="selected-value select-value-color-green">
                      mysql
                    </span>
                    <span className="selected-value select-value-color-purple">
                      nginx
                    </span>
                    <span className="selected-value select-value-color-blue">
                      redux
                    </span>
                    <span className="selected-value select-value-color-green">
                      scss
                    </span>
                    <span className="selected-value select-value-color-purple">
                      vscode
                    </span>
                    <span className="selected-value select-value-color-gray">
                      xml
                    </span>
                    <span className="selected-value select-value-color-blue">
                      반응형웹&amp;앱
                    </span>
                    <span className="selected-value select-value-color-pink">
                      프론트엔드
                    </span>
                  </td>
                </tr>
                <tr id="bb148799-6655-4633-951d-2fede847f326">
                  <td className="cell-title">
                    <a href="https://www.notion.so/Profile-bb14879966554633951d2fede847f326?pvs=21">
                      <span className="icon">🎨</span>Profile
                    </a>
                  </td>
                  <td className="cell-Xt_Z"></td>
                  <td className="cell-fN=H">
                    <a href="http://www.berkleylim.link" className="url-value">
                      http://www.berkleylim.link
                    </a>
                  </td>
                  <td className="cell-^XIj">
                    <time>@2023년 5월 26일</time>
                  </td>
                  <td className="cell-gqb&gt;">
                    <time>@2023년 3월 29일 오후 5:44</time>
                  </td>
                  <td className="cell-jKUS">
                    <a
                      href="https://github.com/BerkleyLim/profile"
                      className="url-value"
                    >
                      https://github.com/BerkleyLim/profile
                    </a>
                  </td>
                  <td className="cell-exW_">
                    <span className="selected-value select-value-color-orange">
                      AWS
                    </span>
                    <span className="selected-value select-value-color-orange">
                      React
                    </span>
                    <span className="selected-value select-value-color-orange">
                      Spring boot
                    </span>
                    <span className="selected-value select-value-color-green">
                      UI/UX
                    </span>
                    <span className="selected-value select-value-color-red">
                      dbeaver
                    </span>
                    <span className="selected-value select-value-color-gray">
                      draft.js
                    </span>
                    <span className="selected-value select-value-color-blue">
                      git
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      html
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      java
                    </span>
                    <span className="selected-value select-value-color-blue">
                      javascript
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      jpa
                    </span>
                    <span className="selected-value select-value-color-green">
                      json
                    </span>
                    <span className="selected-value select-value-color-green">
                      mariadb
                    </span>
                    <span className="selected-value select-value-color-green">
                      mysql
                    </span>
                    <span className="selected-value select-value-color-purple">
                      nginx
                    </span>
                    <span className="selected-value select-value-color-blue">
                      redux
                    </span>
                    <span className="selected-value select-value-color-green">
                      scss
                    </span>
                    <span className="selected-value select-value-color-purple">
                      vscode
                    </span>
                    <span className="selected-value select-value-color-pink">
                      프론트엔드
                    </span>
                  </td>
                </tr>
                <tr id="44dfac3a-faff-4965-9cab-cec71e39d779">
                  <td className="cell-title">
                    <a href="https://www.notion.so/Interior-44dfac3afaff49659cabcec71e39d779?pvs=21">
                      <span className="icon">🖼️</span>Interior
                    </a>
                  </td>
                  <td className="cell-Xt_Z"></td>
                  <td className="cell-fN=H"></td>
                  <td className="cell-^XIj"></td>
                  <td className="cell-gqb&gt;">
                    <time>@2023년 3월 29일 오후 5:44</time>
                  </td>
                  <td className="cell-jKUS">
                    <a
                      href="https://github.com/BerkleyLim/interior_test"
                      className="url-value"
                    >
                      https://github.com/BerkleyLim/interior_test
                    </a>
                  </td>
                  <td className="cell-exW_">
                    <span className="selected-value select-value-color-orange">
                      AWS
                    </span>
                    <span className="selected-value select-value-color-orange">
                      Spring boot
                    </span>
                    <span className="selected-value select-value-color-green">
                      UI/UX
                    </span>
                    <span className="selected-value select-value-color-blue">
                      git
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      java
                    </span>
                    <span className="selected-value select-value-color-blue">
                      javascript
                    </span>
                    <span className="selected-value select-value-color-green">
                      jquery
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
          </div>
          <p id="a30c40e8-c2a6-4708-bf57-45519ebaf574" className=""></p>
          <p id="9302e118-ecf2-4eac-99c9-1387cbb657b6" className=""></p>
          <hr id="b02dd0ae-216c-40e8-bc60-3c817be9b68c" />
          <p id="8df1f096-5d4e-47da-ada9-746731b71ec8" className=""></p>
          <div
            id="5889cb84-4f44-44de-9a0b-04f49d18063e"
            className="collection-content"
          >
            <h4 className="collection-title">Github 토이 프로젝트</h4>
            <table className="collection-content">
              <thead>
                <tr>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:"0", "-webkit-backface-visibility":"hidden"}}
                        className="typesTitle"
                      >
                        <path d="M0.637695 13.1914C1.0957 13.1914 1.32812 13 1.47852 12.5215L2.24414 10.3887H6.14746L6.90625 12.5215C7.05664 13 7.2959 13.1914 7.74707 13.1914C8.22559 13.1914 8.5332 12.9043 8.5332 12.4531C8.5332 12.2891 8.50586 12.1523 8.44434 11.9678L5.41602 3.79199C5.2041 3.21777 4.82129 2.9375 4.19922 2.9375C3.60449 2.9375 3.21484 3.21777 3.0166 3.78516L-0.0322266 12.002C-0.09375 12.1797 -0.121094 12.3232 -0.121094 12.4668C-0.121094 12.918 0.166016 13.1914 0.637695 13.1914ZM2.63379 9.12402L4.17871 4.68066H4.21973L5.76465 9.12402H2.63379ZM12.2793 13.2324C13.3115 13.2324 14.2891 12.6787 14.7129 11.8037H14.7402V12.5762C14.7471 12.9863 15.0273 13.2393 15.4238 13.2393C15.834 13.2393 16.1143 12.9795 16.1143 12.5215V8.00977C16.1143 6.49902 14.9658 5.52148 13.1543 5.52148C11.7666 5.52148 10.6592 6.08887 10.2695 6.99121C10.1943 7.15527 10.1533 7.3125 10.1533 7.46289C10.1533 7.81152 10.4062 8.04395 10.7686 8.04395C11.0215 8.04395 11.2129 7.94824 11.3496 7.73633C11.7529 6.99121 12.2861 6.65625 13.1064 6.65625C14.0977 6.65625 14.6992 7.20996 14.6992 8.1123V8.67285L12.5664 8.7959C10.7686 8.8916 9.77734 9.69824 9.77734 11.0107C9.77734 12.3369 10.8096 13.2324 12.2793 13.2324ZM12.6621 12.1387C11.8008 12.1387 11.2129 11.667 11.2129 10.9561C11.2129 10.2725 11.7598 9.82129 12.7578 9.75977L14.6992 9.62988V10.3203C14.6992 11.3457 13.7969 12.1387 12.6621 12.1387Z"></path>
                      </svg>
                    </span>
                    이름
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <img
                        src="https://www.notion.so/icons/dashboard_gray.svg"
                        style={{width:"14px", height:"14px"}}
                      />
                    </span>
                    Blog
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:"0", "-webkit-backface-visibility":"hidden"}}
                        className="typesUrl"
                      >
                        <path d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"></path>
                      </svg>
                    </span>
                    URL
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:"0", "-webkit-backface-visibility":"hidden"}}
                        className="typesDate"
                      >
                        <path d="M3.29688 14.4561H12.7031C14.1797 14.4561 14.9453 13.6904 14.9453 12.2344V3.91504C14.9453 2.45215 14.1797 1.69336 12.7031 1.69336H3.29688C1.82031 1.69336 1.05469 2.45215 1.05469 3.91504V12.2344C1.05469 13.6973 1.82031 14.4561 3.29688 14.4561ZM3.27637 13.1162C2.70898 13.1162 2.39453 12.8154 2.39453 12.2207V5.9043C2.39453 5.30273 2.70898 5.00879 3.27637 5.00879H12.71C13.2842 5.00879 13.6055 5.30273 13.6055 5.9043V12.2207C13.6055 12.8154 13.2842 13.1162 12.71 13.1162H3.27637ZM6.68066 7.38086H7.08398C7.33008 7.38086 7.41211 7.30566 7.41211 7.05957V6.66309C7.41211 6.41699 7.33008 6.3418 7.08398 6.3418H6.68066C6.44141 6.3418 6.35938 6.41699 6.35938 6.66309V7.05957C6.35938 7.30566 6.44141 7.38086 6.68066 7.38086ZM8.92285 7.38086H9.31934C9.56543 7.38086 9.64746 7.30566 9.64746 7.05957V6.66309C9.64746 6.41699 9.56543 6.3418 9.31934 6.3418H8.92285C8.67676 6.3418 8.59473 6.41699 8.59473 6.66309V7.05957C8.59473 7.30566 8.67676 7.38086 8.92285 7.38086ZM11.1582 7.38086H11.5547C11.8008 7.38086 11.8828 7.30566 11.8828 7.05957V6.66309C11.8828 6.41699 11.8008 6.3418 11.5547 6.3418H11.1582C10.9121 6.3418 10.8301 6.41699 10.8301 6.66309V7.05957C10.8301 7.30566 10.9121 7.38086 11.1582 7.38086ZM4.44531 9.58203H4.84863C5.09473 9.58203 5.17676 9.50684 5.17676 9.26074V8.86426C5.17676 8.61816 5.09473 8.54297 4.84863 8.54297H4.44531C4.20605 8.54297 4.12402 8.61816 4.12402 8.86426V9.26074C4.12402 9.50684 4.20605 9.58203 4.44531 9.58203ZM6.68066 9.58203H7.08398C7.33008 9.58203 7.41211 9.50684 7.41211 9.26074V8.86426C7.41211 8.61816 7.33008 8.54297 7.08398 8.54297H6.68066C6.44141 8.54297 6.35938 8.61816 6.35938 8.86426V9.26074C6.35938 9.50684 6.44141 9.58203 6.68066 9.58203ZM8.92285 9.58203H9.31934C9.56543 9.58203 9.64746 9.50684 9.64746 9.26074V8.86426C9.64746 8.61816 9.56543 8.54297 9.31934 8.54297H8.92285C8.67676 8.54297 8.59473 8.61816 8.59473 8.86426V9.26074C8.59473 9.50684 8.67676 9.58203 8.92285 9.58203ZM11.1582 9.58203H11.5547C11.8008 9.58203 11.8828 9.50684 11.8828 9.26074V8.86426C11.8828 8.61816 11.8008 8.54297 11.5547 8.54297H11.1582C10.9121 8.54297 10.8301 8.61816 10.8301 8.86426V9.26074C10.8301 9.50684 10.9121 9.58203 11.1582 9.58203ZM4.44531 11.7832H4.84863C5.09473 11.7832 5.17676 11.708 5.17676 11.4619V11.0654C5.17676 10.8193 5.09473 10.7441 4.84863 10.7441H4.44531C4.20605 10.7441 4.12402 10.8193 4.12402 11.0654V11.4619C4.12402 11.708 4.20605 11.7832 4.44531 11.7832ZM6.68066 11.7832H7.08398C7.33008 11.7832 7.41211 11.708 7.41211 11.4619V11.0654C7.41211 10.8193 7.33008 10.7441 7.08398 10.7441H6.68066C6.44141 10.7441 6.35938 10.8193 6.35938 11.0654V11.4619C6.35938 11.708 6.44141 11.7832 6.68066 11.7832ZM8.92285 11.7832H9.31934C9.56543 11.7832 9.64746 11.708 9.64746 11.4619V11.0654C9.64746 10.8193 9.56543 10.7441 9.31934 10.7441H8.92285C8.67676 10.7441 8.59473 10.8193 8.59473 11.0654V11.4619C8.59473 11.708 8.67676 11.7832 8.92285 11.7832Z"></path>
                      </svg>
                    </span>
                    날짜
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:"0", "-webkit-backface-visibility":"hidden"}}
                        className="typesCreatedAt"
                      >
                        <path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM4.54102 8.91211H7.99316C8.30078 8.91211 8.54004 8.67285 8.54004 8.37207V3.8877C8.54004 3.58691 8.30078 3.34766 7.99316 3.34766C7.69238 3.34766 7.45312 3.58691 7.45312 3.8877V7.83203H4.54102C4.2334 7.83203 4.00098 8.06445 4.00098 8.37207C4.00098 8.67285 4.2334 8.91211 4.54102 8.91211Z"></path>
                      </svg>
                    </span>
                    생성 일시
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:"0", "-webkit-backface-visibility":"hidden"}}
                        className="typesUrl"
                      >
                        <path d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"></path>
                      </svg>
                    </span>
                    저장소
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:"0", "-webkit-backface-visibility":"hidden"}}
                        className="typesMultipleSelect"
                      >
                        <path d="M1.91602 4.83789C2.44238 4.83789 2.87305 4.40723 2.87305 3.87402C2.87305 3.34766 2.44238 2.91699 1.91602 2.91699C1.38281 2.91699 0.952148 3.34766 0.952148 3.87402C0.952148 4.40723 1.38281 4.83789 1.91602 4.83789ZM5.1084 4.52344H14.3984C14.7607 4.52344 15.0479 4.23633 15.0479 3.87402C15.0479 3.51172 14.7607 3.22461 14.3984 3.22461H5.1084C4.74609 3.22461 4.45898 3.51172 4.45898 3.87402C4.45898 4.23633 4.74609 4.52344 5.1084 4.52344ZM1.91602 9.03516C2.44238 9.03516 2.87305 8.60449 2.87305 8.07129C2.87305 7.54492 2.44238 7.11426 1.91602 7.11426C1.38281 7.11426 0.952148 7.54492 0.952148 8.07129C0.952148 8.60449 1.38281 9.03516 1.91602 9.03516ZM5.1084 8.7207H14.3984C14.7607 8.7207 15.0479 8.43359 15.0479 8.07129C15.0479 7.70898 14.7607 7.42188 14.3984 7.42188H5.1084C4.74609 7.42188 4.45898 7.70898 4.45898 8.07129C4.45898 8.43359 4.74609 8.7207 5.1084 8.7207ZM1.91602 13.2324C2.44238 13.2324 2.87305 12.8018 2.87305 12.2686C2.87305 11.7422 2.44238 11.3115 1.91602 11.3115C1.38281 11.3115 0.952148 11.7422 0.952148 12.2686C0.952148 12.8018 1.38281 13.2324 1.91602 13.2324ZM5.1084 12.918H14.3984C14.7607 12.918 15.0479 12.6309 15.0479 12.2686C15.0479 11.9062 14.7607 11.6191 14.3984 11.6191H5.1084C4.74609 11.6191 4.45898 11.9062 4.45898 12.2686C4.45898 12.6309 4.74609 12.918 5.1084 12.918Z"></path>
                      </svg>
                    </span>
                    태그
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr id="624c36f3-0866-44fc-b53c-e4aed4855473">
                  <td className="cell-title">
                    <a href="https://www.notion.so/React-CRUD-API-Spring-Boot-624c36f3086644fcb53ce4aed4855473?pvs=21">
                      React 기반 게시판 - CRUD 프로젝트 (API : Spring Boot)
                    </a>
                  </td>
                  <td className="cell-Xt_Z"></td>
                  <td className="cell-fN=H"></td>
                  <td className="cell-^XIj">
                    <time>@2023년 7월 16일</time>
                  </td>
                  <td className="cell-gqb&gt;">
                    <time>@2023년 7월 20일 오후 10:04</time>
                  </td>
                  <td className="cell-jKUS">
                    <a
                      href="https://github.com/BerkleyLim/project_board"
                      className="url-value"
                    >
                      https://github.com/BerkleyLim/project_board
                    </a>
                  </td>
                  <td className="cell-exW_">
                    <span className="selected-value select-value-color-red">
                      Mybatis
                    </span>
                    <span className="selected-value select-value-color-orange">
                      React
                    </span>
                    <span className="selected-value select-value-color-orange">
                      Spring boot
                    </span>
                    <span className="selected-value select-value-color-green">
                      UI/UX
                    </span>
                    <span className="selected-value select-value-color-default">
                      bootstrap
                    </span>
                    <span className="selected-value select-value-color-pink">
                      css
                    </span>
                    <span className="selected-value select-value-color-blue">
                      git
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      html
                    </span>
                    <span className="selected-value select-value-color-red">
                      immutability-helper
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      java
                    </span>
                    <span className="selected-value select-value-color-blue">
                      javascript
                    </span>
                    <span className="selected-value select-value-color-green">
                      json
                    </span>
                    <span className="selected-value select-value-color-purple">
                      reactstrap
                    </span>
                  </td>
                </tr>
                <tr id="937c5190-b051-454b-9d19-604ef2a2ae5d">
                  <td className="cell-title">
                    <a href="https://www.notion.so/React-TodoList-937c5190b051454b9d19604ef2a2ae5d?pvs=21">
                      React 기반 TodoList 반응형 웹&amp;앱
                    </a>
                  </td>
                  <td className="cell-Xt_Z">
                    <a
                      href="https://berkley.tistory.com/category/Github%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/todolist%EB%B0%98%EC%9D%91%ED%98%95%EC%9B%B9%EC%95%B1"
                      className="url-value"
                    >
                      이동
                    </a>
                  </td>
                  <td className="cell-fN=H"></td>
                  <td className="cell-^XIj">
                    <time>@2023년 6월 10일</time>
                  </td>
                  <td className="cell-gqb&gt;">
                    <time>@2023년 7월 20일 오후 10:04</time>
                  </td>
                  <td className="cell-jKUS">
                    <a
                      href="https://github.com/BerkleyLim/Todolist"
                      className="url-value"
                    >
                      https://github.com/BerkleyLim/Todolist
                    </a>
                  </td>
                  <td className="cell-exW_">
                    <span className="selected-value select-value-color-orange">
                      React
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      TodoList
                    </span>
                    <span className="selected-value select-value-color-pink">
                      css
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      html
                    </span>
                    <span className="selected-value select-value-color-blue">
                      javascript
                    </span>
                    <span className="selected-value select-value-color-blue">
                      redux
                    </span>
                    <span className="selected-value select-value-color-blue">
                      반응형웹&amp;앱
                    </span>
                    <span className="selected-value select-value-color-pink">
                      프론트엔드
                    </span>
                  </td>
                </tr>
                <tr id="49ae4273-f106-4f7a-a22d-341d65d511bc">
                  <td className="cell-title">
                    <a href="https://www.notion.so/React-API-Spring-Boot-MyBatis-49ae4273f1064f7aa22d341d65d511bc?pvs=21">
                      React 기반 무한 스크롤 (API Spring Boot - MyBatis 활용)
                    </a>
                  </td>
                  <td className="cell-Xt_Z"></td>
                  <td className="cell-fN=H"></td>
                  <td className="cell-^XIj">
                    <time>@2023년 7월 10일</time>
                  </td>
                  <td className="cell-gqb&gt;">
                    <time>@2023년 7월 20일 오후 10:04</time>
                  </td>
                  <td className="cell-jKUS">
                    <a
                      href="https://github.com/BerkleyLim/scroll_project"
                      className="url-value"
                    >
                      https://github.com/BerkleyLim/scroll_project
                    </a>
                  </td>
                  <td className="cell-exW_">
                    <span className="selected-value select-value-color-red">
                      Mybatis
                    </span>
                    <span className="selected-value select-value-color-orange">
                      React
                    </span>
                    <span className="selected-value select-value-color-orange">
                      Spring boot
                    </span>
                    <span className="selected-value select-value-color-default">
                      bootstrap
                    </span>
                    <span className="selected-value select-value-color-blue">
                      git
                    </span>
                    <span className="selected-value select-value-color-red">
                      immutability-helper
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      java
                    </span>
                    <span className="selected-value select-value-color-blue">
                      javascript
                    </span>
                    <span className="selected-value select-value-color-purple">
                      react-intersection-observer
                    </span>
                    <span className="selected-value select-value-color-purple">
                      reactstrap
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
          </div>
          <p id="1a316c7f-2395-409c-8bc4-6c4ab4766130" className=""></p>
        </div>
      </article>
      {/* <article>
        <div className="page-body">
          <p id="d15ce54a-7d73-44f7-9505-aaf6be53e0aa" className=""></p>
          <blockquote id="17ec1a52-4c5f-45e8-bc83-9e9f09f6875a" className="">
            👋 안녕하세요, 주니어 웹 개발자 <strong>Berkley</strong> 입니다.
          </blockquote>
          <p id="0dfe6ee1-ab07-41c8-9dea-acaa87a194aa" className=""></p>
          <div
            id="3906120f-95c4-430a-be23-cf4506287588"
            className="collection-content"
          >
            <h4 className="collection-title">프로젝트(포트폴리오)</h4>
            <table className="collection-content">
              <thead>
                <tr>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "block",
                          fill: "rgba(55, 53, 47, 0.45)",
                          flexShrink: 0,
                          "-webkit-backface-visibility": "hidden",
                        }}
                        className="typesTitle"
                      >
                        <path d="M0.637695 13.1914C1.0957 13.1914 1.32812 13 1.47852 12.5215L2.24414 10.3887H6.14746L6.90625 12.5215C7.05664 13 7.2959 13.1914 7.74707 13.1914C8.22559 13.1914 8.5332 12.9043 8.5332 12.4531C8.5332 12.2891 8.50586 12.1523 8.44434 11.9678L5.41602 3.79199C5.2041 3.21777 4.82129 2.9375 4.19922 2.9375C3.60449 2.9375 3.21484 3.21777 3.0166 3.78516L-0.0322266 12.002C-0.09375 12.1797 -0.121094 12.3232 -0.121094 12.4668C-0.121094 12.918 0.166016 13.1914 0.637695 13.1914ZM2.63379 9.12402L4.17871 4.68066H4.21973L5.76465 9.12402H2.63379ZM12.2793 13.2324C13.3115 13.2324 14.2891 12.6787 14.7129 11.8037H14.7402V12.5762C14.7471 12.9863 15.0273 13.2393 15.4238 13.2393C15.834 13.2393 16.1143 12.9795 16.1143 12.5215V8.00977C16.1143 6.49902 14.9658 5.52148 13.1543 5.52148C11.7666 5.52148 10.6592 6.08887 10.2695 6.99121C10.1943 7.15527 10.1533 7.3125 10.1533 7.46289C10.1533 7.81152 10.4062 8.04395 10.7686 8.04395C11.0215 8.04395 11.2129 7.94824 11.3496 7.73633C11.7529 6.99121 12.2861 6.65625 13.1064 6.65625C14.0977 6.65625 14.6992 7.20996 14.6992 8.1123V8.67285L12.5664 8.7959C10.7686 8.8916 9.77734 9.69824 9.77734 11.0107C9.77734 12.3369 10.8096 13.2324 12.2793 13.2324ZM12.6621 12.1387C11.8008 12.1387 11.2129 11.667 11.2129 10.9561C11.2129 10.2725 11.7598 9.82129 12.7578 9.75977L14.6992 9.62988V10.3203C14.6992 11.3457 13.7969 12.1387 12.6621 12.1387Z"></path>
                      </svg>
                    </span>
                    이름
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "block",
                          fill: "rgba(55, 53, 47, 0.45)",
                          flexShrink: 0,
                          "-webkit-backface-visibility": "hidden",
                        }}
                        className="typesCreatedAt"
                      >
                        <path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM4.54102 8.91211H7.99316C8.30078 8.91211 8.54004 8.67285 8.54004 8.37207V3.8877C8.54004 3.58691 8.30078 3.34766 7.99316 3.34766C7.69238 3.34766 7.45312 3.58691 7.45312 3.8877V7.83203H4.54102C4.2334 7.83203 4.00098 8.06445 4.00098 8.37207C4.00098 8.67285 4.2334 8.91211 4.54102 8.91211Z"></path>
                      </svg>
                    </span>
                    생성 일시
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "block",
                          fill: "rgba(55, 53, 47, 0.45)",
                          flexShrink: 0,
                          "-webkit-backface-visibility": "hidden",
                        }}
                        className="typesUrl"
                      >
                        <path d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"></path>
                      </svg>
                    </span>
                    저장소
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "block",
                          fill: "rgba(55, 53, 47, 0.45)",
                          flexShrink: 0,
                          "-webkit-backface-visibility": "hidden",
                        }}
                        className="typesMultipleSelect"
                      >
                        <path d="M1.91602 4.83789C2.44238 4.83789 2.87305 4.40723 2.87305 3.87402C2.87305 3.34766 2.44238 2.91699 1.91602 2.91699C1.38281 2.91699 0.952148 3.34766 0.952148 3.87402C0.952148 4.40723 1.38281 4.83789 1.91602 4.83789ZM5.1084 4.52344H14.3984C14.7607 4.52344 15.0479 4.23633 15.0479 3.87402C15.0479 3.51172 14.7607 3.22461 14.3984 3.22461H5.1084C4.74609 3.22461 4.45898 3.51172 4.45898 3.87402C4.45898 4.23633 4.74609 4.52344 5.1084 4.52344ZM1.91602 9.03516C2.44238 9.03516 2.87305 8.60449 2.87305 8.07129C2.87305 7.54492 2.44238 7.11426 1.91602 7.11426C1.38281 7.11426 0.952148 7.54492 0.952148 8.07129C0.952148 8.60449 1.38281 9.03516 1.91602 9.03516ZM5.1084 8.7207H14.3984C14.7607 8.7207 15.0479 8.43359 15.0479 8.07129C15.0479 7.70898 14.7607 7.42188 14.3984 7.42188H5.1084C4.74609 7.42188 4.45898 7.70898 4.45898 8.07129C4.45898 8.43359 4.74609 8.7207 5.1084 8.7207ZM1.91602 13.2324C2.44238 13.2324 2.87305 12.8018 2.87305 12.2686C2.87305 11.7422 2.44238 11.3115 1.91602 11.3115C1.38281 11.3115 0.952148 11.7422 0.952148 12.2686C0.952148 12.8018 1.38281 13.2324 1.91602 13.2324ZM5.1084 12.918H14.3984C14.7607 12.918 15.0479 12.6309 15.0479 12.2686C15.0479 11.9062 14.7607 11.6191 14.3984 11.6191H5.1084C4.74609 11.6191 4.45898 11.9062 4.45898 12.2686C4.45898 12.6309 4.74609 12.918 5.1084 12.918Z"></path>
                      </svg>
                    </span>
                    태그
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr id="bb148799-6655-4633-951d-2fede847f326">
                  <td className="cell-title">
                    <a href="https://www.notion.so/Profile-bb14879966554633951d2fede847f326">
                      <span className="icon">🎨</span>Profile
                    </a>
                  </td>
                  <td className="cell-gqb&gt;">
                    <time>@2023년 3월 29일 오후 5:44</time>
                  </td>
                  <td className="cell-jKUS">
                    <a
                      href="https://github.com/BerkleyLim/profile"
                      className="url-value"
                    >
                      https://github.com/BerkleyLim/profile
                    </a>
                  </td>
                  <td className="cell-exW_">
                    <span className="selected-value select-value-color-orange">
                      React
                    </span>
                    <span className="selected-value select-value-color-orange">
                      Spring boot
                    </span>
                    <span className="selected-value select-value-color-green">
                      UI/UX
                    </span>
                    <span className="selected-value select-value-color-gray">
                      aws
                    </span>
                    <span className="selected-value select-value-color-blue">
                      git
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      java
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      jpa
                    </span>
                  </td>
                </tr>
                <tr id="44dfac3a-faff-4965-9cab-cec71e39d779">
                  <td className="cell-title">
                    <a href="https://www.notion.so/Interior-44dfac3afaff49659cabcec71e39d779">
                      <span className="icon">🖼️</span>Interior
                    </a>
                  </td>
                  <td className="cell-gqb&gt;">
                    <time>@2023년 3월 29일 오후 5:44</time>
                  </td>
                  <td className="cell-jKUS">
                    <a
                      href="https://github.com/BerkleyLim/interior_test"
                      className="url-value"
                    >
                      https://github.com/BerkleyLim/interior_test
                    </a>
                  </td>
                  <td className="cell-exW_">
                    <span className="selected-value select-value-color-orange">
                      Spring boot
                    </span>
                    <span className="selected-value select-value-color-green">
                      UI/UX
                    </span>
                    <span className="selected-value select-value-color-gray">
                      aws
                    </span>
                    <span className="selected-value select-value-color-blue">
                      git
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      java
                    </span>
                    <span className="selected-value select-value-color-blue">
                      javascript
                    </span>
                    <span className="selected-value select-value-color-green">
                      jquery
                    </span>
                  </td>
                </tr>
                <tr id="44dfac3a-faff-4965-9cab-cec71e39d779">
                  <td className="cell-title">
                    <a href="https://www.notion.so/Interior-44dfac3afaff49659cabcec71e39d779">
                      <span className="icon">👋</span>todolst
                    </a>
                  </td>
                  <td className="cell-gqb&gt;">
                    <time>@2023년 6월 11일 오후 2:44</time>
                  </td>
                  <td className="cell-jKUS">
                    <a
                      href="https://github.com/BerkleyLim/todolist"
                      className="url-value"
                    >
                      https://github.com/BerkleyLim/todolist
                    </a>
                  </td>
                  <td className="cell-exW_">
                    <span className="selected-value select-value-color-orange">
                      React
                    </span>
                    <span className="selected-value select-value-color-green">
                      UI/UX
                    </span>
                    <span className="selected-value select-value-color-gray">
                      Redux
                    </span>
                    <span className="selected-value select-value-color-blue">
                      git
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      react-dnd
                    </span>
                    <span className="selected-value select-value-color-blue">
                      javascript
                    </span>
                    <span className="selected-value select-value-color-green">
                      reactstrap
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <br />

            <h4 className="collection-title">
              개발 진행 중(협업 하실분 따로 문의)
            </h4>
            <table className="collection-content">
              <thead>
                <tr>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "block",
                          fill: "rgba(55, 53, 47, 0.45)",
                          flexShrink: 0,
                          "-webkit-backface-visibility": "hidden",
                        }}
                        className="typesTitle"
                      >
                        <path d="M0.637695 13.1914C1.0957 13.1914 1.32812 13 1.47852 12.5215L2.24414 10.3887H6.14746L6.90625 12.5215C7.05664 13 7.2959 13.1914 7.74707 13.1914C8.22559 13.1914 8.5332 12.9043 8.5332 12.4531C8.5332 12.2891 8.50586 12.1523 8.44434 11.9678L5.41602 3.79199C5.2041 3.21777 4.82129 2.9375 4.19922 2.9375C3.60449 2.9375 3.21484 3.21777 3.0166 3.78516L-0.0322266 12.002C-0.09375 12.1797 -0.121094 12.3232 -0.121094 12.4668C-0.121094 12.918 0.166016 13.1914 0.637695 13.1914ZM2.63379 9.12402L4.17871 4.68066H4.21973L5.76465 9.12402H2.63379ZM12.2793 13.2324C13.3115 13.2324 14.2891 12.6787 14.7129 11.8037H14.7402V12.5762C14.7471 12.9863 15.0273 13.2393 15.4238 13.2393C15.834 13.2393 16.1143 12.9795 16.1143 12.5215V8.00977C16.1143 6.49902 14.9658 5.52148 13.1543 5.52148C11.7666 5.52148 10.6592 6.08887 10.2695 6.99121C10.1943 7.15527 10.1533 7.3125 10.1533 7.46289C10.1533 7.81152 10.4062 8.04395 10.7686 8.04395C11.0215 8.04395 11.2129 7.94824 11.3496 7.73633C11.7529 6.99121 12.2861 6.65625 13.1064 6.65625C14.0977 6.65625 14.6992 7.20996 14.6992 8.1123V8.67285L12.5664 8.7959C10.7686 8.8916 9.77734 9.69824 9.77734 11.0107C9.77734 12.3369 10.8096 13.2324 12.2793 13.2324ZM12.6621 12.1387C11.8008 12.1387 11.2129 11.667 11.2129 10.9561C11.2129 10.2725 11.7598 9.82129 12.7578 9.75977L14.6992 9.62988V10.3203C14.6992 11.3457 13.7969 12.1387 12.6621 12.1387Z"></path>
                      </svg>
                    </span>
                    이름
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "block",
                          fill: "rgba(55, 53, 47, 0.45)",
                          flexShrink: 0,
                          "-webkit-backface-visibility": "hidden",
                        }}
                        className="typesCreatedAt"
                      >
                        <path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM4.54102 8.91211H7.99316C8.30078 8.91211 8.54004 8.67285 8.54004 8.37207V3.8877C8.54004 3.58691 8.30078 3.34766 7.99316 3.34766C7.69238 3.34766 7.45312 3.58691 7.45312 3.8877V7.83203H4.54102C4.2334 7.83203 4.00098 8.06445 4.00098 8.37207C4.00098 8.67285 4.2334 8.91211 4.54102 8.91211Z"></path>
                      </svg>
                    </span>
                    생성 일시
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "block",
                          fill: "rgba(55, 53, 47, 0.45)",
                          flexShrink: 0,
                          "-webkit-backface-visibility": "hidden",
                        }}
                        className="typesUrl"
                      >
                        <path d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"></path>
                      </svg>
                    </span>
                    저장소
                  </th>
                  <th>
                    <span className="icon property-icon">
                      <svg
                        viewBox="0 0 16 16"
                        style={{
                          width: "14px",
                          height: "14px",
                          display: "block",
                          fill: "rgba(55, 53, 47, 0.45)",
                          flexShrink: 0,
                          "-webkit-backface-visibility": "hidden",
                        }}
                        className="typesMultipleSelect"
                      >
                        <path d="M1.91602 4.83789C2.44238 4.83789 2.87305 4.40723 2.87305 3.87402C2.87305 3.34766 2.44238 2.91699 1.91602 2.91699C1.38281 2.91699 0.952148 3.34766 0.952148 3.87402C0.952148 4.40723 1.38281 4.83789 1.91602 4.83789ZM5.1084 4.52344H14.3984C14.7607 4.52344 15.0479 4.23633 15.0479 3.87402C15.0479 3.51172 14.7607 3.22461 14.3984 3.22461H5.1084C4.74609 3.22461 4.45898 3.51172 4.45898 3.87402C4.45898 4.23633 4.74609 4.52344 5.1084 4.52344ZM1.91602 9.03516C2.44238 9.03516 2.87305 8.60449 2.87305 8.07129C2.87305 7.54492 2.44238 7.11426 1.91602 7.11426C1.38281 7.11426 0.952148 7.54492 0.952148 8.07129C0.952148 8.60449 1.38281 9.03516 1.91602 9.03516ZM5.1084 8.7207H14.3984C14.7607 8.7207 15.0479 8.43359 15.0479 8.07129C15.0479 7.70898 14.7607 7.42188 14.3984 7.42188H5.1084C4.74609 7.42188 4.45898 7.70898 4.45898 8.07129C4.45898 8.43359 4.74609 8.7207 5.1084 8.7207ZM1.91602 13.2324C2.44238 13.2324 2.87305 12.8018 2.87305 12.2686C2.87305 11.7422 2.44238 11.3115 1.91602 11.3115C1.38281 11.3115 0.952148 11.7422 0.952148 12.2686C0.952148 12.8018 1.38281 13.2324 1.91602 13.2324ZM5.1084 12.918H14.3984C14.7607 12.918 15.0479 12.6309 15.0479 12.2686C15.0479 11.9062 14.7607 11.6191 14.3984 11.6191H5.1084C4.74609 11.6191 4.45898 11.9062 4.45898 12.2686C4.45898 12.6309 4.74609 12.918 5.1084 12.918Z"></path>
                      </svg>
                    </span>
                    태그
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr id="44dfac3a-faff-4965-9cab-cec71e39d779">
                  <td className="cell-title">
                    <a href="https://github.com/BerkleyLim/CLNEWZE">
                      <span className="icon">💡</span>CLNEWZE
                    </a>
                  </td>
                  <td className="cell-gqb&gt;">
                    <time>@2023년 5월 20일 오후 5:44</time>
                  </td>
                  <td className="cell-jKUS">
                    <a
                      href="https://github.com/BerkleyLim/CLNEWZE"
                      className="url-value"
                    >
                      https://github.com/BerkleyLim/CLNEWZE
                    </a>
                  </td>
                  <td className="cell-exW_">
                    <span className="selected-value select-value-color-orange">
                      Spring boot
                    </span>
                    <span className="selected-value select-value-color-green">
                      UI/UX
                    </span>
                    <span className="selected-value select-value-color-gray">
                      aws
                    </span>
                    <span className="selected-value select-value-color-blue">
                      git
                    </span>
                    <span className="selected-value select-value-color-yellow">
                      java
                    </span>
                    <span className="selected-value select-value-color-blue">
                      react
                    </span>
                    <span className="selected-value select-value-color-green">
                      mysql
                    </span>
                    <span className="selected-value select-value-color-green">
                      my-batis
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr id="b02dd0ae-216c-40e8-bc60-3c817be9b68c" />
        </div>
      </article> */}
    </div>
  );
}
