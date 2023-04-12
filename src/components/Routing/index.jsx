import React, { useState } from "react";
import { connect } from 'dva';
import { history } from 'umi';
import { Image, NavBar } from 'antd-mobile'
import Icons from "../Icons";
import './styles.less'
export default connect((state) => {
    return {

    }
})(Routing)
function Routing(props) {   
    // 点击登录跳转回登录页
    const JumpLogin = () => {
        history.push('/login')
    }
    // 返回上一页
    const back = ( ) => {
        history.go(-1)
    }
    return (
        <div className="rou_box">
            <div className="rou_head" >
                {props.title}
            </div>
            <div className="rou_icon" onClick={back}>
                <Icons name={'icon-xiangzuo'} />
            </div>
            <Image src="http://10.161.54.42:3000/src/imgs/not_login.png" />
            <div className="login_text" onClick={JumpLogin}>登录</div>
        </div>

    )
}