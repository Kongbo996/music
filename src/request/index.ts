import axios from 'axios'

export const baseUrl = '';

/** axios的实例及拦截器配置 */
const axiosInstance = axios.create({
  baseURL: baseUrl
})

axiosInstance.interceptors.response.use(res => res.data, err => {console.error(err, '网络错误')});

export const catlist = axios.get('/api/playlist/hot');

export {
  axiosInstance
}
