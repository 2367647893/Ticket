import api from '@/services';
import { history } from 'umi';
import { Toast } from 'antd-mobile'

export default {
    namespace: 'home',
    state: {
        PassengersList: []

    },
    reducers: {
        setPassengersList(state, { payload }) {
            console.log(payload);
            return {
                // PassengersList: payload,
            }
        }
    },
    effects: {
        // 乘客列表数据
        *feactPassengersList({ payload }, { call, put, select }) {
            const res = yield call(api.getPassengersList, payload)
            console.log(res);
        },
    
    }
}