import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProjectDataTable from "./form";
import URI from "../../util/URI";
import "./index2.css";


export default function ProjectComponent() {
  // const [projectV2, setProjectV2] = useState();
  // useEffect(() => {
  //   URI.get(process.env.REACT_APP_API_ROOT + "/api/project/v2/")
  //     .then((res) => {
  //       setProjectV2(res.data);
  //     })
  //     .catch((error) => alert(error));
  // }, []);

  return (
    <div>
      <article>

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
      </header>
      <div className="page-body">
        <figure
          className="block-color-gray_background callout"
          style={{whiteSpace:"pre-wrap", display:"flex"}}
          id="6d11caa5-cbaf-4a7d-b9a1-3499b84dee73"
        >
          <div style={{fontSize:"1.5em"}}>
            <span className="icon">💡</span>
          </div>
          <div style={{width:"100%"}}>
            <strong>Notion 팁: </strong>이 템플릿을 활용해 작업한 프로젝트를
            정리하고, 프로젝트별 목적과 과정을 자세히 설명하세요. 오른쪽 상단의{" "}
            <code>공유</code> 메뉴에서 <code>웹에서 공유</code>를 활성화해
            페이지를 공유할 수 있습니다. 더 자세히 알아보려면{" "}
            <a href="https://www.notion.so/ko-kr/help/public-pages-and-web-publishing">
              여기
            </a>
            를 클릭하세요.
          </div>
        </figure>
        <p id="d15ce54a-7d73-44f7-9505-aaf6be53e0aa" className=""></p>
        <blockquote id="17ec1a52-4c5f-45e8-bc83-9e9f09f6875a" className="">
          👋 안녕하세요, 주니어 웹 개발자 <strong>임현식</strong> 입니다.
        </blockquote>
        <p id="0dfe6ee1-ab07-41c8-9dea-acaa87a194aa" className=""></p>
        <p id="b63a9189-ea78-484a-b545-5dab974f1309" className="">
          <mark className="highlight-gray">
            ↓ 각 카드를 클릭하면 생성 일시, 핵심 아이디어, 최근 버전 등을 확인할
            수 있어요.
          </mark>
        </p>
        <div
          id="3906120f-95c4-430a-be23-cf4506287588"
          className="collection-content"
        >
          <h4 className="collection-title">프로젝트</h4>
          <table className="collection-content">
            <thead>
              <tr>
                <th>
                  <span className="icon property-icon">
                    <svg
                      viewBox="0 0 16 16"
                      style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:0, "-webkit-backface-visibility":"hidden"}}
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
                      style={{width:"14px", "height":"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:0, "-webkit-backface-visibility":"hidden"}}
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
                      style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:0, "-webkit-backface-visibility":"hidden"}}
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
                      style={{width:"14px", height:"14px", display:"block", fill:"rgba(55, 53, 47, 0.45)", flexShrink:0, "-webkit-backface-visibility":"hidden"}}
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
            </tbody>
          </table>
        </div>
        <p id="a30c40e8-c2a6-4708-bf57-45519ebaf574" className=""></p>
        <hr id="b02dd0ae-216c-40e8-bc60-3c817be9b68c" />
        <div id="44131c19-6380-4bc8-9133-902737c1b660" className="column-list">
          <div
            id="f39345cd-3733-475f-8b95-a68d9c957518"
            style={{width:"33.333333333333336%"}}
            className="column"
          >
            <p id="0649869f-3be8-450a-af68-cba29923ec67" className="">
              <strong>
                <a href="https://www.notion.somailto:">
                  📨 이메일 주소 입력하기→
                </a>
              </strong>
            </p>
            <p id="c8e05ef4-edfa-476d-8e94-beca2a3f0aae" className=""></p>
          </div>
          <div
            id="5599c471-2994-4f0a-9e0b-8514eec2cffd"
            style={{width:"33.333333333333336%"}}
            className="column"
          >
            <p id="8b0d8965-2176-48c8-8056-a814deeb8e6b" className="">
              <strong>
                <a href="https://www.notion.sotel:">🤙 전화번호 입력하기 →</a>
              </strong>
            </p>
          </div>
          <div
            id="2b552c49-7345-46a1-ad60-11c61e7c7be2"
            style={{width:"33.333333333333336%"}}
            className="column"
          >
            <p id="6de7ed42-8621-4f04-a138-a22616a4bd5b" className="">
              <a href="https://www.notion.so/ko-kr/templates/resume">
                <strong>📝 이력서 링크 입력하기 →</strong>
              </a>
            </p>
            <p id="030cdf53-588d-4914-8541-7192fc7b93bb" className=""></p>
          </div>
        </div>
        <p id="4e43d8a5-aaba-4a24-85a5-91a276cecda9" className=""></p>
      </div>
      </article>
    </div>
  );
}
