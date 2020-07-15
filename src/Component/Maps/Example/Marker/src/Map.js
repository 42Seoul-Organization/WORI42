import React from "react";
import { Component } from "react";
import ReactMapGL, { Popup } from "react-map-gl";
import Pins from "./pins";
import CITIES from "./cities.json";
import { render } from "react-dom";
import ControlPanel from "./control-panel";
import CityInfo from "./city-info";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoia2FuZ2ptMiIsImEiOiJja2Ntc3lqNmswNGh4MnpvM2pmYXhpenAyIn0.TOSD-p656HE5pMv6T-7kKQ"; // Set your mapbox token here

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100vw",
        height: "100vh",
        latitude: 38,
        longitude: 128,
        zoom: 8,
        bearing: 0,
        pitch: 0,
      },
      popupInfo: null,
    };
  }

  _updateViewport = (viewport) => {
    this.setState({ viewport });
  };

  _onClickMarker = (city) => {
    this.setState({ popupInfo: city });
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          <Pins data={CITIES} onClick={this._onClickMarker} />
          {this._renderPopup()}
          <ControlPanel containerComponent={this.props.containerComponent} />
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;

export function renderToDom(container) {
  render(<Map />, container);
}
