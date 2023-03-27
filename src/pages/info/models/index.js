import api from '@/services';
import { history } from 'umi';

export default {
    namespace: 'info',
    state: {
        infoList: []

    },
    reducers: {
        setInfoList(state, { payload }) {
            return {
                infoList: payload,
            }
        }
    },
    effects: {
        // 全部资讯数据
        *feactInfoList({ payload }, { call, put, select }) {
            const res = yield call(api.getTravelList, payload)
            if (res.code === 0) {
                yield put({
                    type: 'setInfoList',
                    payload: res.data
                })
            }

        }
    }
}