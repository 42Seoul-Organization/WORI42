import React, { useState } from "react";
import { render } from "react-dom";

function Slider(props) {
  const [value, setValue] = useState(12);
  const _onChangeslider = (e) => {
    setValue(e.target.value);
    props.onChangeHandler(e.target.value);
  };

  return (
    <div class="session" id="sliderbar">
      <h2>
        Hour: <label id="active-hour">{value}</label>
      </h2>
      <input
        id="slider"
        class="row"
        type="range"
        min="0"
        max="23"
        step="1"
        value={value}
        onChange={(e) => _onChangeslider(e)}
      />
    </div>
  );
}

export default Slider;
