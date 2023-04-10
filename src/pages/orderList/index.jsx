import React, { useEffect, useState } from "react";
import { connect } from 'dva';
import { JumboTabs,NavBar,Card,Button} from 'antd-mobile'
import './styles.less'
export default connect((state) => {
    // console.log(state);
    return {
        orderList:state.orderList.orderList
    }
})(orderList)
function orderList(props) {
    const {dispatch,orderList} = props
    console.log(orderList);
    useEffect(()=>{
        dispatch({
            type:'orderList/fetchOrderList',
            payload:{
                count:0,
                status:0,
            }
        })
    },[])
    const back = (e) =>{
        dispatch({
            type:'orderList/fetchOrderList',
            payload:{
                count:0,
                status:Number(e),
            }
        })
    }
    const onClick = () =>{
        console.log(1);
    }
    return (
        <div styleName="order_box">
            <div styleName="order_head">
            <NavBar>标题</NavBar>
            <JumboTabs onChange={back}>
                    <JumboTabs.Tab title='全部'  key={0}>
                        {/* <div>
                        {
                            orderList.map((v,i)=>{
                                // console.log(v);
                                return(
                                    <Card  onClick={onClick} key={i}>
                                        <div>
                                            1
                                        </div>
                                    </Card>
                                )
                                })
                        }
                        </div> */}
                    </JumboTabs.Tab>
                    <JumboTabs.Tab title='待出行'  key={1}>
                        
                    </JumboTabs.Tab>
                    <JumboTabs.Tab title='待支付'  key={2}>
                       
                    </JumboTabs.Tab>
                    <JumboTabs.Tab title='退款/已取消'  key={3}>
                       
                    </JumboTabs.Tab>
                </JumboTabs>
                </div>
            <div styleName="order_sec">
            <div>
                        {
                            orderList.map((v,i)=>{
                                console.log(v);
                                return(
                                    <Card  onClick={onClick} key={i}>
                                        <div styleName="card_box">
                                            <div styleName="card_one">
                                                <span styleName="one_lef">{v.trainName}</span>
                                                <span styleName="one_rig">¥{v.priceMsg}</span>
                                            </div>
                                            <div styleName="card_two">
                                                <span>{v.carriag}车{v.seatNumber}号</span>
                                                <span></span>
                                            </div>
                                            <div styleName="card_three">{v.ticketDate}</div>
                                            <div styleName="card_four">
                                                <span></span>
                                                <span>
                                                    <Button fill='outline'>删除订单</Button>
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                )
                                })
                        }
                        </div>
            </div>
        </div>
    )
}