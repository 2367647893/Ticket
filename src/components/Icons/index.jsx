import React from "react";
import { createFromIconfontCN } from '@ant-design/icons';
import './styles.less'

export default function Icons(props) {
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/c/font_3986964_i9ky9g9vrdc.js',
    });
    return (
        <div>
            <IconFont type={props.name} style={props.style} />
        </div>
    )
}