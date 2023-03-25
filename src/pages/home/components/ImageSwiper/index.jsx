import React,{useRef} from "react";
import { Button, Space, Swiper, Toast,Image } from 'antd-mobile'
const colors = [
    'http://10.161.54.76:3000/src/pages/index/components/swipe/banner.png', 
    'http://10.161.54.76:3000/src/pages/index/components/swipe/banner.png', 
    'http://10.161.54.76:3000/src/pages/index/components/swipe/banner.png', 
    'http://10.161.54.76:3000/src/pages/index/components/swipe/banner.png'
]
import styles from './styles.less'
export default function ImageSwiper(props) {
    const { dispatch } = props
    // const items = 
    return (
        <div>
            <Swiper autoplay>
                {
                    colors.map((color, index) => (
                        <Swiper.Item key={index}>
                          <div
                            className={styles.content}
                            // style={{ background: color }}
                            onClick={() => {
                              Toast.show(`你点击了卡片 ${index + 1}`)
                            }}
                          >
                            <Image src={color} /> 
                          </div>
                        </Swiper.Item>
                      ))
                }
            </Swiper>
        </div>
    )
}
