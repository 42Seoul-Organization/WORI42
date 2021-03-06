import React, { useState, useCallback, useEffect } from "react";
import MapGL, { FlyToInterpolator } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import request from "../../Axios/request";
import InputBox from "./InputBoxGrid";
import Marker from "./Marker/Marker";
import Sliderbar from "./Slidebar/Sliderbar";
import Footer from "./Footer/Footer"
import "./compose.scss";

// import Chart from "../Chart/chart"
import dotenv from "dotenv";
dotenv.config();

function Compose() {
  const [info, setInfo] = useState({
    longitude: 127.024612,
    latitude: 37.5326,
    zoom: 5.5,
    pitch: 0,
    bearing: 0,
    transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
    transitionDuration: 1000,
    searchInfo: "",
    isMain: true,
  });

  const mainSearchInput = useCallback(
    (vp) => {
      setInfo({
        ...info,
        searchInfo: vp.target.value,
      });
    },
    [info]
  );

  const goToViewPort = useCallback(() => {
    request("get", `https://maps.googleapis.com/maps/api/geocode/json`, {
      address: info.searchInfo,
      key: process.env.REACT_APP_Google_Token,
    })
      .then((res) => {
        setInfo({
          ...info,
          isMain: false,
          latitude: res.data.results[0].geometry.location.lat,
          longitude: res.data.results[0].geometry.location.lng,
          zoom: 14,
          transitionInterpolator: new FlyToInterpolator(),
          transitionDuration: 1000,
        });
      })
      .catch((res) => {
        console.log(res);
      });
  }, [info]);

  useEffect(() => {
    if (info.isMain) {
      const interval = setInterval(() => {
        setInfo({
          ...info,
          latitude: info.latitude + 0.005,
          longitude: info.longitude + 0.005,
        });
      }, 50);
      return () => clearInterval(interval);
    }
    return;
  }, [info]);

  return (
    <MapGL
      {...info}
      width="100vw"
      height="100vh"
      // mapStyle="mapbox://styles/holee/ckcmzzc5y24hb1ip8lnkdt8sq"
      // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_THEME}
      onViewportChange={info.isMain ? ()=>{""} : (nextViewport) => setInfo({ ...info, ...nextViewport })}
      // mapStyle="mapbox://styles/mapbox/streets-v11"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker/>
      <div className="container">
        <div className="item">
          <InputBox
            info={info}
            setInfo={setInfo}
            mainSearchInput={mainSearchInput}
            goToViewPort={goToViewPort}
            isMain={info.isMain}
          />
        </div>
        { info.isMain ? ()=>{""} : <Sliderbar/> }
        <Footer/>
        {/* <Chart/> */}
      </div>
    </MapGL>
  );
}

export default Compose;
