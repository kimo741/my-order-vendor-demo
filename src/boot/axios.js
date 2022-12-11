import { boot } from 'quasar/wrappers'
import axios from "axios";
import { Cookies } from 'quasar'

let headers = {
  header: {
    "Content-Type":
      "multipart/form-data; charset=utf-8; boundary=" +
      Math.random().toString().substr(2),
    "Access-Control-Allow-Origin": "*",
  },
  processData: false,
  contentType: false,
  timeout: 1000,
};

const local_host = "http://127.0.0.1:8000/";
const local = "http://192.168.1.36/";
const server = "";
const domain = local;

const api = axios.create({
  baseURL: domain + "api/",
  withCredentials: false,
  headers,
});
// api.interceptors.request.use(
//   (config) => {
//     config.headers["Authorization"] = `Bearer ${Cookies.get('tokken')}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})
export { api };
