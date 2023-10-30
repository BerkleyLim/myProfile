import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Badge,
  Card,
  CardBody,
  CardLink,
  CardTitle,
  Col,
  Modal,
  Row,
} from "reactstrap";
import styled from "styled-components";
import { tagCss } from "./NotionTagColor";
import TextEditorComponent from "./TextEditorComponent";

export default function ReactNotion() {
  const [project1, setProject1] = useState();
  const [project2, setProject2] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let data = {
      authorization: process.env.REACT_APP_AUTH_TOKEN,
      contentType: "application/json;charset=UTF-8",
      notionVersion: "2022-06-28",
      notionDBName: process.env.REACT_APP_NOTION_PORTFOLIO_DATABASE_NAME_V1,
    };

    axios
      .post(
        process.env.REACT_APP_API_ROOT +
          "/api/project/notion/database/connection",
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
        process.env.REACT_APP_API_ROOT +
          "/api/project/notion/database/connection",
        data
      )
      .then((response) => {
        // console.log(response.data.results);
        setProject2(response.data.results);
        // console.log(response.data);
      })
      .catch((e) => console.error(e));
  }, []);

  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        toggle={modalToggle}
        centered={true}
        scrollable={true}
        size={"xl"}
        modalClassName="p-5"
      >
        <TextEditorComponent />
      </Modal>
      <h1>사이드 프로젝트</h1>
      <ProjectComponent>
        <Row>
          {project1?.map((project, index) => (
            <Col md={6} key={index}>
              <Card
                style={{
                  width: "100%",
                }}
                onClick={() => {
                  modalToggle();
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">
                    {project?.icon?.emoji +
                      " " +
                      project?.properties?.이름?.title[0].plain_text}
                  </CardTitle>
                  <img
                    width="100%"
                    src="/image/project/sample.png"
                    alt="이미지"
                  ></img>
                  {project?.properties?.태그?.multi_select.map((tag, index) => (
                    <Badge
                      key={index}
                      color={"none"}
                      // className={styles?.test}
                      style={{
                        color: tagCss(tag?.color, "font"),
                        fontSize: "1em",
                        background: tagCss(tag?.color, "bg"),
                        margin: "0.5em 0.5em 0.5em 0.5em",
                      }}
                    >
                      {tag?.name}
                    </Badge>
                  ))}
                </CardBody>
                <CardBody>
                  <CardLink href={project?.public_url} target="_blank">
                    {"-> 자세히 보기"}
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </ProjectComponent>
    </div>
  );
}

const ProjectComponent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
