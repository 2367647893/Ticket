import React, { useState } from "react";
import { connect } from 'dva';
import { Button } from 'antd-mobile'
import Icons from "../Icons";
import './styles.less'
export default connect((state) => {
    return {

    }
})(PassengersButton)
function PassengersButton(props) {
    console.log(props);
    return (
        <Button >
            <div className="button_box">
                <Icons name={props.icon} style={props.icon_style} />
                <span>{props.name}</span>
            </div>
        </Button>

    )
}