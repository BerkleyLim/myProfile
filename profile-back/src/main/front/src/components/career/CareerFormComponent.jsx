import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./career.css"
import CareerService from '../../service/CareerService'
import styled from 'styled-components'

export default function CareerFormComponent(props) {
    const param = useParams();
    const navigate = useNavigate();

    let [cno, setCno] = useState(param.cno);
    let [startDate, setStartDate] = useState('');
    let [endDate, setEndDate] = useState('');
    let [detail, setDetail] = useState('');

    useEffect(() => {
        if (cno === '_create') {
            return;
        } else {
            CareerService.getOneCareer(cno)
            .then((res) => {
                let career = res.data;
                console.log("Career => " + JSON.stringify(career));

                setCno(career.cno);
                setStartDate(career.startDate);
                setEndDate(career.endDate);
                setDetail(career.detail);
            })
            .catch((error) => {
                alert(error);
            });
        }
    }, []) 

    const changeStartDateHandler = (event) => {
        setStartDate(event.target.value);
    }

    const changeEndDateHandler = (event) => {
        setEndDate(event.target.value);
    }

    const changeDetailHandler = (event) => {
        setDetail(event.target.value);
    }

    const createCareer = (event) => {
        event.preventDefault();
        let Career = {
            startDate: startDate,
            endDate: endDate,
            detail: detail
        }
        CareerService.createCareer(Career)
            .then((res) => {
                alert("success");
                navigate(-1);
            })
            .catch((error) => {
                alert(error);
            });
    }

    const updateCareer = () => {
        let Career = {
            cno: cno,
            startDate: startDate,
            endDate: endDate,
            detail: detail
        }
        CareerService.updateCareer(cno,Career)
            .then((res) => {
                alert("success");
                navigate(-1);
            })
            .catch((error) => {
                alert(error);
            });
    }

    const cancelCareer = () => {
        alert(cno);
        // navigate(`/introduction`, {replace:false});
        navigate(-1);
    }



    const showManu = (cno === '_create') ? 
    <ContentAddButton onClick={createCareer}>추가</ContentAddButton> 
    : <ContentAddButton onClick={updateCareer}>수정</ContentAddButton>;

    return (
        <div>
            <h1>소개</h1>
            {
                (props.isLogin) ?
                    <div id={cno} className="card">
                        <input type="date" placeholder="startDate" name={startDate} className="card-header"
                            value={startDate} onChange={changeStartDateHandler} />
                        <input type="date" placeholder="endDate" name={endDate} className="card-header"
                            value={endDate} onChange={changeEndDateHandler} />
                        <input type="text" placeholder="detail" name={detail} className="card-header"
                            value={detail} onChange={changeDetailHandler} />
                            {showManu}
                        <ContentAddButton onClick={cancelCareer}> 취소 </ContentAddButton>
                    </div>
                    :
                    <></>
            }

        </div>
    )
}

const ContentAddButton = styled.button`
    padding: 5vh
    
`

const ContentTextArea = styled.textarea`
    resize:none;
    overflow:visible;
    min-height: 40vh;
`