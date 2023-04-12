import api from '@/services';

export default {
    namespace: 'orderList',
    state: {
        orderList: [],

    },
    reducers: {
        setOrderList(state, { payload }) {
            return {
                orderList: payload,
            }
        }
    },
    effects: {
        // 订单列表
        *fetchOrderList({ payload }, { call, put, select }) {
            const res = yield call(api.getOrderList, payload)
            if (res.code === 200) {
                yield put({
                    type: 'setOrderList',
                    payload: res.data
                })
            }

        }
    }
}