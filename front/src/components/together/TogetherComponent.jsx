import React, { Component } from 'react'
import TogetherDetailComponent from './TogetherDetailComponent.jsx'
import './together.css'
import {Link} from "react-router-dom";

export default class TogetherComponent extends Component {
    constructor(props) {
        super(props);
        this.readTogether = this.readTogether.bind(this);
        this.state = {
            together: [],
            isModal: false,
        }
        this.detail = null;
        this.bgClick = this.bgClick.bind(this);
    }

    readTogether(no) {
        
        this.setState({isModal: !this.state.isModal});
        // this.props.history.push(`/together-read/:`+no);
        // var html = this.props.history.push('/together-read/:'+no);  
        
        this.detail = <TogetherDetailComponent value={this.state.together[no]}/>
        // return (<TogetherDetailComponent />);
    }
    
    bgClick() {
        document.getElementsByTagName('html').onclick = function () {
            if (!document.getElementsByTagName('html').contains('modal')) {
                alert('I\'m clicked!');
                this.setState({isModal: !this.state.isModal});
                document.getElementById("modal").style.display = "none";
            }
        };
    }

    render() {
        // 여기서 modal 열기 및 닫기 이벤트 컴포넌트 출력
        let modal = null;
        if (this.state.isModal) {
            // modal = <TogetherDetailComponent value={this.state.together.no}/>
            modal = this.detail;
            document.getElementById("modal").style.display = "flex";
            this.bgClick();
        } else {
            modal = null;
            // document.getElementById("modal").style.display = "none";
        }

        // let closeModal = documont.getElementById("root");
        // closeModal.addEventListner("click");

        return (
            <div>
                <div id="modal">
                    {modal}
                </div>
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
