import {history} from 'umi';
// import request from '@/utils/request';
import api from '@/services'

// 局部 dva
export default {

  // 命名空间
  namespace: 'detail',

  state: {
    user: '',
    data: {},
    list: [],
  },

  //修改数据   
  reducers: {

    // 详情 单条数据
    setDetail(state, { payload}) {
      return {
        ...state,
        data: {
          ...payload,
          ...JSON.parse(payload.info)
        }
      }
    },

    // 列表 多个数据
    setList(state, {
      payload
    }) {
      const {list,count} = payload
      const value = list.map(dt => {
        return {
          ...dt,
          ...JSON.parse(dt.info)
        }
      })
      return {
        ...state,
        list: value,
        count,
      }
    },
  },

  //异步   
  effects: {

    // 
    * fetchUser({payload}, {call,put,select}) {
      
      const res = yield call(api.categoryList, payload)
      console.log(res)
      // 
      // if (res) {
      //   yield put({
      //     type: 'setList',
      //     payload: res.result,
      //   })
      // }
    },

  },
};
