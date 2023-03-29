import React, { useState, useEffect } from "react";
import { connect } from 'dva';
import './styles.less'
export default connect((state) => {
    // console.log(state);
    return {
        trainsList: state.query.trains //车票数据
    }
})(query)
function query(props) {

    const { dispatch, trainsList } = props
    const [form,setForm] = useState()
    const [to,setTo] = useState()
    // console.log(trainsList);
    // 默认获取车票
    useEffect(() => {
        let tick = JSON.parse(localStorage.getItem('ticket_tit'))
        // console.log(tick);
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
                <div styleName="head_top"><div></div><span>{form}-{to}</span></div>
                <div styleName="head_bom">
                    <div>前一天</div>
                    <div>11</div>
                    <div>后一天</div>
                </div>
            </div>
            <div styleName="query_section">
                {
                    trainsList.map((item, index) => {
                        // console.log(item);
                        return (
                            <div key={index} styleName="tran_list">
                                <div styleName="time_list">
                                    <span>{item.dTime}</span>
                                    <span>{item.aTime}</span>
                                </div>
                                <div styleName="city_list">
                                    <span>{item.dStation}</span>
                                    <span>{item.aStation}</span>
                                </div>
                                <div styleName="trips_list">
                                    <span>{item.trainNumber}</span>
                                    <span>{item.time}</span>
                                </div>
                                <div styleName="price_list">
                                    <span>{item.priceMsg}</span>
                                    <span>{item.trainShowDesc}</span>
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
                    <dt>1</dt>
                    <dd>只看高铁动车</dd>
                </dl>
                <dl>
                    <dt>1</dt>
                    <dd>只看有票</dd>
                </dl>
            </div>
        </div>
    )
}