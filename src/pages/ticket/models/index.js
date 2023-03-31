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
            console.log(payload);
         
            return {
                
            }
        },
        setJumpTicketDetail(state,{payload}){
            console.log(payload);
            return{

            }
        }
    },
    effects: {
        // 车票数据
        *feactTicketDetail({ payload }, { call, put, select }) {
            const res = yield call(api.getTicketList, payload)
            console.log(res);
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