import React, { Component } from "react";
import "./UserInputItem.css";

class UserInputItem extends Component {
  render() {
    const { text, checked, id, onRemove } = this.props;
    // const { text, checked, id, onToggle, onRemove } = this.props;
    return (
      <div className="userInput-item">
        {/* onClick={() => onToggle(id)}> */}
        <div
          className="remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`userInput-text ${checked && "checked"}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}

export default UserInputItem;
