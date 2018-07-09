
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd'
import { regExpConfig } from '@reg'
import { brandName } from '@config'
import { demo } from '@actions/demo'
import { demoApi } from '@apis/index'
// import Logo from '@components/logo/logo'


const FormItem = Form.Item

@connect((state, props) => ({
  config: state.config,
  loginResponse: state.loginResponse,
}))

export default class Login extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {

    }
  }

  componentWillMount() {

  }

  componentDidMount () {
    sessionStorage.setItem('token', 'dddddddddddddddddddddd')
  }

  goIndex() {
    hashHistory.push('/')
  }


  render() {
    return (
      <div className='login-container'>
        <Button onClick={this.goIndex} type='primary'>进入首页</Button>
      </div>
    )
  }
}
