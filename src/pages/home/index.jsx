import React from "react";
import { connect } from 'dva';
import './styles.less'
export default connect((state) => {
    return {

    }
})(home)
function home(props) {

    return (
        <div styleName="HomeBox">
            <div styleName="HeadBox">11</div>
            <div styleName="SectionBox">
                11
            </div>
            <div styleName="img_swiper"></div>
        </div>
    )
}