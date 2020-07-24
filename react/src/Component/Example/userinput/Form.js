import React from "react";
import "./Form.css";

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="create-button" onClick={onCreate}>
        마커 생성하기
      </div>
    </div>
  );
};

export default Form;
