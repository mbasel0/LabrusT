import axios from "axios";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';





const createAxios = (url) =>
  axios.create({
    baseURL: `https://api.ziyuno.com/api/${url}`,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
  

    },

    validateStatus(status) {
      return status >= 200 && status < 400;
    },
  });

var packages = createAxios("package");
var auth = createAxios("auth");

var ApiStore = {
  package: packages,
  auth: auth,
};


export default ApiStore;
