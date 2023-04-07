import React,{useEffect} from "react"
import { connect } from 'dva'
import {Input,Button} from 'antd-mobile'
import Icons from '@/components/Icons'
import './styles.less'
export default connect((state)=>{
    return{
        checklist: state.passengers.checkList,
    }
})(CheckList)

function CheckList(props){
    console.log(props);
    const {checklist,dispatch} = props
    return(
        <div styleName="check_boxs">
            {
                    checklist.length === 0 ? null :
                        <div styleName="check_div">
                            {
                                checklist.map((item, index) => {
                                    console.log(item);
                                    return (
                                        <div key={index} styleName="check_box">
                                            <div styleName="check_lef">
                                                {/* icon图标 */}
                                                <Icons name={'icon-jian'} />
                                            </div>
                                            <div styleName="check_rig">
                                                <div styleName="rig_top">
                                                    <div styleName="top_lef">姓名</div>
                                                    <div styleName="top_rig">
                                                        <Input value={item.booker} />
                                                        <span>{item.ticketType}</span>
                                                    </div>
                                                </div>
                                                <div styleName="rig_bom">
                                                    <div styleName="bom_lef">身份证</div>
                                                    <div styleName="bom_rig">
                                                        <Input value={item.idCard}  />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
        </div>
    )
}