import React, { useEffect, useState } from "react";
import { connect } from 'dva';
import { PullToRefresh, Checkbox, Button } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import Icons from '@/components/Icons';
import UserName from '@/components/UserName';
import PassengersButton from '@/components/PassengersButton';

import './styles.less'
export default connect((state) => {
    return {
        passengersList: state.passengers.PassengersList
    }
})(passengers)
function passengers(props) {
    const { dispatch, passengersList } = props
    const [explicit, setExplicit] = useState(false)
    useEffect(() => {
        dispatch({
            type: 'passengers/feactPassengersList',
            payload: '',
        })
    }, [])
    useEffect(() => {
        console.log(localStorage.getItem('choose'));
        if (localStorage.getItem('choose') === "1") {
            setExplicit(v => {
                return true
            })
        }
    }, [])
    const statusRecord = {
        pulling: '下拉刷新',
        canRelease: '释放立即刷新',
        refreshing: '加载中...',
        complete: '刷新成功',
    }
    return (
        <div styleName="passengers_box">
            <div styleName="passengers_head">
                <div styleName="head_lef">
                    {/* icon图标 */}
                    <Icons name={'icon-xiangzuo_o'} style={{ fontSize: '20px', fontWeight: 'bold' }} />
                </div>
                <div styleName="head_rig">
                    乘客列表
                </div>
            </div>
            <div styleName="passengers_sec">
                <UserName />
                <div styleName="sec_tit">
                    <PassengersButton icon={'icon-jiahao'} name={'新增乘客'} icon_style={{ fontSize: '20px' }} pushRouter={'/passengerDetail'} />
                </div>
                <div styleName="sec_list">
                    <div styleName="list_box">
                        <PullToRefresh
                            onRefresh={async () => {
                                await sleep(1000)
                            }}
                            renderText={status => {
                                return <div>{statusRecord[status]}</div>
                            }}
                        >
                            <div styleName="list_tit">
                                下拉可刷新乘客列表
                            </div>
                            <div styleName="list_data">
                                {
                                    passengersList.map((item, index) => {
                                        return (
                                            <div styleName="list" key={index}>
                                                <div styleName="list_one">
                                                    {/* icon图标 */}
                                                    <Icons name={'icon-xie'} style={{ fontSize: '20px' }} />
                                                </div>
                                                <dl styleName="list_two">
                                                    <dt>
                                                        <span styleName="tit">{item.booker}</span>
                                                        <span styleName="tic">{item.ticketType}</span>
                                                    </dt>
                                                    <dd><span>身份证{item.idCard}</span></dd>
                                                </dl>
                                                <div styleName="list_three">
                                                    {
                                                        explicit ?
                                                            <Checkbox block></Checkbox>
                                                            : null
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </PullToRefresh>
                    </div>
                </div>
                <div styleName="sec_foo">
                    本次购票服务由八维票务提供
                </div>
                {
                    explicit ?
                        <div styleName="bom_btn">
                            <Button>提交</Button>
                        </div>
                        : null
                }

            </div>
        </div>
    )
}