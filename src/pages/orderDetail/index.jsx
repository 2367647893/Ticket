import React, { useEffect, useState } from "react";
import { connect } from 'dva';
import { history } from 'umi';
// import { Popup, Button } from 'antd-mobile'
// import Icons from '@/components/Icons'
import './styles.less'
export default connect((state) => {
    console.log(state);
    return {
        
    }
})(orderDetail)
function orderDetail(props) {
    const { dispatch } = props
   
    return (
        <div>
            订单详情
        </div>
    )
}