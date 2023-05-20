import React, { useState, useEffect } from "react";
// import Modal from "./modal/index";
import FormDetail from "./form";
import Pagenation from "./pagenation";
import Posts from "./dataTable";
import URI from "../../../util/URI";
import { Modal } from "reactstrap";

const TogetherIndex = () => {
  const [trequests, setTRequests] = useState();
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [selectedTRequest, setSelectedTRequest] = useState();
  const toggle = () => setIsModal(!isModal);
  // Pagination 관련
  const [page, setPage] = useState(1); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset
  // Pagination 관련 끝

  // 추가, 업데이트시 자동 리렌더링
  useEffect(() => {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/request/").then((response) => {
      setTRequests(response.data);
      // console.log(response.data)
    });
  }, [setTRequests]);

  const postsData = (posts) => {
    if (!!posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  };

  const openDetail = (board) => {
    setIsModal(true);
  };

  const closeDetail = () => {
  };

  const moveCreateForm = () => {
    // setSelectedBoard({title:"", contents:""});
    // setDetailView(!detailView);
    // setIsCreate(true);
  }
  return (
    <div>
      
      <Modal isOpen={isModal} toggle={toggle} centered={true} size="xl">
        <FormDetail 
          // isCreate={isCreate}
          // closeDetail={closeDetail}
          // selectedBoard={selectedBoard}
        />
      </Modal>
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">제목</th>
                <th scope="col">조회수</th>
              </tr>
            </thead>
            <Posts trequests={postsData(trequests)} openDetail={openDetail} closeDetail={closeDetail}/>
          </table>
          <Pagenation
            limit={limit}
            page={page}
            totalPosts={trequests?.length}
            setPage={setPage}
          />
        </div>
    </div>
  );
};

export default TogetherIndex;
