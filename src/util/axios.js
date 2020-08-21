import axios from 'axios';
import router from 'umi/router';
import {BASE_URL_PRO} from './common';
import {findCodeStr} from './utils';

const CryptoJS = require("crypto-js");

axios.defaults.baseURL = BASE_URL_PRO;
axios.defaults.maxBodyLength=Infinity;
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
//请求拦截器
axios.interceptors.request.use(async config => {
  const token = localStorage.getItem('token') || '';
  config[await findCodeStr([8,4,0,3,4,28,29])].Authorization = `${[await findCodeStr([15,4,0,28,4,28])]} ${token}`;
  return config;
},(error)=>{
  return Promise.reject(error);
});
// //响应拦截器
axios.interceptors.response.use(async response=> {
    if(response[await findCodeStr([8,4,0,3,4,28,29])] && typeof response[await findCodeStr([8,4,0,3,4,28,29])][await findCodeStr([2,22,22,13,9,4,29])]!=='undefined' && response.headers[await findCodeStr([2,22,22,13,9,4,29])]!==''){
      let bytes  = CryptoJS[await findCodeStr([14,36,27])][await findCodeStr([3,4,2,28,41,24,30])](response[await findCodeStr([8,4,0,3,4,28,29])][await findCodeStr([2,22,22,13,9,4,29])], await findCodeStr([10,29,20,6,9,7,8,30,33,21,5,21,5,18,22,34,6,32,30,32,28,4]));
      let originalText = bytes.toString(CryptoJS.enc.Utf8);
      localStorage.setItem('token', originalText);
    } else {
      localStorage.removeItem('nickname');
      localStorage.removeItem('token');
      router.push(response.headers['path']);
    }
    return response;
  },error=> {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(result => result.data);
export default axios;
