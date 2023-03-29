import api from '@/services';
// import { history } from 'umi';
// import { Toast } from 'antd-mobile'

export default {
    namespace: 'query',
    state: {
        ticketList: {},
        trains:[]
    },
    reducers: {
        setTicketList(state, { payload }) {
            // console.log(payload);
            const {dataMap} = payload
            console.log(dataMap.directTrainInfo.trains);
            return {
                trains:dataMap.directTrainInfo.trains
            }
        }
    },
    effects: {
        // 车票数据
        *feactTicket({ payload }, { call, put, select }) {
            const res = yield call(api.getQueryList, payload)
            console.log(res);
            if (res.code === 0) {
                yield put({
                    type: 'setTicketList',
                    payload: res.data
                })

            }
        },
    }
}