import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class TogetherComponent extends Component {
    constructor(props) {
        super(props)

        // this.readTogether = this.readTogether.bind(this);
    }

    readTogether(no) {
        
        var url = "together-read/:" + no;
        console.log(url);

        // this.props.history.push(`/together-read/:`+no);
        // var html = this.props.history.push('/together-read/:'+no);  
        
        // document.querySelector(".popup-detail-container").html(html);
        // document.querySelector(".popup-detail-container").css("display","flex");
    
        // 여기서 곡정보 종료
        // $(document).ready( () => {
        //     $(".bgdim").click(e => {
        //         // 여기서 이벤트는 style이라는 속성으로 css로 사용 (display:none)
        //         $('.popup-board-detail-container').removeAttr("style");
                
        //         $.get(serverRoot + "/null.html", (deleteData) => {
        //             $('.popup-board-detail-container').html(deleteData);
        //         });
        //     })
        // <Link to='"/together-read/:no'>소개</Link>
        document.querySelector('modal');
    }
    render() {
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
                    <tr onClick={this.readTogether(1)}>
                        <th scope="row">1</th>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr onClick={this.readTogether(2)}>
                        <th scope="row">2</th>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr onClick={this.readTogether(3)}>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}
