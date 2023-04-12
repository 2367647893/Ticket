import React, { useState } from "react";
import { connect } from 'dva';
import { history } from 'umi';
import UserName from "@/components/UserName";
import Icons from "@/components/Icons";
import Guard from '@/components/Guard'
import './styles.less'
export default connect((state) => {
    return {

    }
})(user)
function user(props) {
    const [token, setToken] = useState(localStorage.getItem('ticketToken'))
    const [guard,setGuard] = useState(false)
    const jump_setting = () => {
        history.push('/setting')
    }
    const jumpLogin = () => {
        history.push('/login')
    }
    // 跳转乘客列表
    const jumpPassengers = () => {
        if(token === null){
            setGuard(true)
        }else{
            history.push('/passengers')
        }
    }

    // 跳转订单
    const jumpOrderList = () => {
        if(token === null){
            setGuard(true)
        }else{
            history.push('/orderList')
        }
    }

    // 跳转客服
    const jumpServicess = () => {
        if(token === null){
            setGuard(true)
        }else{
            history.push('/servicess')
        }
    }
    return (
        // 我的页面
        <div styleName="user_box">
            {
                guard?
                <Guard switchBtn={guard} />
                :
                null
            }
            <div styleName="user_head">
                <div styleName="head"></div>
                
                <div styleName="user_card">
                    {
                        token === null ?

                            <dl onClick={jumpLogin}>
                                <dt><Icons name={'icon-wode-F'} /></dt>
                                <dd>
                                    登录/注册
                                </dd>
                            </dl>
                            :
                            <>
                                <div styleName="head_lef">
                                    <UserName />
                                </div>
                                <div styleName="head_rig" onClick={jump_setting}>
                                    {/* icon图标 */}
                                    <Icons name={'icon-xiangyou'} />
                                </div>
                            </>
                    }
                </div>
            </div>
            <div styleName="card_box">
                <div styleName="card">
                    <div styleName="card_tit" onClick={jumpPassengers}>
                        <div>
                            <Icons name={'icon-ziyuan'} />
                            <span styleName="webk">
                                常用乘客
                            </span>
                        </div>
                        <Icons name={'icon-xiangyou'} />
                    </div>
                    <div styleName="card_tit_cen" onClick={jumpOrderList}>
                        <div>
                            <Icons name={'icon-wodedingdan'} />
                            <span styleName="webk">
                                我的订单
                            </span>
                        </div>
                        <Icons name={'icon-xiangyou'} />
                    </div>
                    <div styleName="card_tit" onClick={jumpServicess}>
                        <div>
                            <Icons name={'icon-kefu'} />
                            <span styleName="webk">
                                客服中心
                            </span>
                        </div>
                        <Icons name={'icon-xiangyou'} />
                    </div>

                </div>
            </div>
            <div styleName="user_sec"></div>
        </div>
    )
}