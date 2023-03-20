import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'dva'
import _ from 'lodash'
import './styles.less'

export default connect(({ state, loading }) => {
  return {}
})(Detail)

function Detail(props) {

  const { dispatch, loading } = props
  // 
  useEffect(() => {
  }, [])

  return (
    <div>
      detail 页面
    </div>
  )
}
