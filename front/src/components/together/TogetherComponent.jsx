import React, { Component } from 'react'
import TogetherDetailComponent from './TogetherDetailComponent'
import './together.css'

export default class TogetherComponent extends Component {
    constructor(props) {
        super(props);
        this.readTogether = this.readTogether.bind(this);
        this.state = {
            together: [],
            modalVisible: false
        }
        this.detail = null;
    }
    
    openModal = () => {
        this.setState({modalVisible:true})
    }
    closeModal = () => {
        this.setState({modalVisible:false})
    }
    readTogether(no) {
        // this.detail = <TogetherDetailComponent />
        return (<TogetherDetailComponent modalVisible={this.state.modalVisible}
                                         closeModal={this.closeModal}/>);
    }
    
    render() {
        // 여기서 modal 열기 및 닫기 이벤트 컴포넌트 출력
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
                        <tr onClick={() => this.readTogether(1)}>
                            <th scope="row">1</th>
                            <td>함께 할 IT 기업을 구합니다.</td>
                            <td>0</td>
                        </tr>
                        <tr onClick={() => this.readTogether(2)}>
                            <th scope="row">2</th>
                            <td>Thornton</td>
                            <td>4</td>
                        </tr>
                        <tr onClick={() => this.readTogether(3)}>
                            <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
