import api from '@/services';
import { history } from 'umi';
import { Toast } from 'antd-mobile'

export default {
    namespace: 'login',
    state: {
        ticketToken: "",
        userInfo: {},

    },
    reducers: {
        setUserInfo(state, { payload }) {
            console.log(payload);
            return {
                ticketToken: payload.token,
                userInfo: payload,
            }
        }
    },
    effects: {
        // 登录
        *fetchLogin({ payload }, { call, put, select }) {
            const res = yield call(api.getLogin, payload)
            if (res.data.code === 200) {
                yield put({
                    type: 'setUserInfo',
                    payload: res.data
                })
                // 存储token
                localStorage.setItem('ticketToken', res.data.token)
                // 存储登录数据
                localStorage.setItem('userInfo', JSON.stringify(res.data))
                // 跳转到首页
                history.push('/')
                // 登录成功提示
                Toast.show({
                    icon: 'success',
                    content: '登录成功',
                })
            }

        }
    }
}