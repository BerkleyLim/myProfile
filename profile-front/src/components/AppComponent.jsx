import React, { useState, useEffect } from "react";
import { Form, FormGroup } from "reactstrap";
import "draft-js/dist/Draft.css";
// import EntryNotice from './EntryNotice'
// import BoardForm from "../util/BoardForm";
import BoardFormPreview from "../util/BoardFormPreview";
import URI from "../util/URI";

// import { useSelector } from "react-redux";

export default function AppComponent() {
  // let [bno, setBno] = useState();
  let [title, setTitle] = useState(titles);
  let [content, setContent] = useState(data);
  // const user = useSelector((state) => state.user);

  useEffect(() => {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/board/mainYn")
      .then((response) => {
        // console.log(response.data)
        // setBno(response.data.bno);
        setTitle(response.data.title);
        setContent(response.data.contents);
      })
      .catch((e) => console.error(e));
  }, []);

  // const changeTitle = (event) => {
  //   setTitle(event.target.value);
  // };

  return (
    <div>
      {/* {isLogin ? ( */}
      {/* {user.isLogin ? ( */}
      {/* // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
        <Form>
          <FormGroup>
            <Input
              type="text"
              name="title"
              defaultValue={title}
              onChange={changeTitle}
            ></Input>
          </FormGroup>
          <BoardForm title={title} content={content} bno={bno} />

                <Row className="justify-content-evenly">
        <Col sm={{offset:1, size:'auto'}}>
          <Button onClick={update}>수정</Button>
        </Col>
        <Col sm={{offset:1, size:'auto'}}>
          <Button>취소</Button>
        </Col>
      </Row>
        </Form>
      ) : ( */}
      <div>
        <Form>
          <FormGroup>
            <div>
              <h3>{title}</h3>
            </div>
            {/* <BoardFormPreview className="form-control" content={title} /> */}
            <BoardFormPreview
              className="form-control"
              // title={title}
              content={content}
              // bno={bno}
            />
          </FormGroup>
        </Form>
      </div>
      {/* )} */}
    </div>
  );
}

const titles = `React와 Spring boot 사이드 프로젝트 같이 시도하시분 구합니다.`;

const data = `<p className="">
<span className=""> 지금 현재 가지고 있는 보유기술은 React 와 Spring boot 기반으로 만들어진 기술 중 하나입니다.</span>
</p><p className=""><span className="">
  사용 목적은 현재 개인 프로젝트로만 진행해왔기 때문에 팀 프로젝트 경험을 쌓고 싶습니다.
</span>
</p>
<p className="">
<span className="">
  따라서 같이 스팩업 하고 싶은 사람이면 좋을거 같습니다.
</span>
</p>
</div>
</div>
`;
