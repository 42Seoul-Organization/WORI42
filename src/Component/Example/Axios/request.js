import axios from "axios";

const request = async (method, url, params, func) => {
  return await axios({
    method,
    url,
    params
  })
}

export default request;