import React, { useState } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import AppService from '../service/AppService';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function AppComponent({ isLogin, setIsLogin, toggle }) {
	// let [title, setTitle] = useState(<h3>ReactJS 및 Spring boot 주니어 개발자로 업체와 함께하고 싶습니다.</h3>);
	let [title, setTitle] = useState(<h3>React와 Spring 같이 스터디 하실분 구합니다.</h3>);
	let [content, setContent] = useState(data);
	let [editorState, setEditorState] = useState(() => EditorState.createEmpty());

	// useEffect({
	//     // AppService.getApp()
	// },[])
	const changeTitle = (event) => {
		setTitle(event.target.value);
	};

	const changeContent = (event) => {
		setContent(event.target.value);
	};

	const handleKeyCommand = (command, editorState) => {
		// RichUtils에 사용될 에디터 플러스
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			setEditorState(newState);
			return 'handled';
		}

		return 'not-handled';
	};

    const _onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
      }

	const eventLogin = () => {
		setIsLogin(!isLogin);
		toggle()
	};
	return (
		<div>
			{isLogin ? (
				// Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
				<Form>
					<FormGroup>
                    <button onClick={_onBoldClick}>Bold</button>
						<Editor
							editorState={editorState}
							onChange={setEditorState}
							handleKeyCommand={handleKeyCommand}
						/>
						<Input type="text" name={title} value={title} onChange={changeTitle}></Input>
                        <button onClick={eventLogin}>버튼 클릭</button>
					</FormGroup>
				</Form>
			) : (
				// <div>
				//     {/* <h2>메인 공지</h2> */}
				//     <div>
				//         <input type='text' className='form-control' name={title}  value={title.props.children} onChange={changeTitle} />
				//         <textarea className='form-control' name={content} value={content.props.children} onChange={changeContent} />
				//     </div>
				// </div> :
				<div>
					{/* <h2>메인 공지</h2> */}
					{console.log(title)}

					<div>
						<div className="form-control">{title}</div>
						<div className="form-control">{content}</div>
					</div>
					<button onClick={eventLogin}>버튼 클릭</button>
					{/* {data} */}
				</div>
			)}
		</div>
	);
}

const data = <>"리뉴얼 중입니다. 현재 동적 페이지로 변환할 수 있게 운영중입니다."</>;
