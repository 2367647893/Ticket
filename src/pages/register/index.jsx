import React, { useEffect, useForm } from "react";
import { Form, Input, Button } from 'antd-mobile'
import { connect } from 'dva';
import { history } from 'umi'
import './styles.less'
export default connect((state) => {
    return {

    }
})(register)
function register(props) {
    const { dispatch } = props
    const [form] = Form.useForm()
    // 确认注册
    const YesRes = async () => {
        const val = form.getFieldsValue()
        // 注册
        await dispatch({
            type: 'reg/fetchReg',
            payload: val,
        })
        // 登录
        dispatch({
            type: 'reg/fetchLogin',
            payload: val,
        })
    }
    return (
        <div styleName="RegBox">
            {/* 注册头部 */}
            <div styleName="HeadBox">
                <span styleName="headLeft">
                    {"<"}
                </span>
                <span styleName="headSection">注册账号</span>
                <span styleName="headRight"></span>
            </div>
            {/* 注册表单 */}
            <div styleName="SectionBox">
                <div styleName="FormBox">
                    <Form layout='horizontal' form={form}>
                        <Form.Item name='username' label='用户名' rules={[{ required: true }]}>
                            <Input placeholder='请输入用户名' />
                        </Form.Item>
                        <Form.Item name='password' label='密码' rules={[{ required: true }]}>
                            <Input placeholder='请输入8-30为字符作为新密码' />
                        </Form.Item>
                        <Form.Item name='againpwd' label='确认密码' rules={[{ required: true }]}>
                            <Input placeholder='请再次输入密码' />
                        </Form.Item>
                    </Form>
                </div>
                {/* 注册按钮 */}
                <div styleName="BtnBox">
                    <Button styleName="button_btn" onClick={YesRes}>注册</Button>
                </div>
            </div>

        </div>
    )
}