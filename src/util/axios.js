import axios from 'axios';
import {BASE_URL_PRO} from './common';

axios.defaults.baseURL = BASE_URL_PRO;
axios.defaults.maxBodyLength=Infinity;
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
//请求拦截器
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token') || '';
  config.headers.Authorization = `Bearer ${token}`;
  return config;
},(error)=>{
  return Promise.reject(error);
});
// //响应拦截器
axios.interceptors.response.use(response=> {
    return response;
  },error=> {
    if(error.response) {
      const { status } = error.response;
      //如果401或405则到登录页
      if (status === 401 || status === 405) {
        localStorage.removeItem('nickname');
        localStorage.removeItem('token');
      }
    }
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(result => result.data);
export default axios;
