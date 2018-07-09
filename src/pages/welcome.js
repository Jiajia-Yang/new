import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { Progress, Button } from 'antd'

// 声明组件  并对外输出
export default class notfound extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props)
    this.state = {
      // activeTab: 'pop' ,
    }
  }

  render() {
    return (
      <div className="developing notfound">
      </div>
    )
  }
}
