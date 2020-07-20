import React from "react";
import request from "./request";
import { config } from "./config";

function Search_test() {
  const data = request(
    "get",
    "https://maps.googleapis.com/maps/api/geocode/json",
    {
      address: "개포동 이노베이션아카데미",
      key: config.Google_Token,
    }
  );
  return <React.Fragment>test/ </React.Fragment>;
}
export default Search_test;
