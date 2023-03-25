import React,{useEffect} from "react";
import { connect } from 'dva';
import ImageSwiper from "./components/ImageSwiper";
import './styles.less'
export default connect((state) => {
    return {
        homeList:state.home.travelList
    }
})(home)
function home(props) {
    const {dispatch,homeList} = props
    console.log(homeList);
    useEffect(()=>{
        dispatch({
            type:"home/feactList",
        })
    },[])
    return (
        <div styleName="HomeBox">
            <div styleName="HeadBox">
                <div styleName="head_title">
                    <h1>火车票预订</h1>
                    <span>便捷购票，服务您的每一次出行</span>
                </div>
            </div>
            <div styleName="SectionBox">
                11
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
                    
               </div>

            </div>
        </div>
    )
}