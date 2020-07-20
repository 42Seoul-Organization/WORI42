import React from "react";
import { PureComponent } from "react";

import CITIES from "./cities.json";

export default class ControlPanel extends PureComponent {
  _renderButton = (city, index) => {
    return (
      <div key={`btn-${index}`} className="input">
        <input
          type="radio"
          name="city"
          id={`city-${index}`}
          defaultChecked={city.city === "San Francisco"}
          onClick={() => this.props.onViewportChange(city)}
        />
        <label htmlFor={`city-${index}`}>{city.city}</label>
      </div>
    );
  };

  render() {
    return (
      <div className="control-panel">
        {CITIES.filter((city) => city.state === "한국").map(this._renderButton)}
      </div>
    );
  }
}
