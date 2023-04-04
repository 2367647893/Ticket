import api from '@/services';

export default {
    namespace: 'query',
    state: {
        ticketList: {},
        trains:[]
    },
    reducers: {
        setTicketList(state, { payload }) {
            const {dataMap} = payload
            return {
                trains:dataMap.directTrainInfo.trains
            }
        }
    },
    effects: {
        // 车票数据
        *feactTicket({ payload }, { call, put, select }) {
            const res = yield call(api.getQueryList, payload)
            if (res.code === 0) {
                yield put({
                    type: 'setTicketList',
                    payload: res.data
                })

            }
        },
    }
}