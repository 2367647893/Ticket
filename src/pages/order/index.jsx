import React, { useEffect, useState } from "react";
import { connect } from 'dva';
import { history } from 'umi';
import { Popup, Button,Input} from 'antd-mobile'
import Icons from '@/components/Icons'
import CheckList from "./components/CheckList";
import './styles.less'
export default connect((state) => {
    return {
        jump: state.ticket.jumpTicketDetail,
        checklist: state.passengers.checkList,
    }
})(order)
function order(props) {
    const { dispatch, jump,checklist } = props
    const [time, setTime] = useState()
    const [visible1, setVisible1] = useState(false)
    const [yin, setYin] = useState(false)
    // checklist.push({
    //     booker: "",
    //     bookerId: "",
    //     cardType: "",
    //     checked: false,
    //     idCard: "",
    //     phoneNumber: "",
    //     ticketType: ""
    // })
    // console.log(checklist);
    const addTic =  async () => {
        console.log(checklist);
        console.log(123);
        await dispatch({
            type:'passengers/feactCheck',
            payload:checklist
        })
        console.log(321);
        console.log(checklist);
    }

    useEffect(() => {
        setTime(localStorage.getItem('time'))
    }, [])
    const yinBtn = () => {
        setYin(v => {
            return !v
        })
        setVisible1(v => {
            return !v
        })
    }
    const maskSwitch = () => {
        setYin(v => {
            return !v
        })
        setVisible1(v => {
            return !v
        })
    }
    const choose = () => {
        localStorage.setItem('choose', 1)
        history.push('/passengers')
    }
    const submitBtn = () => {
        console.log(1);
    }
    // 返回上一页
    const back = () => {
        history.go(-1)
    }
    return (
        <div styleName="order_box">
            <div styleName="order_head">
                <div styleName="order_head_top">

                    <span styleName="head_icon" onClick={back}>
                        {/* icon图标 */}
                        <Icons name={'icon-xiangzuo_o'} />
                    </span>
                    <span styleName="head_tit">
                        订单填写
                    </span>
                </div>
            </div>
            <div styleName="order_sec">
                {/* 票价详情 */}
                <div styleName="order_sec_one">
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
                            {/* icon图标 */}
                            <Icons name={'icon-gaotie1'} />
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
                <div styleName="order_sec_two">
                    <div styleName="two_lef">
                        坐席
                    </div>
                    <div styleName="two_rig">
                        二等座
                        <div>¥</div>
                        <h4>$100</h4>
                    </div>
                </div>
                <CheckList add={addTic()} />
                <div styleName="order_sec_three">
                    <span onClick={addTic}>添加成人</span>
                    <span onClick={choose}>选择乘客</span>
                </div>
            </div>
            {
                visible1 ?
                    <div styleName="mask_order">
                        <div styleName="mask_box" onClick={maskSwitch}></div>
                        <div styleName="mask_div">1</div>
                    </div>
                    :
                    null
            }
            <div styleName="order_foot">
                <div styleName="order_lef">
                    <div styleName="lef_top">
                        <div styleName="top_lef">
                            <div>¥</div>
                            <h2>200</h2>
                        </div>
                        <span onClick={yinBtn} styleName="top_rig">
                            {
                                yin ?
                                    <Icons name={'icon-xiangshang'} />
                                    :
                                    <Icons name={'icon-xiangxia'} />
                            }
                        </span>
                    </div>
                    <span styleName="lef_bom">支付金额</span>
                </div>
                <div>
                    <Button
                        style={{ background: '#1ba9ba', color: '#fff' }}
                        onClick={submitBtn}
                    >
                        提交订单
                    </Button>
                </div>
            </div>
        </div>
    )
}