import React, { Component } from 'react'
import './career.css'
import CareerService from '../../service/CareerService'

export default class CareerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            careers: [],
            skills: []
        }
    }

    componentDidMount() {
        CareerService.getCareer().then((res) => {
            this.setState({ careers: res.data });
        });
        CareerService.getSkill().then((res) => {
            this.setState({ skills: res.data });
        });
    }

    render() {
        return (
            <div>

                <h1>이력사항</h1>
                <div className="career">
                    {
                        this.state.careers.map(
                            career =>
                                <>
                                    <div className="col-md-2">{career.plan}</div>
                                    <div className="col">{career.detail}</div>
                                </>

                        )
                    }
                </div>


                <h1>기술</h1>
                {
                    this.state.skills.map(
                        skill =>
                            <pre>
                                <h5>
                                    {skill.bigSkill} - {skill.bigSkillDetail}
                                </h5>
                                <blockquote>
                                    <div className="d-flex flex-column bd-highlight mb-3">
                                        <div className="p-2 bd-highlight">
                                            {skill.mediumSkill} - {skill.mediumSkillDetail}
                                            <blockquote>
                                                <div className="d-flex flex-column bd-highlight mb-3">
                                                    <div className="p-2 bd-highlight">{skill.smailSkill} - {skill.smailSkillDetail}</div>
                                                </div>
                                            </blockquote>
                                        </div>
                                    </div>
                                </blockquote>
                            </pre>

                    )
                }
            </div>
        )
    }
}
