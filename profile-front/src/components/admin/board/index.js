import React, { useState, useEffect } from "react";
import "./together.css";
// import Modal from "./modal/index";
import FormDetail from "./form";
import Pagenation from "./pagenation";
import Posts from "./dataTable";
import URI from "../../../util/URI";
import { useSelector } from "react-redux";

const TogetherIndex = () => {
  const user = useSelector(state => state.user);
  const [boards, setBoards] = useState();
  const [mainYnBoard, setMainYnBoard] = useState();
  const [detailView, setDetailView] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState();
  const [isCreate, setIsCreate] = useState(false);

  // Pagination 관련
  const [page, setPage] = useState(1); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset
  // Pagination 관련 끝

  // 추가, 업데이트시 자동 리렌더링
  useEffect(() => {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/board/").then((response) => {
      setBoards(response.data);
      setMainYnBoard(response.data.filter(board => board?.mainYn === "Y")[0]);
    });
    // setTogethers(sampleDatapagenation)
  }, [setBoards, detailView]);

  const postsData = (posts) => {
    if (!!posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  };

  const openDetail = (board) => {
    setSelectedBoard(board);
    setDetailView(true);
    setIsCreate(false);
    // console.log(board.viewNumber)

    if (!user?.isLogin && user?.role_user !== "admin") {
      URI.post(process.env.REACT_APP_API_ROOT + "/api/board/viewClick",{bno:board.bno, viewNumber:board.viewNumber+1})

    }
  };

  const closeDetail = () => {
    setDetailView(false);
  };

  const moveCreateForm = () => {
    setSelectedBoard({title:"", contents:""});
    setDetailView(!detailView);
    setIsCreate(true);
  }
  // console.log(boards);
  // console.log(sampleDatapagenation)

  
  return (
    <div>
      {detailView? (
        <FormDetail
          isCreate={isCreate}
          closeDetail={closeDetail}
          selectedBoard={selectedBoard}
        />
      ) : (
        <div>
          {
            user?.isLogin && <button onClick={moveCreateForm}>추가</button>
          }
          <table className="table table-hover">
            <thead>
              <tr>
                {
                  user?.isLogin &&
                  <th scope="col">mainYn</th>
                }
                <th scope="col">번호</th>
                <th scope="col">제목</th>
                <th scope="col">조회수</th>
                <th scope="col">메뉴선택</th>
              </tr>
            </thead>
            <Posts boards={postsData(boards)} mainYnBoard={mainYnBoard} setMainYnBoard={setMainYnBoard} openDetail={openDetail} closeDetail={closeDetail}/>
          </table>
          {/* <Posts info */}
          <Pagenation
            limit={limit}
            page={page}
            totalPosts={boards?.length}
            // totalPosts={!!sampleDatapagenation.length}
            setPage={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default TogetherIndex;
