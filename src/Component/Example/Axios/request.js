import axios from "axios";

function request(method, url, params) {
  return axios({
    method,
    url,
    params
  })
  .then((res) => {
    console.log(res.data.results[0]);
  })
  .catch((res) => {
    console.log(res);
  });
}

export default request;