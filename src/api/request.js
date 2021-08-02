import axios from 'axios';
import { ElMessage } from 'element-plus'
const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 8000
})
const NETWORK_ERROR = '网络请求异常，请稍后重试'


// 请求拦截
instance.interceptors.request.use((req) => {
    return req;
})

// 响应拦截
instance.interceptors.response.use((res) => {
    const { code, data, msg } = res.data;
    if (code === 200) {
        return data;
    } else {
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})

/**
 * 请求核心函数
 * @param {*} options 请求配置
 */
function request(options) {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data;
    }
    return instance(options)
}

['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})


export default request;