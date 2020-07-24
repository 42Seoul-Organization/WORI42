import React, { Component } from "react";
import UserInputItem from "./UserInputItem";

class UserInputList extends Component {
  render() {
    const { todos, onRemove } = this.props;
    // const { todos, onToggle, onRemove } = this.props; // 위에 다시 정의
    const todoList = todos.map(({ id, text, checked }) => (
      <UserInputItem
        id={id}
        text={text}
        checked={checked}
        //onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));

    return <div>{todoList}</div>;
  }
}

export default UserInputList;
