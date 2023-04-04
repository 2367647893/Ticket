import React, { useState } from "react";
import { connect } from 'dva';
import Icons from '@/components/Icons';
import UserName from '@/components/UserName';
import PassengersButton from '@/components/PassengersButton';

import './styles.less'
export default connect((state) => {
    return {

    }
})(passengerDetail)
function passengerDetail(props) {
    console.log(props);
    return (
        <div styleName="passengers_box">
        <div styleName="passengers_head">
            <div styleName="head_lef">
                {/* icon图标 */}
                <Icons name={'icon-xiangzuo_o'}  style={{fontSize:'20px',fontWeight:'bold'}}/>
            </div>
            <div styleName="head_rig">
                新增乘客
            </div>
        </div>
        <div styleName="passengers_sec">
            <UserName/>
            <div styleName="sec_tit">
                <PassengersButton icon={'icon-xiangji'} name={'扫描证件添加'} icon_style={{fontSize:'20px'}} />
            </div>
        </div>
    </div>
    )
}