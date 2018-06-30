
import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import { message, LocaleProvider, Layout, Menu, Breadcrumb, Row, Col } from 'antd'
import { validateTickit, parseQueryString } from '@configs/common'
import { headnav } from '@configs/config'
import { loginByKey } from '@apis/common'
import zhCN from 'antd/lib/locale-provider/zh_CN'

const { Header, Content, Footer } = Layout;


@connect((state, props) => ({}))
export default class App extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {
      
    }
    
  }

  // 组件已经加载到dom中
  componentDidMount() {
    
  }

  componentWillMount() {
   
  }

  componentWillReceiveProps(nextProps) {

  }


  render() {
    const { location, children } = this.props
    // console.log(isIframe)
    return (
      <LocaleProvider locale={zhCN}>
       <Layout className="app-layout">
        <Header id="navbar-header">
          
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="pages-container">
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            jiajiajiajia
        </Footer>
      </Layout>
      </LocaleProvider>
    )
  }
}
