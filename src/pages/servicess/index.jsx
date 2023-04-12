import React, { useEffect,useState } from "react";
import { connect } from 'dva';
import { history } from 'umi';
import Routing from '@/components/Routing'
import './styles.less'
export default connect((state) => {
    return {

    }
})(servicess)

function servicess(props) {
    const [token, setToken] = useState(localStorage.getItem('ticketToken'))

    return (
        <div styleName="serv_box">
            {
                token === null ?
                <Routing title={'在线客服'} />
                :   
                <>
                    <div styleName="serv_head">
                        1
                    </div>
                    <div styleName="serv_sec">
                        2
                    </div>
                </>
            }
        </div>
    )
}
