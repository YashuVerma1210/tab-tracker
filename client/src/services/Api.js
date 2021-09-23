/* eslint-disable semi */
/* eslint-disable quotes */
import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "http://localhost:8081/"
  });
};
