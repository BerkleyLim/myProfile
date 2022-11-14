import React, { useState } from 'react'

export default function AppComponent(props) {
    // let [title, setTitle] = useState(<h3>ReactJS 및 Spring boot 주니어 개발자로 업체와 함께하고 싶습니다.</h3>);
    let [title, setTitle] = useState(<h3>React와 Spring 같이 스터디 하실분 구합니다.</h3>);
    let [content, setContent] = useState(data);

    const update = () => {

    }

    const changeTitle = (event) => {
        setTitle(event.target.value);
    }

    const changeContent = (event) => {
        setContent(event.target.value);
    }
    return (
        <div>
            {props.isLogin ?
                // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
                <div>
                    {/* <h2>메인 공지</h2> */}
                    <div>
                        <input type='text' className='form-control' name={title} contenteditable value={title} onChange={changeTitle} />
                        <textarea className='form-control' name={content} contenteditable value={content} onChange={changeContent} />
                    </div>
                    {/* <div>
                        <button type='button' onClick={update}>Login</button>
                    </div> */}
                </div> :
                <div>
                    {/* <h2>메인 공지</h2> */}
                    
                    <div>
                        <div className='form-control' >{title}</div>
                        <div className='form-control' >{content}</div>
                    </div>
                    {/* {data} */}
                    {/* <div>
                        <button type='button' onClick={update}>Login</button>
                    </div> */}
                </div>}
        </div>
    )
}


const data = <>"리뉴얼 중입니다. 현재 동적 페이지로 변환할 수 있게 운영중입니다."</>;