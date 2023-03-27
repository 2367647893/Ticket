import React, { useEffect } from "react";
import { connect } from 'dva';
import ImageSwiper from "./components/ImageSwiper";
import { Image,Button} from 'antd'
import './styles.less'
export default connect((state) => {
    return {
        homeList: state.home.travelList
    }
})(home)
function home(props) {
    const { dispatch, homeList } = props
    console.log(homeList);
    useEffect(() => {
        dispatch({
            type: "home/feactList",
        })
    }, [])
    return (
        <div styleName="HomeBox">
            <div styleName="HeadBox">
                <div styleName="head_title">
                    <h1>火车票预订</h1>
                    <span>便捷购票，服务您的每一次出行</span>
                </div>
            </div>
            <div styleName="SectionBox">
                <div styleName="sec_box">
                    <div styleName="city_box">
                        <div styleName="lef_city">1</div>
                        <div styleName="icon_city">icon</div>
                        <div styleName="rig_city">1</div>
                    </div>
                    <div styleName="time_box">时间</div>
                    <div styleName="switch_box">只看高铁动车</div>
                    <div styleName="button_box"><Button>搜索</Button></div>
                </div>
            </div>
            <div styleName="img_swiper">
                <ImageSwiper />
            </div>
            <div styleName="dummy_box">
                <div styleName="dummy_head">
                    <span>出行快讯</span>
                    <span>更多》</span>
                </div>
                <div styleName="dummy_section">
                    {
                        homeList.slice(0, 3).map((item, index) => {
                            console.log(item);
                            return (
                                <div key={item.index} styleName="dl_box">
                                    <div styleName="dl_lef">{item.index}</div>
                                    <div styleName="dl_cen">
                                        <div styleName="dl_tit">{item.title}</div>
                                        <div styleName="dl_span">
                                            <span>{item.from}</span>
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                    <div styleName="dl_rig">
                                        <Image src={item.imgSrc} style={{ width: 100, height: 75 }} />
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