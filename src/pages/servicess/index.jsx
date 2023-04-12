import React, { useEffect, useState } from "react";
import { connect } from 'dva';
import { history } from 'umi';
import Icons from "@/components/Icons";
import Routing from '@/components/Routing'
import './styles.less'
export default connect((state) => {
    return {

    }
})(servicess)

function servicess(props) {
    const [token, setToken] = useState(localStorage.getItem('ticketToken'))
    // 返回上一页
    const back = () => {
        history.go(-1)
    }
    return (
        <div styleName="serv_box">
            {
                token === null ?
                    <Routing title={'在线客服'} />
                    :
                    <>
                        <div styleName="serv_head">
                            在线客服
                            <div styleName="serv_icon" onClick={back}>
                                <Icons name={'icon-xiangzuo'} />
                            </div>
                        </div>
                        {/* websockt客服聊天 */}
                        <div styleName="serv_sec">
                            客服
                        </div>
                    </>
            }
        </div>
    )
}
