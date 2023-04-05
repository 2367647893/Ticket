import api from '@/services';
import { history } from 'umi';
import { Toast } from 'antd-mobile'
export default {
    namespace: 'home',
    state: {
        travelList: []

    },
    reducers: {
        setTravelList(state, { payload }) {
            return {
                travelList: payload,
            }
        }
    },
    effects: {
        // 主页出行快讯数据
        *feactList({ payload }, { call, put, select }) {
            const res = yield call(api.getTravelList, payload)
            if (res.code === 0) {
                yield put({
                    type: 'setTravelList',
                    payload: res.data
                })
            }
        },
        // 车票数据
        *feactTicket({ payload }, { call, put, select }) {
            const res = yield call(api.getQueryList, payload)
            console.log(res);
            // if (res.code === 0) {
            //     yield put({
            //         type: 'setTravelList',
            //         payload: res.data
            //     })
            // }
        },
    }
}
