import React, { useState, useCallback, useEffect, useRef } from "react";
import MapGL, { FlyToInterpolator } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import request from "../Axios/request";
import InputBox from "./InputBoxGrid";
import Marker from "./Marker/Marker";
import Sliderbar from "./Slidebar/Sliderbar";
import Footer from "./Footer/Footer";
import SideBar from "./SideBar/SideBar";
import Pin from "../Marker/Pin";
import "./compose.scss";

// import Chart from "../Chart/Chart";
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
  const [userData, setUserData] = useState([]);
  const [convertedData, setConvertedData] = useState([]);
  const [idx, setIdx] = useState(0);
  const map_ref = useRef();

  const mainSearchInput = useCallback((vp) => {
    setInfo({
      ...info,
      searchInfo: vp.target.value,
    });
    console.log("hh");
  });

  const getAddress = (data) => {
    data.map((data) =>
      request("get", `https://maps.googleapis.com/maps/api/geocode/json`, {
        latlng: data[0] + "," + data[1],
        key: process.env.REACT_APP_Google_Token,
      })
        .then((res) => {
          let result = {
            province: res.data.results[0].address_components[1].long_name,
            city: res.data.results[0].address_components[2].long_name,
            group: "NEW",
            infection_case: "User_data",
            confirmed: 1,
            latitude: data[0],
            longitude: data[1],
            time: "UTF로 해주세요",
            name: "hochan",
          };
          setConvertedData([...convertedData, result]);
          shoot();
        })
        .catch((res) => {
          console.log(res);
        })
    );
  };

  const shoot = () =>
    request("post", `https://hackertonopendata.herokuapp.com/covid19/data/user`, {
      user_data: convertedData,
    })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  const go = (infor) => {
    request("get", `https://maps.googleapis.com/maps/api/geocode/json`, {
      address: infor,
      key: process.env.REACT_APP_Google_Token,
    })
      .then((res) => {
        console.log("search");
        setInfo({
          ...info,
          isMain: false,
          latitude: res.data.results[0].geometry.location.lat,
          longitude: res.data.results[0].geometry.location.lng,
          searchInfo: infor,
          zoom: 14,
          transitionInterpolator: new FlyToInterpolator(),
          transitionDuration: 1000,
        });
        if (markerList.length <= 6) {
          setMarkerList(
            markerList.concat([
              [
                res.data.results[0].geometry.location.lat,
                res.data.results[0].geometry.location.lng,
                infor,
              ],
            ])
          ); // 현재 지도에서 보고 있는 좌표의 정 가운데 좌표를 넣어줘야 함
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const goToViewPort = useCallback(() => {
    request("get", `https://maps.googleapis.com/maps/api/geocode/json`, {
      address: info.searchInfo,
      key: process.env.REACT_APP_Google_Token,
    })
      .then((res) => {
        console.log("search");
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
    if (info.isMain && info.longitude <= 128) {
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

  useEffect(() => {
    request("get", `https://hackertonopendata.herokuapp.com/covid19/data/covid19`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [markerList, setMarkerList] = useState([]);

  const func_create = (name) => {
    go(name);

    // if (markerList.length <= 6) {
    //   setMarkerList(markerList.concat([[info.latitude, info.longitude, name]])); // 현재 지도에서 보고 있는 좌표의 정 가운데 좌표를 넣어줘야 함
    // }
    setIdx(idx + 1);
    console.log(markerList);
  };

  const func_submit = () => {
    console.log(markerList);
    getAddress(markerList);
    console.log(convertedData);
  };

  const func_revise = (idx, latitude, longitude) => {
    let revised = markerList.slice();
    revised[idx][0] = latitude;
    revised[idx][1] = longitude;
    setMarkerList(revised);
  };

  return (
    <MapGL
      {...info}
      width="100vw"
      height="100vh"
      // mapStyle="mapbox://styles/holee/ckcmzzc5y24hb1ip8lnkdt8sq"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_THEME}
      onViewportChange={
        info.isMain
          ? () => {
              "";
            }
          : (nextViewport) => setInfo({ ...info, ...nextViewport })
      }
      // mapStyle="mapbox://styles/mapbox/streets-v11"
      // mapStyle="mapbox://styles/mapbox/dark-v9"
      mapStyle="mapbox://styles/holee/ckd0isb0511wr1iqvi1347ng8/draft"
      ref={map_ref}
      // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker userData={userData} />

      {markerList.map((data, index) => (
        <Pin
          key={index}
          num={index}
          latitude={data[0]}
          longitude={data[1]}
          func_revise={func_revise}
        />
      ))}

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
        {info.isMain ? (
          () => {
            "";
          }
        ) : (
          <Sliderbar />
        )}
        {info.isMain ? (
          () => {
            "";
          }
        ) : (
          <SideBar func_create={func_create} func_submit={func_submit} />
        )}
        <Footer />
        {/* <Chart /> */}
      </div>
    </MapGL>
  );
}

export default Compose;
