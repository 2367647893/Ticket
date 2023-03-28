import React, { useEffect, useState } from "react";
import { connect } from 'dva';
import ImageSwiper from "./components/ImageSwiper";
import { Image, Button, Switch, Popup, Calendar } from 'antd-mobile'
import './styles.less'
export default connect((state) => {
    return {
        homeList: state.home.travelList
    }
})(home)
function home(props) {
    const { dispatch, homeList } = props
    const [visible1, setVisible1] = useState(false)
    //获取当前年月日星期几几点几分几秒并打印
    function getTimer() {
        var date = new Date()
        var week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var datee = date.getDate()
        var day = date.getDay()
        var time = year + '-' + month + '-' + datee 
        return time 
    }
    const defaultSingle = new Date(new Date())
    // 默认获取出行快讯数据
    useEffect(() => {
        console.log(defaultSingle);
        console.log(getTimer(defaultSingle));
        dispatch({
            type: "home/feactList",
        })
    }, [])
    // 切换日期弹出层
    const click_Time = (() => {
        setVisible1((v) => {
            setVisible1(!v)
        })
    })
    return (
        <div styleName="HomeBox">
            <div styleName="HeadBox">
                {/* 头部布局 */}
                <div styleName="head_title">
                    <h1>火车票预订</h1>
                    <span>便捷购票，服务您的每一次出行</span>
                </div>
            </div>
            <div styleName="SectionBox">
                {/* 城市选择  时间选择 */}
                <div styleName="sec_box">
                    <div styleName="city_box">
                        <div styleName="lef_city"></div>
                        <div styleName="icon_city">icon</div>
                        <div styleName="rig_city">1</div>
                    </div>
                    <div styleName="time_box" onClick={click_Time}>

                    </div>
                    <div styleName="switch_box">
                        <span>只看高铁/动车</span>
                        <Switch />
                    </div>
                    <div styleName="button_box"><Button styleName="btn_sea">搜索</Button></div>
                </div>
            </div>
            {/* 轮播图 */}
            <div styleName="img_swiper">
                <ImageSwiper />
            </div>
            {/* 出行快讯 */}
            <div styleName="dummy_box">
                <div styleName="dummy_head">
                    <span>出行快讯</span>
                    <span>更多》</span>
                </div>
                <div styleName="dummy_section">
                    {
                        homeList.slice(0, 3).map((item, index) => {
                            return (
                                <div key={item.index} styleName="dl_box">
                                    <div styleName="dl_lef">
                                        {item.index}
                                    </div>
                                    <div styleName="dl_cen">
                                        <div styleName="dl_tit">
                                            {item.title}
                                        </div>
                                        <div styleName="dl_span">
                                            <span>{item.from}</span>
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                    <div styleName="dl_rig">
                                        <Image
                                            src={item.imgSrc}
                                            style={{ width: 100, height: 75 }}
                                        />
                                        <Popup
                                            mask={false}
                                            visible={visible1}
                                            bodyStyle={{ height: '53vh' }}
                                        >
                                            <Calendar
                                                prevMonthButton={<span>上一月</span>}
                                                nextMonthButton={<span>下一月</span>}
                                                selectionMode='single'
                                                defaultValue={defaultSingle}
                                                onChange={val => {
                                                    console.log(val)
                                                }}
                                            />
                                        </Popup>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}