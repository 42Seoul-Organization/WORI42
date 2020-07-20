import React from "react";
import request from "./request";
import { configs } from "./configs";

function test() {
  const data = request(
    "get",
    "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson",
    {
      serviceKey: decodeURIComponent(configs.Corona_Token),
      pageNo: 1,
      numOfRows: 10,
      startCreateDt: "20200601",
      endCreateDt: "20200620",
    }
  );
  return <React.Fragment>test/ </React.Fragment>;
}
export default test;
