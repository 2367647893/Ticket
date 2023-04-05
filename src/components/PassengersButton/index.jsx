import React, { useState } from "react";
import { connect } from 'dva';
import { history } from 'umi';
import { Button } from 'antd-mobile'
import Icons from "../Icons";
import './styles.less'
export default connect((state) => {
    return {

    }
})(PassengersButton)
function PassengersButton(props) {
    const JumpHistory = () => {
        history.push(props.pushRouter)
    }
    return (
        <Button onClick={JumpHistory}>
            <div className="button_box">
                <Icons name={props.icon} style={props.icon_style} />
                <span>{props.name}</span>
            </div>
        </Button>

    )
}