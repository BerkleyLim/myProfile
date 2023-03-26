import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./print.css";

const PrintComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user?.isLogin) {
      alert("로그인 후 사용해주세요");
      navigate(-1);
    }
  }, []);

  // const onPrintHandler = () => {
  //   let printContents = ReactDOM.findDOMNode(a4Notice.current).innerHTML;
  //   let windowObject = window.open('', "PrintWindow", "width=1000, height=800, top=100, left=300, toolbars=no, scrollbars=no, status=no, resizale=no");
  
  //   windowObject.document.writeln(printContents);
  //   windowObject.document.close();
  //   windowObject.focus();
  //   windowObject.print();
  //   windowObject.close();
  // }

  return (
    <>
      {user.isLogin && (
        <div>
          <h3>Print</h3>
          <div>다음 중 소개를 넣을 것을 선택하세요</div>
          <div>title</div>

          <div>다음 중 이력사항을 선택하세요</div>
        </div>
      )}
    </>
  );
};

export default PrintComponent;
