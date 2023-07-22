import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NotionRenderer } from 'react-notion';
import { Row } from 'reactstrap';

export default function ReactNotion() {
  // const [response, setResponse] = useState({});

  // useEffect(() => {
  //   // const NOTION_PAGE_ID = '3938235e0ecd46463ef84c7100fa13cd';
  //   // https://notion-api.splitbee.io/v1/page/{토큰 값}
  //   const NOTION_PAGE_ID =  process.env.REACT_APP_NOTION_PORTFOLIO;
  //   console.log(NOTION_PAGE_ID)
  //   axios
  //     // .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
  //     // .get(`https://notion-api.splitbee.io/v1/page/${process.env.NOTION_PAGE_ID_STACK_TO_HAVE}`)
  //     // .get(process.env.NOTION_PAGE_ID_STACK_TO_HAVE)
  //     .get(process.env.REACT_APP_NOTION_PORTFOLIO)
  //     .then(({ data }) => {
  //       setResponse(data);
  //     });
  // }, []);

  return (
    <>
      포트폴리오의 내역을 보기 원하실 경우 이미지를 <a href={`${process.env.REACT_APP_NOTION_PORTFOLIO_V2}`}>클릭</a> 하여 새 창에서 보세요 <br/>
      현재 iframe 보안으로 연동 불가하고, React-notion-x 문제로 데이터 베이스 연동이 제한적이라 번거로우시더라도 노션 새창을 통해 확인 바랍니다. <br/>
      <br/>
      <br/>
      <div style={{ textAlign: "center" }}>
        <a href={`${process.env.REACT_APP_NOTION_PORTFOLIO_V2}`}>
          {/* <img src="/image/project/sample.png" /> */}
          <img src={`${process.env.REACT_APP_NOTION_PORTFOLIO_PATH}`} alt='' />
        </a>
      </div>
    </>
  //   Object.keys(response).length ? (
  //     <>
  //      지금 현재 노션과 연동 되어있으므로, 노션 커스텀 마이징이 한계가 있습니다.
  //      <br/>해당 부분만 편하게 보고 싶을 경우, <a href={`${process.env.REACT_APP_NOTION_PORTFOLIO_V2}`}>링크</a> 를 클릭하세요
  //      <br/><br/><br/>
  //      {/* <NotionRenderer blockMap={response} fullPage={true} /> */}
  //     </>
  //  ) :
  //  <h2>본인 노션 키를 설정하세요</h2>
 );
}