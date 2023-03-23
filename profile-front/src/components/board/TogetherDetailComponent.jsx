import React, { useState } from "react";
import Modal from "../ModalComponent";

// 참조 :  https://medium.com/@bestseob93/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%AA%A8%EB%8B%AC-react-modal-%EB%A7%8C%EB%93%A4%EA%B8%B0-bd003458e9d
export default function TogetherDetailComponent() {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
        >
          Hello
          <div className="title">
            <h4>개발중</h4>
          </div>
          <div className="content">
            지금 현재 기능 여부의 대해 에디터 개발 및 디자인 등 아이디어 구성
            작업 중입니다.
          </div>
        </Modal>
      )}
    </>
  );
}

// props 기본값 설정
// TogetherDetailComponent.defaultProps = {
//     no: 1,
//     title: "함께",
//     content: "지원부분",
//     view: 1
// }
