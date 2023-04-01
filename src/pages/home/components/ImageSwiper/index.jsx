import React, { useRef } from "react";
import { Swiper, Toast, Image } from 'antd-mobile'
import styles from './styles.less'

// 图片数据
const colors = [
    'http://10.161.54.4:3000/src/pages/index/components/swipe/banner.png',
    'http://10.161.54.4:3000/src/pages/index/components/swipe/banner.png',
    'http://10.161.54.4:3000/src/pages/index/components/swipe/banner.png',
    'http://10.161.54.4:3000/src/pages/index/components/swipe/banner.png'
]
export default function ImageSwiper(props) {
    return (
        <div styleName="img_box">
            <Swiper autoplay>
                {
                    colors.map((color, index) => (
                        <Swiper.Item key={index}>
                            <div
                                className={styles.content}
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
