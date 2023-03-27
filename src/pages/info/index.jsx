import React, { useEffect } from "react";
import { connect } from 'dva';
import { Image } from 'antd'
import './styles.less'
export default connect((state) => {
    return {
        infoList: state.info.infoList
    }
})(info)
function info(props) {
    const { dispatch, infoList } = props
    useEffect(() => {
        dispatch({
            type: "info/feactInfoList",
        })
    }, [])
    return (
        <div styleName="info_box">
            <div styleName="info_head">11</div>
            <div styleName="info_section">
                {
                    infoList.slice(0, 6).map((item, index) => {
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
    )
}