import React, { useState } from "react";
import Icons from '@/components/Icons'
import './styles.less'

export default function Footer(props) {
    const [trains, setTrains] = useState(false)
    const [ticketx, setTicketx] = useState(false)
    const [text, setText] = useState(true)
    const embark = () => {
        setText((v) => {
            return !v
        })
    }
    // 
    const train = () => {
        setTrains((v) => {
            return !v
        })
    }
    const tickets = () => {
        setTicketx((v) => {
            return !v
        })
    }
    return (
        <div styleName="foot_bom">
            <dl onClick={embark} styleName="text_class">
                <dt><Icons name={'icon-shijian'} /></dt>
                <dd>{text?'出发 早→晚':'耗时 短→长'}</dd>
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