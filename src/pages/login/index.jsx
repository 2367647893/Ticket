import React from "react";
import { Form, Input, Button } from 'antd-mobile'
import { connect } from 'dva';
import './styles.less'
export default connect((state) => {
    return {

    }
})(login)

function login(props) {
    return (
        <div styleName="LoginBox">
            <div styleName="HeadBox">
                <span>ss</span><span>登录</span><span></span>
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
                    <Button>登录</Button>
                    <Button>注册</Button>
                </div>
            </div>

        </div>
    )
}
//http://10.161.54.76:3000/api/rest/travelList
//http://10.161.54.76:3000/api/rest/order
//http://10.161.54.76:3000/api/rest/ticket
//http://10.161.54.76:3000/api/rest/query