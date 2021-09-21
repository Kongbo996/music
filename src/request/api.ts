import axios from 'axios';
import { axiosInstance } from './index'

// 推荐歌单/personalized
export const personalized = (limit: number) => {
  return axiosInstance.get(`/api/personalized?limit=${limit}`)
};

/** 轮播图 /banner */
export const bannerList = () => {
  return axiosInstance.get(`/api/banner?type=2`)
}

/**
 * 精品歌单标签列表
 * /playlist/highquality/tags 
 */
export const playerListTags = () => {
  return axiosInstance.get('/api/playlist/highquality/tags')
}

/**
 * 获取歌单详情
 * /playlist/detail?id=24381616
 */
 export const playListDetail = (id: number) => {
  return axiosInstance.get(`/api/playlist/detail?id=${id}`)
}

/**
 * 热门歌手列表
 * /top/artists?offset=0&limit=30 offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 */
 export const topArtists = () => {
  return axiosInstance.get('/api/top/artists?offset=0&limit=30')
}

/**
 * 筛选歌手列表
 * artist/list
 * initial: 按首字母索引查找参数,
 * 如 /artist/list?type=1&area=96&initial=b 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列, 
 * 热门传-1,#传0
 */
 export const artistList = () => {
  return axiosInstance.get('/api/top/artists?offset=0&limit=30')
}

/** 获取验证码 */
export const getCaptcha = (phone: number) => {
  return axiosInstance.get(`/api/captcha/sent?phone=${phone}`)
}

/** 获取验证码 /captcha/verify */
export const getVerify = (phone: number, captcha: string|number) => {
  return axiosInstance.get(`/api/captcha/verify?phone=${phone}&captcha=${captcha}`)
}

export const loginStatus = () => {
  return axiosInstance.get('/api/login/status')
}

/** 手机号密码登录 */
export const getLoginPhone = (phone: number, password: string) => {
  return axiosInstance.get(`/api/login/cellphone?phone=${phone}&password=${password}`)
}

export const mapUrl = {
  song: {
    getSongUrl: '/api/song/url', // 歌曲url 
    getRecord: '/uid/user/record' // 播放记录
  },
  singers: {
    getSingersList: '/api/toplist/artist', // 歌手分类
  },
  rank: {
    getTopList: '/api/toplist' // 所有榜单
  }
}