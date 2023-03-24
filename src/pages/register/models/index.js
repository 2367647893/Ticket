import api from '@/services';
import { history } from 'umi';
import {Toast} from 'antd-mobile'
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
        // 注册
        *fetchReg({payload},{call, put, select}){
            const res = yield call(api.getRegister,payload)
        },
        // 登录
        *fetchLogin({payload},{call, put, select}){
            const res = yield call(api.getLogin,payload)
            if (res.data.code === 200) {
                // 存储token
                localStorage.setItem('ticketToken', res.data.token)
                // 存储登录数据
                localStorage.setItem('userInfo', JSON.stringify(res.data))
                // 跳转到首页
                history.push('/')
                // 登录成功提示
                Toast.show({
                    icon: 'success',
                    content: '注册成功',
                })
            }
        }
    }
}