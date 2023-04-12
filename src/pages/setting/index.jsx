import React, { useEffect, useState } from "react";
import { connect } from 'dva';
import { history } from 'umi';
import {Button } from 'antd-mobile'
import Icons from '@/components/Icons'
import './styles.less'
export default connect((state) => {
    console.log(state);
    return {
        
    }
})(setting)
function setting(props) {
    const { dispatch } = props
    const [token, setToken] = useState(localStorage.getItem('ticketToken'))
    const back = () => {
        history.go(-1)
    }
    // 跳转到修改密码页
    const jumpConfirmpwd = () => {
        history.push('/confirmpwd')
    }
    return (
        <div styleName="set_box">
            {
                token === null ?
                    <Routing title={'在线客服'} />
                    :
                    <>
                        <div styleName="set_head">
                            设置
                            <div styleName="set_icon" onClick={back}>
                                <Icons name={'icon-xiangzuo'} />
                            </div>
                        </div>
                        {/* websockt客服聊天 */}
                        <div styleName="set_sec">
                            <div styleName="set_name">
                                
                            </div>
                            <div styleName="set_ting" onClick={jumpConfirmpwd}>
                                <div styleName="setting_box">
                                    <Icons name={'icon-24gl-unlock2'} />
                                    <span>修改密码</span>
                                </div>
                                <div>
                                    <Icons name={'icon-xiangyou'} />
                                </div>
                            </div>
                            <Button>退出登录</Button>
                        </div>
                    </>
            }
        </div>
    )
}