import React, { Component } from 'react'
import "./introduction.css"
import IntroductionService from '../../service/IntroductionService'

export default class IntroductionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            introductions: []
        }
    }

    componentDidMount() {
        IntroductionService.getIntroduction().then((res) => {
            this.setState({ introductions: res.data});
        });
    }

    render() {
        return (
            <div>
                <h1>소개</h1>
                {
                    this.state.introductions.map(
                        introduction =>
                        <div className="card">
                            <h5 className="card-header">{introduction.title}</h5>
                            <div className="card-body">
                                <p className="card-text"> {introduction.contents}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
