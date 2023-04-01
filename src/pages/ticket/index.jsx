import React, { useEffect, useState } from "react";
import { connect } from 'dva';
import Nav from '@/components/Nav'
import Icons from '@/components/Icons'
import './styles.less'
export default connect((state) => {
    // console.log(state);
    return {
        ticket: state.ticket.ticketListDetail,
        jump: state.ticket.jumpTicketDetail,
    }
})(ticket)
function ticket(props) {
    const { dispatch, ticket, jump } = props
    // console.log(jump);
    console.log(ticket);
    const [time, setTime] = useState()
    useEffect(() => {
        dispatch({
            type: 'ticket/feactTicketDetail',
            payload: '',
        })
        setTime(localStorage.getItem('time'))
    }, [])
    return (
        <div styleName="ticket_box">
            <div styleName="tic_head">
                <div styleName="tic_head_top">

                    <span styleName="head_icon">
                        {/* icon图标 */}
                        <Icons name={'icon-xiangzuo_o'} />
                    </span>
                    <span styleName="head_tit">
                        {jump.trainNumber}
                    </span>

                </div>
                <div styleName="tic_head_bot">
                    <Nav />
                </div>
            </div>
            <div styleName="tic_sec">
                {/* 票价详情 */}
                <div styleName="tic_sec_one">
                    {/* 票价左 */}
                    <div styleName="one_lef">
                        <div>{jump.dStation}</div>
                        <h2>{jump.dTime}</h2>
                        <span>{time}</span>
                    </div>
                    {/* 票价中 */}
                    <div styleName="one_sec">
                        <div>{jump.trainNumber}</div>
                        <span>
                            <div>——</div>
                            <span>时刻表</span>
                            <div>——</div>
                        </span>
                        <div>耗时{jump.time}</div>
                    </div>
                    {/* 票价右 */}
                    <div styleName="one_rig">
                        <div>{jump.aStation}</div>
                        <h2>{jump.aTime}</h2>
                        <span>{time}</span>
                    </div>
                </div>
                <div styleName="seat">

                </div>
            </div>
        </div>
    )
}