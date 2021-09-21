import axios from 'axios'
import cookie from 'react-cookies'
export const baseUrl = '';

/** axios的实例及拦截器配置 */
const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000
})

// 添加请求拦截器
axiosInstance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  const user = cookie.load('userInfo')
  console.log(config)
  console.log('user-cookie', user)
 
  if (!user) {
      window.location.href = window.location.href.split('#')[0] + '#/login'
  }

  if(user && config.url.search('uid')) {
    config.params={
      uid: user.account.id,
      ...config.params
    }
  }

  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(res => res.data, err => {console.error(err, '网络错误')});

// axiosInstance.before

export {
  axiosInstance
}
