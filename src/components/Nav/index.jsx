import React, { useState } from "react";
import './styles.less'

export default function Nav() {
    //获取当前年月日星期几几点几分几秒并打印
    const [times] = useState(getTimer(new Date()))
    function getTimer() {
        var date = new Date()
        var week = ['周日', '周一', '周二', '周三', '周四', ' 周五', '周六']
        var month = date.getMonth() + 1
        var datee = date.getDate()
        var day = date.getDay()
        var time = month + '月' + datee + '日 	' + ' ' + week[day]
        return time
    }

    return (
        <div className="nav">
            <span
                className='nav-prev'
            >
                前一天
            </span>
            <span>{times}</span>
            <span
                className='nav-next'
            >
                后一天
            </span>
        </div>
    )
}