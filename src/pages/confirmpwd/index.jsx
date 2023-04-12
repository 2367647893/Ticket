import React, { useEffect, useState } from "react";
import { connect } from 'dva';
import { history } from 'umi';
import { Button, Form, Input } from 'antd-mobile'
import Icons from '@/components/Icons'
import './styles.less'
export default connect((state) => {
    console.log(state);
    return {

    }
})(confirmpwd)
function confirmpwd(props) {

    const back = () => {
        history.go(-1)
    }
    return (
        <div styleName="con_box">

            <div styleName="con_head">

                <div styleName="con_icon" onClick={back}>
                    <Icons name={'icon-xiangzuo'} />
                </div>
            </div>
            {/* websockt客服聊天 */}
            <div styleName="con_sec">
                <div styleName="sec_dls">
                    <span styleName="sec_pwd">请输入当前密码</span>
                    <span styleName="set_pwd">需要输入您账号当前设置的密码</span>
                </div>
                <div styleName="sec_inp">
                    <Form layout='horizontal'>
                        <Form.Item
                            name='name'
                            label='当前密码'
                            rules={[{ required: true, message: '请输入当前账户密码!' }]}
                        >
                            <Input  placeholder='请输入当前账户密码' />
                        </Form.Item>
                    </Form>

                </div>
                <Button>下一步</Button>
            </div>

        </div>
    )
}