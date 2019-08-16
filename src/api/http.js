import { Message } from 'element-ui'
import axios from 'axios';
import config from '@/config'
import store from '@/store'
import qs from 'qs'

let { developmentUrl, testUrl, productionUrl } = config

if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = developmentUrl //访问的api前缀
} else if (process.env.NODE_ENV == 'test') {
  axios.defaults.baseURL = testUrl //访问的api前缀
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = productionUrl //访问的api前缀
}

// axios.defaults.baseURL = apisite //访问的api前缀
// axios.defaults.timeout = 10000; //请求超时时间
// axios.defaults.withCredentials = true; //每次请求携带cookie
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// http request 请求拦截器，有token值则配置上token值
axios.interceptors.request.use(
  config => {
    const { token } = store.state.user.userInfo;
    if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
      config.headers.Authorization = token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);//请求错误时，直接结束
  }
);

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // to do
    return Promise.reject(error.response.data) //请求错误时，直接结束
  }
);

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then((res) => {
      resolve(res.data)
    }).catch(err => {
      Message.error(err);
    })
  })
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then((res) => {
        resolve(res.data)
      }).catch(err => {
        Message.error(err);
      })
  })
}

export function uploadFiles(url, file) {
  let formData = new FormData();
  formData.append("file", file);
  return new Promise((resolve, reject) => {
    axios.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then((res) => {
      resolve(res.data)
    }).catch(err => {
      Message.error(err);
    })
  })
}