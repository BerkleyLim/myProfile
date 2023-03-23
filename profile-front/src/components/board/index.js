import React, { useState, useEffect } from "react";
import "./together.css";
import Modal from "./modal/index";
import Pagenation from "./pagenation";
import sampleDatapagenation from "./sampleDatapagenation";

const TogetherIndex = () => {
  const [togethers, setTogethers] = useState(sampleDatapagenation);
  const [modalVisible, setModalVisible] = useState(false);

  // Pagination 관련
  const [page, setPage] = useState(1); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset

  // 페이지 짜르기
  const postsData = (posts) => {
    if (posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  };

  // Pagination 관련 끝

  // useEffect(() => {
  //   setTogethers(sampleDatapagenation)
  // }, [setTogethers])
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  console.log(togethers);
  // console.log(sampleDatapagenation)
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">조회수</th>
          </tr>
        </thead>
        <tbody>
          {/* {!!togethers ? ( */}
          {postsData(
            !!sampleDatapagenation ? (
              // 변수명 뒤에 변수에 JSON 형식으로 저장되어야됨
              // !!togethers?.map((together, index) =>
              sampleDatapagenation.map((together, index) => (
                <tr onClick={openModal} key={index}>
                  <th scope="row" className="col-md-1">
                    {index + 1}
                  </th>
                  <td className="col-md-10">{together.title}</td>
                  <td className="col-md-1">0</td>
                </tr>
              ))
            ) : (
              <></>
              // <ImageWrap>
              //   <img src={loadingImg} alt="loadingImg" />
              // </ImageWrap>
            )
          )}
        </tbody>
      </table>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
        />
      )}
      {/* <Posts info */}
      <Pagenation
        limit={limit}
        page={page}
        // totalPosts={!!togethers.length}
        totalPosts={!!sampleDatapagenation.length}
        setPage={setPage}
      />
    </div>
  );
};

export default TogetherIndex;
