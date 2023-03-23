import React from "react";
import { Form, Input, Button } from 'antd-mobile'
import { connect } from 'dva';
import {history} from 'umi'
import './styles.less'
export default connect((state) => {
    return {
        
    }
})(login)

function login(props) {
    const JumpRes = () =>{
        history.push('/my/register')
    }
    return (
        <div styleName="LoginBox">
            <div styleName="HeadBox">
                <span styleName="headLeft">
                    {"<"}
                </span>
                <span styleName="headSection">登录</span>
                <span styleName="headRight"></span>
            </div>
            <div styleName="SectionBox">
                <div styleName="FormBox">
                    <Form requiredMarkStyle='asterisk'>
                        <Form.Item name='name' label='用户名' rules={[{ required: true }]}>
                            <Input placeholder='请输入用户名' />
                        </Form.Item>
                        <Form.Item name='name' label='密码' rules={[{ required: true }]}>
                            <Input placeholder='请输入密码' />
                        </Form.Item>
                    </Form>
                </div>
                <div styleName="BtnBox">
                    <Button color='success' style={{borderRadius:'20px'}}>登录</Button>
                    <Button color='success' style={{borderRadius:'20px'}} onClick={JumpRes}>注册</Button>
                </div>
            </div>

        </div>
    )
}
//http://10.161.54.76:3000/api/rest/travelList
//http://10.161.54.76:3000/api/rest/order
//http://10.161.54.76:3000/api/rest/ticket
//http://10.161.54.76:3000/api/rest/query
