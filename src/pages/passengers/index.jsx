import React, { useState } from "react";
import { connect } from 'dva';
import Icons from '@/components/Icons';
import UserName from '@/components/UserName';
import PassengersButton from '@/components/PassengersButton';

import './styles.less'
export default connect((state) => {
    return {

    }
})(passengers)
function passengers(props) {

    return (
        <div styleName="passengers_box">
            <div styleName="passengers_head">
                <div styleName="head_lef">
                    {/* icon图标 */}
                    <Icons name={'icon-xiangzuo_o'}  style={{fontSize:'20px',fontWeight:'bold'}}/>
                </div>
                <div styleName="head_rig">
                    乘客列表
                </div>
            </div>
            <div styleName="passengers_sec">
                <UserName/>
                <div styleName="sec_tit">
                    <PassengersButton icon={'icon-jiahao'} name={'新增乘客'} icon_style={{fontSize:'20px'}} />
                </div>
            </div>
        </div>
    )
}