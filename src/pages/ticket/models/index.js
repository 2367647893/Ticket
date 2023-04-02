import api from '@/services';
// import { history } from 'umi';
// import { Toast } from 'antd-mobile'

export default {
    namespace: 'ticket',
    state: {
        ticketListDetail:[],
        jumpTicketDetail:{}
    },
    reducers: {
        setTicketListDetail(state, { payload }) {
            return {
                ...state,
                ticketListDetail:payload
            }
        },
        setJumpTicketDetail(state,{payload}){
            return{
                ...state,
                jumpTicketDetail:payload
            }
        }
    },
    effects: {
        // 车票数据
        *feactTicketDetail({ payload }, { call, put, select }) {
            const res = yield call(api.getTicketList, payload)
            yield put({
                type:'setTicketListDetail',
                payload:res.data.candidates
            })
        },
        *feactJumpTicketDetail({ payload }, { call, put, select }) {
            yield put({
                type:'setJumpTicketDetail',
                payload,
            })
        },
    }
}