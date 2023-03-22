import React, { useState, useEffect } from "react";
import "./together.css";
import Modal from "./modal/index";

const TogetherIndex = () => {

  const [together, setTogether] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={openModal}>
            <th scope="row" className="col-md-1">
              1
            </th>
            <td className="col-md-10">개발중</td>
            <td classname="col-md-1">0</td>
          </tr>
          {modalVisible && (
            <Modal
              visible={modalVisible}
              closable={true}
              maskClosable={true}
              onClose={closeModal}
            >
              <div className="title">
                <h4>개발중</h4>
              </div>
              <div className="content">
                지금 현재 기능 여부의 대해 에디터 개발 및 디자인 등 아이디어
                구성 작업 중입니다.
              </div>
            </Modal>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TogetherIndex;
