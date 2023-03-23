import React, { useState } from 'react'

import { TabBar } from 'antd-mobile'

import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline
} from 'antd-mobile-icons'

import { history } from 'umi'

import './styles.less'

export default function BasicLayout(props) {

  const [activeKey, setActiveKey] = useState('todo')
  const [mac, setMac] = useState('')

  const RouterTab = (val) => {
    setMac(val)
    history.push(val)
  }

  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/orderList',
      title: '订单',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/servicess',
      title: '客服',
      icon: <MessageOutline />,
    },
    {
      key: '/user',
      title: '我的',
      icon: <UserOutline />,
    },
  ]
  return (
    <div styleName="BasBox">
      <div styleName="SecBox">{props.children}</div>
      <TabBar onChange={RouterTab}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}