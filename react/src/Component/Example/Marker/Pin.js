import React from "react";
import { Marker } from "react-map-gl";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

export class Pin extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      num: props.num,
      marker: {
        latitude: props.latitude,
        longitude: props.longitude,
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
    this.props.func_revise(this.state.num, event.lngLat[0], event.lngLat[1]);
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
          <svg
            height={SIZE}
            viewBox="0 0 24 24"
            style={{
              cursor: "pointer",
              fill: "#d00",
              stroke: "none",
              transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
            }}
          >
            <path d={ICON} />
          </svg>
        </Marker>
      </React.Fragment>
    );
  }
}

export default Pin;
