import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { useEffect, useState } from "react";
import axios from "axios";
import { NotionRenderer } from "react-notion";
import {
  Badge,
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import styled from "styled-components";

export default function ReactNotion() {
  const [project1, setProject1] = useState();
  const [project2, setProject2] = useState();

  useEffect(() => {
    let data = {
      authorization: process.env.REACT_APP_AUTH_TOKEN,
      contentType: "application/json;charset=UTF-8",
      notionVersion: "2022-06-28",
      notionDBName: process.env.REACT_APP_NOTION_PORTFOLIO_DATABASE_NAME_V1,
    };

    axios
      .post(
        "http://localhost:8080/api/project/notion/database/connection",
        data
      )
      .then((response) => {
        setProject1(response.data.results);
        console.log(response.data.results);
      })
      .catch((e) => console.error(e));
      
    data = {
      authorization: process.env.REACT_APP_AUTH_TOKEN,
      contentType: "application/json;charset=UTF-8",
      notionVersion: "2022-06-28",
      notionDBName: process.env.REACT_APP_NOTION_PORTFOLIO_DATABASE_NAME_V2,
    };

    axios
    .post(
        "http://localhost:8080/api/project/notion/database/connection",
        data
      )
      .then((response) => {
        // console.log(response.data.results);
        setProject2(response.data.results);
        console.log(response.data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <h1>사이드 프로젝트</h1>
      <ProjectComponent>
        {
          project1?.map((project, index) =>
            <Card
              key={index}
              style={{
                width: "18rem",
              }}
            >
              {/* <img alt="Card" src="https://picsum.photos/300/200" /> */}
              <CardBody>
                <CardTitle tag="h5">{project?.properties?.이름?.title[0].plain_text}</CardTitle>
                <CardText>
                  {
                    project?.properties?.태그?.multi_select.map((tag, index) => 
                      <div key={index}>
                        {tag?.name}
                      </div>
                    )
                  }
                </CardText>
              </CardBody>
              <CardBody>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Card Link</CardLink>
              </CardBody>
            </Card>
          )

        }
      </ProjectComponent>
      <br/>
      <br/>
      <h1>Github 프로젝트</h1>
    </>
  );
}

const ProjectComponent = styled.div`
  max-width: 800px;
`;
