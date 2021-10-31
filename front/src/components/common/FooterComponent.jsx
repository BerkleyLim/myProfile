import React, { Component } from 'react'

export default class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div class="footer">
                <div class="ft-content">
                    <p class="ft-service">
                        <div>Github : https://github.com/BerkleyLim</div>
                        <div>E-Mail : berkleylim16@gmail.com</div>
                        <div>Kakao : </div>
                        <div>Follow : facebook, instagram</div>
                    </p>
                    <span class="ft-copy">Copyright (c) 2021 MyDev., Ltd, All Rights Reserved</span>
                </div>
            </div>  
        )
    }
}


