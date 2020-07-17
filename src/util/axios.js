import axios from 'axios';
import {BASE_URL_PRO} from './common';

axios.defaults.baseURL = BASE_URL_PRO;
axios.defaults.maxBodyLength=Infinity;
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

axios.interceptors.response.use(result => result.data);
export default axios;
