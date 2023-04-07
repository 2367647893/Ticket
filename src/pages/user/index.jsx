import React, { useState } from "react";
import { connect } from 'dva';
import { history } from 'umi';
import UserName from "@/components/UserName";
import Icons from "@/components/Icons";
import './styles.less'
export default connect((state) => {
    return {

    }
})(user)
function user(props) {
    const jump_setting = () => {
        history.push('/setting')
    }
    return (
        <div styleName="user_box">
            <div styleName="user_head">

            </div>
            <div styleName="user_sec">
                <div styleName="head">
                    <div styleName="head_lef">
                        <UserName />
                    </div>
                    <div styleName="head_rig" onClick={jump_setting}>
                        {/* icon图标 */}
                        <Icons name={'icon-xiangyou'} />
                    </div>

                </div>

            </div>
        </div>
    )
}