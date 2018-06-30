
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd'
import { regExpConfig } from '@reg'
import { brandName } from '@config'
import { clearGformCache2, login } from '@actions/common'
import { /* login,  */staff, menu } from '@apis/common'
import Logo from '@components/logo/logo'
import QueuiAnim from 'rc-queue-anim'

const FormItem = Form.Item

@connect((state, props) => ({
  config: state.config,
  loginResponse: state.loginResponse,
}))
@Form.create({
  onFieldsChange(props, items) {},
})

export default class Login extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
      isWechat: false,
      show: true,
    }
  }

  componentWillMount() {
    this.props.dispatch(clearGformCache2({}))
  }

  // region 收缩业务代码功能

  handleSubmit(e, isWechat) {
    e.preventDefault()
    if (isWechat) {
      message.warning('证书登录功能未开通')
      return
    }
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const query = this.props.form.getFieldsValue()
        this.setState({ loading: true })
        this.props.dispatch(login(values, (res) => {
          sessionStorage.setItem('token', res.data.token)
          sessionStorage.setItem('ticket', res.data.ticket)
          menu({}, (response) => {
            const nav = response.data.list || []
            if (nav && nav[0]) {
              sessionStorage.setItem('gMenuList', JSON.stringify(nav))
              sessionStorage.setItem('topMenuReskey', nav[0].resKey)
              sessionStorage.setItem('leftNav', JSON.stringify(nav))

              staff({ usercode: query.username }, (resp) => {
                hashHistory.push('/')
              }, (r) => {
                message.warning(r.msg)
                this.setState({
                  loading: false,
                })
              })
            }
          }, (r) => {
            // message.warning(r.msg)
            this.setState({
              loading: false,
            })
          })
        }, (res) => {
          message.warning(res.msg)
          this.setState({
            loading: false,
          })
        }))
      }
    })
  }

  // endregion

  render() {
    const { getFieldDecorator } = this.props.form
    const {show, loading, isWechat} = this.state
    return (
      <div className="login-container">
        <div className="flexcolumn">
          <div className="login-main">
            <QueuiAnim delay={300} type="bottom" key="row">
              {
                show ? [
                  <Row key="row0">
                    <Col span={8} />
                    <Col span={8}>
                      <Spin spinning={loading}>
                        <Form onSubmit={e => this.handleSubmit(e, isWechat)}>
                          {!isWechat ?
                            (<div>
                              <FormItem hasFeedback>
                                {getFieldDecorator('username', {
                                  rules: [
                                    {
                                      required: true, min: 4, max: 10, message: '用户名为4-10个字符',
                                    },
                                    { pattern: regExpConfig.policeNo, message: '账号4-10位数字或字母组成' },
                                  ],
                                })(<Input addonBefore={<Icon type="user" />} placeholder="请输入用户名" type="text" />)}
                              </FormItem>
                              <FormItem hasFeedback>
                                {getFieldDecorator('password', {
                                  rules: [
                                    {
                                      required: true, min: 6, max: 16, message: '密码为6-16个字符',
                                    },
                                    { pattern: regExpConfig.pwd, message: '密码由6-16位数字或者字母组成' },
                                  ],
                                })(<Input addonBefore={<Icon type="lock" />} placeholder="请输入密码" type="password" />)}
                              </FormItem>
                              <FormItem>
                                <Button type="primary" htmlType="submit" className="cert-btn">登录</Button>
                              </FormItem>
                            </div>) :
                            <FormItem>
                              <Button type="primary" htmlType="submit">微信登陆</Button>
                            </FormItem>
                          }
                        </Form>
                      </Spin>
                    </Col>
                    <Col span={8} />
                  </Row>,
                ] : null
              }
            </QueuiAnim>
          </div>
        </div>
      </div>
    )
  }
}
