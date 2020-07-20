import axios from "axios";

axios.defaults.withCredentials = true;

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
