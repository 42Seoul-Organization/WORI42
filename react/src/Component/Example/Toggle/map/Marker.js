import React from "react";
import { Marker } from "react-map-gl";
import SwitchExample from "./Toggle";

export class MyMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: {
        latitude: 37.5326,
        longitude: 127.024612,
      },
    };
  }

  _logDragEvent(name, event) {
    this.setState({
      events: {
        ...this.state.events,
        [name]: event.lngLat,
      },
    });
  }

  _onMarkerDragStart = (event) => {
    this._logDragEvent("onDragStart", event);
  };

  _onMarkerDrag = (event) => {
    this._logDragEvent("onDrag", event);
  };

  _onMarkerDragEnd = (event) => {
    this._logDragEvent("onDragEnd", event);
    console.log(event.lngLat);
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1],
      },
    });
  };

  render() {
    const { marker } = this.state;
    return (
      <React.Fragment>
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          onDragStart={this._onMarkerDragStart}
          onDrag={this._onMarkerDrag}
          onDragEnd={this._onMarkerDragEnd}
        >
          <div>움직이는 마커</div>
        </Marker>
        <SwitchExample />
      </React.Fragment>
    );
  }
}

export default MyMarker;
