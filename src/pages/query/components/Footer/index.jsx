import React, { useState } from "react";
import Icons from '@/components/Icons'
import { connect } from 'dva'
import './styles.less'

export default connect(state => {
    return {

    }
})(Footer)

function Footer(props) {
    const { dispatch } = props
    const [trains, setTrains] = useState(false)
    const [ticketx, setTicketx] = useState(false)
    const [text, setText] = useState(false)
    const [highSpeed, setHighSpeed] = useState(false)
    const [haveTicket, setHaveTicket] = useState(false)
    const [timeSort, setTimeSort] = useState(0)
    const [textTit, setTextTit] = useState('出发 早→晚')
    const [tick, setTick] = useState(JSON.parse(localStorage.getItem('ticket_tit')))

    // 点击切换时间
    const embark = () => {

        // 切换内容
        setText((v) => {
            return !v
        })
        setTextTit((v) => {
            // console.log(v);
            return v === '出发 早→晚' ? '耗时 长→短' : '出发 早→晚'
        })
        // 筛选时间
        setTimeSort((v) => {

            // 判断切换状态
            if (v === 0) {
                v = 1
            } else {
                v = 0
            }
            dispatch({
                type: "query/feactTicket",
                // 解构tick赋值时间
                payload: {
                    ...tick,
                    timeSort: v,
                    highSpeed,
                    haveTicket,
                },
            })
            return v

        })
    }
    // 点击高铁动车
    const train = () => {

        // 切换class
        setTrains((v) => {
            return !v
        })

        // 筛选数据(高铁)
        setHighSpeed((v) => {
            v = !v
            dispatch({
                type: "query/feactTicket",
                // 解构tick赋值时间
                payload: {
                    ...tick,
                    highSpeed: v,
                    timeSort,
                    haveTicket
                },
            })
            return v
        })
        console.log(tick);
    }
    // 点击是否有票
    const tickets = () => {

        // 切换class
        setTicketx((v) => {
            return !v
        })

        // 筛选数据(有票)
        setHaveTicket((v) => {
            v = !v
            dispatch({
                type: "query/feactTicket",
                // 解构tick赋值时间
                payload: {
                    ...tick,
                    highSpeed,
                    timeSort,
                    haveTicket: v,
                },
            })
            return v

        })
    }
    return (
        <div styleName="foot_bom">
            <dl onClick={embark} styleName="text_class">
                <dt><Icons name={'icon-shijian'} /></dt>
                <dd>{textTit}</dd>
            </dl>
            <dl onClick={train} styleName={trains ? 'trains_class' : 'trains_classx'}>
                <dt><Icons name={'icon-ziyuan1'} /></dt>
                <dd>只看高铁动车</dd>
            </dl>
            <dl onClick={tickets} styleName={ticketx ? 'trains_class' : 'trains_classx'}>
                <dt><Icons name={'icon-zhikanyoupiao'} /></dt>
                <dd>只看有票</dd>
            </dl>
        </div>
    )
}