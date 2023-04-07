import React, { useState } from "react";
import {history} from 'umi'
import { Button,Toast,Dialog} from 'antd-mobile';
import './styles.less'

export default function Guard(props) {
        const [swit,setSwit] = useState(props.switchBtn)
        console.log(props);
     return (
        <div>
           <Dialog 
            visible={swit}
            content="你还没有登录，是否前往登录？"
            actions={[
                [
                    {
                        key: 'close',
                        text: '取消',
                        onClick: () => {
                            setSwit(false)
                            console.log(123);
                            localStorage.setItem('swi',false)
                        },
                      },
                      {
                          key: 'confirm',
                          text: '确认',
                          onClick: () => {
                            setSwit(false)
                           
                            history.push('/login')
                          },
                        },
                ]
              ]}
            />
                
        </div>
    )
}