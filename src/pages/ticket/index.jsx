import React, { useEffect, useState } from "react";
import { connect } from 'dva';
import { history } from 'umi';
import { Button, Collapse } from 'antd-mobile'
import Nav from '@/components/Nav'
import Icons from '@/components/Icons'
import './styles.less'
export default connect((state) => {
    return {
        ticket: state.ticket.ticketListDetail,
        jump: state.ticket.jumpTicketDetail,
    }
})(ticket)
function ticket(props) {
    const { dispatch, ticket, jump } = props
    const [time, setTime] = useState()
    useEffect(() => {
        dispatch({
            type: 'ticket/feactTicketDetail',
            payload: '',
        })
        setTime(localStorage.getItem('time'))
    }, [])
    // 跳转到订单填写
    const jumpOrder = () => {
        history.push('/order')
    }
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
                    <Collapse
                        // 切换
                        arrow={active => (active ?

                            <Button
                                color='warning'
                                size='mini'
                                fill='outline'
                            >
                                预订
                            </Button> : <Button
                                color='warning'
                                size='mini'
                                fill='outline'
                            >
                                收起
                            </Button>)}
                    >
                        {/* 折叠面板渲染 */}
                        {
                            ticket.map((item, index) => {
                                return (
                                    <Collapse.Panel
                                        key={index}
                                        title=
                                        <div styleName="li">
                                            <div styleName="li_lef">
                                                <span>
                                                    {item.type}
                                                </span>
                                                <span styleName="lef_pic">
                                                    ¥{item.priceMsg}
                                                </span>
                                            </div>
                                            <div styleName="li_rig">
                                                {item.ticketsLeft}
                                            </div>
                                        </div>
                                    >
                                        <div>
                                            {
                                                item.channels.map((v, i) => {
                                                    return (
                                                        <div
                                                            key={i}
                                                            styleName="tick_swic"
                                                        >
                                                            <div>
                                                                <h5>{v.name}</h5>
                                                                <span>{v.desc}</span>
                                                            </div>
                                                            <Button
                                                                color='warning'
                                                                size='mini'
                                                                fill='outline'
                                                                onClick={jumpOrder}
                                                            >
                                                                买票
                                                            </Button>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Collapse.Panel>

                                )
                            })
                        }
                    </Collapse>
                </div>
            </div>
        </div>
    )
}