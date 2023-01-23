import React, { Component } from "react";
import TogetherDetailComponent from "./TogetherDetailComponent";
import "./together.css";
import Modal from "../ModalComponent";

export default class TogetherComponent extends Component {
  constructor(props) {
    super(props);
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    this.state = {
      together: [],
      modalVisible: false,
    };
    this.detail = null;
  }

  openModal = () => {
    this.setState({ modalVisible: true });
  };
  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    // 여기서 modal 열기 및 닫기 이벤트 컴포넌트 출력
    return (
      <div>
        {/* <button onClick={this.openModal}>Open Modal</button>
                {
                    this.state.modalVisible && <Modal
                    visible={this.state.modalVisible}
                    closable={true}
                    maskClosable={true}
                    onClose={this.closeModal}>Hello
                    
                    <div className="title"><h4>함께 할 IT 기업을 구합니다.</h4></div>
                    <div className="content">지원부분 1) Web programmer , 2) AGV Engineer, 3) WMS Developer</div> 

                    </Modal>
                } */}
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={this.openModal}>
              <th scope="row" className="col-md-1">1</th>
              <td className="col-md-10">개발중</td>
              <td classname="col-md-1">0</td>
            </tr>
            {this.state.modalVisible && (
              <Modal
                visible={this.state.modalVisible}
                closable={true}
                maskClosable={true}
                onClose={this.closeModal}
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

            <tr onClick={this.openModal}>
              <th scope="row">2</th>
              <td>개발중</td>
              <td>4</td>
            </tr>
            {this.state.modalVisible && (
              <Modal
                visible={this.state.modalVisible}
                closable={true}
                maskClosable={true}
                onClose={this.closeModal}
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

            <tr onClick={this.openModal}>
              <th scope="row">3</th>
              <td>개발중</td>
              <td>3</td>
            </tr>
            {this.state.modalVisible && (
              <Modal
                visible={this.state.modalVisible}
                closable={true}
                maskClosable={true}
                onClose={this.closeModal}
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
  }
}
