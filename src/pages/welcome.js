import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { Progress, Button } from 'antd'
import Lunbotu from '@components/lunbotu'

const banners = [
  'https://goss.veer.com/creative/vcg/veer/612/veer-134962050.jpg',
  'https://goss.veer.com/creative/vcg/veer/612/veer-153683407.jpg',
  'https://goss.veer.com/creative/vcg/veer/612/veer-141483657.jpg',
  'https://goss.veer.com/creative/vcg/veer/612/veer-149552661.jpg',
  'https://goss.veer.com/creative/vcg/veer/612/veer-130297301.jpg'
]

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
      <div className='developing notfound'>
        <Lunbotu
          autoPlay
          defaultActiveIndex={0}
          number={4}
          interval={4000}
          direction='right'
          banners={banners} />
      </div>
    )
  }
}
