import React from "react";
import "./UserInputListTemplate.css";

const UserInputListTemplate = ({ form, children }) => {
  return (
    <main className="userInput-list-template">
      {/* <div className="title">오늘 할 일</div> */}
      <section className="form-wrapper">{form}</section>
      <section className="userInput-wrapper">{children}</section>
    </main>
  );
};

export default UserInputListTemplate;
