import React, { useState, useEffect } from "react";
import "./together.css";
// import Modal from "./modal/index";
import FormDetail from "./form";
import Pagenation from "./pagenation";
import Posts from "./dataTable";
import sampleDatapagenation from "./sampleDatapagenation";
import URI from "../../util/URI";

const TogetherIndex = () => {
  // const [togethers, setTogethers] = useState(sampleDatapagenation);
  const [togethers, setTogethers] = useState(sampleDatapagenation);
  const [detailView, setDetailView] = useState(false);
  const [selectedTogether, setSelectedTogether] = useState();

  // Pagination 관련
  const [page, setPage] = useState(1); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset
  // Pagination 관련 끝

  useEffect(() => {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/board/").then((response) => {
      setTogethers(response.data);
    });
    // setTogethers(sampleDatapagenation)
  }, []);

  const postsData = (posts) => {
    if (posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  };

  const openModal = (together) => {
    setSelectedTogether(together);
    setDetailView(true);
  };
  const closeModal = () => {
    setDetailView(false);
  };
  // console.log(togethers);
  // console.log(sampleDatapagenation)
  return (
    <div>
      {detailView? (
        <FormDetail
          // visible={modalVisible}
          // closable={true}
          // maskClosable={true}
          onClose={closeModal}
          selectedTogether={selectedTogether}
        />
      ) : (
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">제목</th>
                <th scope="col">조회수</th>
              </tr>
            </thead>
            <Posts togethers={postsData(togethers)} openModal={openModal} />
          </table>
          {/* <Posts info */}
          <Pagenation
            limit={limit}
            page={page}
            totalPosts={togethers.length}
            // totalPosts={!!sampleDatapagenation.length}
            setPage={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default TogetherIndex;
