import axios from 'axios';
import qs from 'qs'
import { message } from 'antd'


let http = {
    post:"",
    get:""
}

// http.post = function(api, data){
//     let params = qs.stringify(data)
//     return new Promise((resolve, reject) => {
//         axios.post(api, params)
//         .then(res => {
//             resolve(res)
//         })
//     })
// }

http.get = function(url){
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then(res => {
            resolve(res)
        })
    })
}




export default http



// axios.defaults.timeout = 50000;
// // 设置凭证，允许服务器设置cookie，同时要和服务器处于同一域名下
// axios.defaults.withCredentials = true

// let baseURL;
// if (process.env.NODE_ENV === 'development') {
//     baseURL = 'http://makeup-api.herokuapp.com/api/v1';
// // 编译环境
// } else {
//     // 测试环境
//     if (process.env.type === 'test') {
//         baseURL = 'http://makeup-api.herokuapp.com/api/v1';
//     // 正式环境
//     } else {
//         baseURL = 'http://makeup-api.herokuapp.com/api/v1';
//     }
// }
// axios.defaults.baseURL = baseURL; 
// // http request 拦截器
// axios.interceptors.request.use(
//     config => {
//         config.headers = {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         };
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     });
// // http response 拦截器
// axios.interceptors.response.use(
//     response => {      
//         return response;
//     },
//     error => {
//         return Promise.reject(error.response.data)
//     });
// export default axios;
