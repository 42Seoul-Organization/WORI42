import React from "react";

import "./InputBox.scss";

function InputBox() {
  return (
    <React.Fragment>
      <div className="mainBox">
          <h2>WOORI 42</h2>
          <p>정부가 가진 난제(코로나19 재난상황)를 국민과 함께 공동생산방식으로 문제해결 해커톤</p>
          <p>아래 검색어를 입력해주세요.</p>
          <input type="text" style={{background: "transparent"}}/>
          <p><a href="https://github.com/42Seoul-Organization/WORI42">Github</a> | Kakao Talk | Email</p>
      </div>
    </React.Fragment>
  );
}

export default InputBox;