import request from '@/utils/request';
import api from './api';

// 商品分类列表
// export const setShow = payload => {
//   console.log(`${api.setShow}${payload}`, 1);
//   return request.put(`${api.setShow}${payload}`)
// }

//获取 商品分类列表
// export const categoryList = payload => 
// request.get(api.categoryList, payload)

// 注册
export const getRegister = payload => request.post(api.register,payload)

// 登录
export const getLogin = payload => request.post(api.login,payload)

// 主页出行快讯数据
export const getTravelList = payload => request.get(api.travelList,payload)