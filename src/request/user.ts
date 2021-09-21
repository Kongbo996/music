// 
import { axiosInstance } from './index'


 /** 用户详情/user/detail */
export const getUserDetail = (uid: number) => {
  return axiosInstance.get(`/api/user/detail?uid=${uid}`)
};

/** 获取账号信息 /user/account */
export const getUserAccount = () => {
  return axiosInstance.get(`/api/user/account`)
};