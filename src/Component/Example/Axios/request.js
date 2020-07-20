import axios from "axios";

/* Example */
//
//  useEffect(()=> {
//   request(
//     "get",
//     "https://maps.googleapis.com/maps/api/geocode/json",
//     {
//       address: "개포동 이노베이션아카데미",
//       key: config.Google_Token,
//     }
//   );
//  , [])
//
// useEffect(()=> {
//   request(
//     "get",
//     "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson",
//     {
//       serviceKey: decodeURIComponent(configs.Corona_Token),
//       pageNo: 1,
//       numOfRows: 10,
//       startCreateDt: "20200601",
//       endCreateDt: "20200620",
//     }
//   );
// }, [])

function request(method, url, params) {
  return axios({
    method,
    url: url,
    params,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  })
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (err) {
      if (err.response) {
        console.log(err.response.status);
      }
    });
}

export default request;
