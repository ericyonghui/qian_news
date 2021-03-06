import React from "react";
import axios from 'axios';
import router from 'umi/router';
import {BASE_URL_PRO} from './common';
import {r} from './utils';

const CryptoJS = require("crypto-js");

axios.defaults.baseURL = BASE_URL_PRO;
axios.defaults.maxBodyLength=Infinity;
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
//请求拦截器
axios.interceptors.request.use(async config => {
  const token = localStorage.getItem('token') || '';
  config[await r([8,4,0,3,4,28,29])][await r([14,32,30,8,22,28,9,42,0,30,9,22,19])] = `${[await r([15,4,0,28,4,28])]} ${token}`;
  return config;
},(error)=>{
  return Promise.reject(error);
});
// //响应拦截器
axios.interceptors.response.use(async response=> {
    if(!/(\/u\/ckToken)/.test(response.request.responseURL)){
      if(response[await r([8,4,0,3,4,28,29])] && typeof response[await r([8,4,0,3,4,28,29])][await r([2,22,22,13,9,4,29])]!=='undefined' && response.headers[await r([2,22,22,13,9,4,29])]!==''){
        let bytes  = CryptoJS[await r([14,36,27])][await r([3,4,2,28,41,24,30])](response[await r([8,4,0,3,4,28,29])][await r([2,22,22,13,9,4,29])], await r([10,29,20,6,9,7,8,30,33,21,5,21,5,18,22,34,6,32,30,32,28,4]));
        let originalText = bytes.toString(CryptoJS.enc.Utf8);
        localStorage.setItem('token', originalText);
      } else {
        localStorage.removeItem('nickname');
        localStorage.removeItem('token');
        if(response[await r([8,4,0,3,4,28,29])] && response[await r([8,4,0,3,4,28,29])][await r([24,0,30,8])]){
          router.push(response[await r([8,4,0,3,4,28,29])][await r([24,0,30,8])]);
        }
      }
    }
    return response;
  },error=> {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(result => result.data);
export default axios;
