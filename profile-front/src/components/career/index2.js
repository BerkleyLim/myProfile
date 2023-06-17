import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NotionRenderer } from 'react-notion';

export default function ReactNotion() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = '3938235e0ecd4646aef81c7100fa13cd';
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, []);

  return (
    Object.keys(response).length && (
       <>
        지금 현재 노션과 연동 되어있으므로, 노션 커스텀 마이징이 한계가 있습니다.
        <br/>해당 부분만 편하게 보고 싶을 경우, <a href="https://quartz-talon-c16.notion.site/d880b79002df452b9dbeebbfb28f216b?pvs=4">링크</a> 를 클릭하세요
        <br/><br/><br/>
        <NotionRenderer blockMap={response} fullPage={true} />
       </>
    )
  );
}