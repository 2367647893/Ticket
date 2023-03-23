import api from '@/services';
import { history } from 'umi';

export default{
    namespace:'reg',
    state:{
        regData:{}
    },
    reducers:{
        setRegData(state,{payload}){
            return {

            }
        }
    },
    effects:{
        *fetchReg({payload},{call,put,select}){
            const res = yield call(api.getRegister,payload)
            console.log(res);
        }
    }
}