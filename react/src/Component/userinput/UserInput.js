import React, { Component } from "react";
import UserInputListTemplate from "./UserInputListTemplate";
import Form from "./Form";
import UserInputList from "./UserInputList";

class UserInput extends Component {
  id = 3;

  state = {
    input: "",
    todos: [],
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.props.func_create(input);
    if (todos.length <= 6) {
      this.setState({
        input: "",
        todos: todos.concat({
          id: this.id++,
          text: input,
          checked: false,
        }),
      });
    }
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  // handleToggle = (id) => {
  //   const { todos } = this.state;

  //   const index = todos.findIndex((todo) => todo.id === id);
  //   const selected = todos[index];

  //   const nextTodos = [...todos];

  //   nextTodos[index] = {
  //     ...selected,
  //     checked: !selected.checked,
  //   };

  //   this.setState({
  //     todos: nextTodos,
  //   });
  // };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      // handleToggle,
      handleRemove,
    } = this;

    return (
      <UserInputListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <UserInputList
          todos={todos}
          // onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </UserInputListTemplate>
    );
  }
}

export default UserInput;
