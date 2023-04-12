import React, { useEffect, useState } from "react";
import { connect } from 'dva';
import { history } from 'umi';
import { JumboTabs, NavBar, Card, Button, Empty,Image } from 'antd-mobile'
import Routing from '@/components/Routing'
import './styles.less'
export default connect((state) => {
    return {
        orderList: state.orderList.orderList
    }
})(orderList)
function orderList(props) {
    const { dispatch, orderList } = props
    const [token, setToken] = useState(localStorage.getItem('ticketToken'))
    // console.log(orderList);
    useEffect(() => {
        dispatch({
            type: 'orderList/fetchOrderList',
            payload: {
                count: 0,
                status: 0,
            }
        })
    }, [])
    const back = (e) => {
        dispatch({
            type: 'orderList/fetchOrderList',
            payload: {
                count: 0,
                status: Number(e),
            }
        })
    }
    const onClick = () => {
        console.log(1);
    }
    const JumpLogin = () =>{
        history.push('/login')
    }
    return (
        <div styleName="order_box">
            {
                token === null ?
                    <Routing title={'全部订单'} />
                    :
                    <>
                        <div styleName="order_head">
                            <NavBar>全部订单</NavBar>
                            <JumboTabs onChange={back}>
                                <JumboTabs.Tab title='全部' key={0}></JumboTabs.Tab>
                                <JumboTabs.Tab title='待出行' key={1}></JumboTabs.Tab>
                                <JumboTabs.Tab title='待支付' key={2}></JumboTabs.Tab>
                                <JumboTabs.Tab title='退款/已取消' key={3}></JumboTabs.Tab>
                            </JumboTabs>
                        </div>
                        <div styleName="order_sec">

                            <div>
                                {
                                    orderList.length === 0 ?
                                        <Empty
                                            style={{ padding: '64px 0' }}
                                            imageStyle={{ width: 128 }}
                                            description='暂无数据'
                                        />
                                        :
                                        <div>
                                            {
                                                orderList.map((v, i) => {
                                                    return (
                                                        <Card onClick={onClick} key={i}>
                                                            <div styleName="card_box">
                                                                <div styleName="card_one">
                                                                    <span styleName="one_lef">
                                                                        {v.trainName}
                                                                    </span>
                                                                    <span styleName="one_rig">
                                                                        ¥{v.priceMsg}
                                                                    </span>
                                                                </div>
                                                                <div styleName="card_two">
                                                                    <span>
                                                                        {v.carriag}车{v.seatNumber}号
                                                                    </span>
                                                                    <span></span>
                                                                </div>
                                                                <div styleName="card_three">
                                                                    {v.ticketDate}
                                                                    </div>
                                                                <div styleName="card_four">
                                                                    <span></span>
                                                                    <span>
                                                                        <Button fill='outline'>
                                                                            删除订单
                                                                            </Button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    )
                                                })
                                            }
                                        </div>
                                }
                            </div>
                        </div>

                    </>

            }

        </div>
    )
}