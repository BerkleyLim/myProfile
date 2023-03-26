import React, { useState } from "react";
import {
  useNavigate,
  //  useParams
} from "react-router-dom";
// import "./introduction.css";
import IntroductionService from "../../service/IntroductionService";
import styled from "styled-components";
// import { ItemTypes } from "../../util/dnd";
// import { ItemTypes } from '../../utils/items';

// import { ItemTypes } from './item';
// import { useDrag, useDrop } from "react-dnd";

const IntroductionFormComponent = ({data, isLogin, moveIntroduction, index}) => {
  //   const param = useParams();
  const navigate = useNavigate();
  const [introduction, setIntroduction] = useState({ ...data });
  const [isUpdate, setIsUpdate] = useState(false);

  // 기능 추가
  const onChange = (e) => {
    const { name, value } = e.target;
    setIntroduction({
      ...introduction,
      // [e.target.name]: e.target.value, // <- 변경 후
      [name]: value,
    });
  };

  const cancelIntroduction = () => {
    setIsUpdate(!isUpdate);
  };

  const toggleIntroduction = () => {
    IntroductionService.updateIntroduction(introduction.ino, introduction)
      .then((res) => {
        alert("success");
        setIsUpdate(!isUpdate);
        // navigate(-1);
      })
      .catch((error) => {
        alert(error);
      });
    // console.log(introduction)
  };

  const deleteContents = (ino) => {
    IntroductionService.deleteIntroduction(ino);
    navigate(0);
  };


  const handleSetTab = (e) => {
    // tab key : keycode = 9
    if (e.keyCode === 9) {
      e.preventDefault(); // 탭 이동 방지
      let val = e.target.value;
      let start = e.target.selectionStart;
      let end = e.target.selectionEnd;
      e.target.value = val.substring(0, start) + "\t" + val.substring(end);
      onChange(e);
      return false; // prevent focus
    }
  }

  // drag and drop 관련
  // 참조 : https://velog.io/@suyeonme/React-DragDrop-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
  // 문서 참조 : https://react-dnd.github.io/react-dnd/docs/api/use-drag
  // const ref = useRef(null); // (*)

  // const [, drop] = useDrop({
  //   // (*)
  //   accept: ItemTypes.CARD,
  //   hover(item, monitor) {
  //     if (item.index === index)
  //       return
  //     // if (!ref.current) {
  //     //   return;
  //     // }

  //     // const dragIndex = item.index;
  //     // const hoverIndex = index;

  //     // if (dragIndex === hoverIndex) {
  //     //   return;
  //     // }

  //     // const hoverBoundingRect = ref.current?.getBoundingClientRect();
  //     // const hoverMiddleY =
  //     //   (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
  //     // const clientOffset = monitor.getClientOffset();
  //     // const hoverClientY = clientOffset.y - hoverBoundingRect.top;

  //     // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
  //     //   return;
  //     // }

  //     // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
  //     //   return;
  //     // }

  //     // moveIntroduction(dragIndex, hoverIndex);
  //     moveIntroduction(item.index, index);

  //     // item.index = hoverIndex;
  //     item.index = index;
  //   },
  // });

  // const [{ isDragging }, drag] = useDrag({
  //   // (*)
  //   item: { type: ItemTypes.CARD, data, index },
  //   // item: { type: ItemTypes.CARD, index },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // });

  // drag(drop(ref)); // (*)
  // drag and drop 끝

  return (
    <div>
      {isUpdate ? (
        <div id={data?.ino} className="card">
          <input
            type="text"
            placeholder="title"
            name="title"
            className="card-header"
            defaultValue={data?.title}
            onChange={onChange}
          />
          <ContentTextArea
            placeholder="contents"
            name="contents"
            className="card-body"
            defaultValue={data?.contents}
            onChange={onChange}
            onKeyDown={handleSetTab}
          />
          <div className="card-footer row">
            <button className="col md-6" onClick={() => toggleIntroduction()}>
              수정
            </button>
            <button className="col md-6" onClick={() => cancelIntroduction()}>
              취소
            </button>
          </div>
        </div>
      ) : (
        <div
          id={data?.ino}
          className="card"
          // ref={ref}
          // isDragging={isDragging}
          style={{
            // border: "1px solid blue",
            opacity: `${(props) => (props.isDragging ? 0 : 1)}`,
            // backgroundColor: "green",
          }}
        >
          <h5 className="card-header">{data?.title}</h5>
          <div className="card-body">
            <span className="card-text" style={{whiteSpace: "pre-wrap"}}> {data?.contents}</span>
          </div>
          {isLogin && (
            <div className="card-footer row">
              <button
                className="col md-6"
                onClick={() => setIsUpdate(!isUpdate)}
              >
                내용 수정
              </button>
              <button
                className="col md-6"
                onClick={() => deleteContents(data.ino)}
              >
                내용 삭제
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// const ContentAddButton = styled.button`
//   padding: 5vh;
// `;

const ContentTextArea = styled.textarea`
  resize: none;
  overflow: visible;
  min-height: 40vh;
`;

export default IntroductionFormComponent;
