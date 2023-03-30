import React, { useState, useEffect } from "react";
import { connect } from 'dva';
import Icons from '@/components/Icons'
import './styles.less'
export default connect((state) => {
    return {
        trainsList: state.query.trains //车票数据
    }
})(query)
function query(props) {

    const { dispatch, trainsList } = props
    const [form, setForm] = useState()
    const [to, setTo] = useState()
    // 默认获取车票
    useEffect(() => {
        let tick = JSON.parse(localStorage.getItem('ticket_tit'))
        setForm(tick.form)
        setTo(tick.to)
        dispatch({
            type: "query/feactTicket",
            payload: tick
        })
    }, [])

    return (
        <div styleName="query_box">
            <div styleName="query_head">
                <div styleName="head_top">
                    <div styleName="back_icon">
                        {/* icon图标 */}
                        <Icons name={'icon-xiangzuo'} />
                    </div>
                    <span>{form}-{to}</span>
                </div>
                <div styleName="head_bom">
                    <div>前一天</div>
                    <div>12</div>
                    <div>后一天</div>
                </div>
            </div>
            <div styleName="query_section">
                {
                    trainsList.map((item, index) => {
                        return (
                            <div key={index} styleName="tran_list">
                                <div styleName="time_list">
                                    <span>{item.dTime}</span>
                                    <span styleName="end_time">{item.aTime}</span>
                                </div>
                                <div styleName="city_list">
                                    <span styleName="city_icon">
                                        {/* icon图标 */}
                                        <span styleName="start_icon">始</span>
                                        <span>{item.dStation}</span>
                                    </span>
                                    <span styleName="city_icon">
                                        {/* icon图标 */}
                                        <span styleName="end_icon">终</span>
                                        <span styleName="end_city">{item.aStation}</span>
                                    </span>
                                </div>
                                <div styleName="trips_list">
                                    <span>{item.trainNumber}</span>
                                    <span styleName="end_trips">{item.time}</span>
                                </div>
                                <div styleName="price_list">
                                    <span>{item.priceMsg}</span>
                                    <span styleName="end_price">{item.trainShowDesc}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div styleName="query_footer">
                <dl>
                    <dt>1</dt>
                    <dd>出发</dd>
                </dl>
                <dl>
                    <dt>2</dt>
                    <dd>只看高铁动车</dd>
                </dl>
                <dl>
                    <dt>3</dt>
                    <dd>只看有票</dd>
                </dl>
            </div>
        </div>
    )
}