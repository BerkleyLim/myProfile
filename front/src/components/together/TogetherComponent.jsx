import React, { Component } from 'react'

export default class TogetherComponent extends Component {
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
                    <tr>
                    <th scope="row">1</th>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
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
