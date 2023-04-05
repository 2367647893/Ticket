import api from '@/services';


export default {
    namespace: 'passengers',
    state: {
        PassengersList: []

    },
    reducers: {
        setPassengersList(state, { payload }) {
            return {
                PassengersList: payload,
            }
        }
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
    
    }
}