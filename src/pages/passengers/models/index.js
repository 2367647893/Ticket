import api from '@/services';


export default {
    namespace: 'passengers',
    state: {
        PassengersList: [],
        checkList:[]
    },
    reducers: {
        setPassengersList(state, { payload }) {
            return {
                ...state,
                PassengersList: payload,
            }
        },
        setCheckList(state, { payload }) {
            console.log(payload);
            return {
                ...state,
                checkList: payload,
            }
        },
    },
    effects: {
        // 乘客列表数据
        *feactPassengersList({ payload }, { call, put, select }) {
            const res = yield call(api.getPassengersList, payload)
            if(res.msg === 'success'){
                yield put({
                    type:'setPassengersList',
                    payload:res.data
                })
            }
        },
        *feactCheck({ payload }, { call, put, select }) {
            console.log(payload);
            yield put({
                type:'setCheckList',
                payload
            })
        },
    
    }
}