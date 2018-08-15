import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import { demoApi } from '@apis/index'
import { demo } from '@actions/demo'

@connect((state, props) => ({
  config: state.config,
  demoData: state.demoData,
}))
export default class DemoC extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.getDemodata()
  }

  getDemodata () {
    this.props.dispatch(demo({id: '222'}, _ => _, err => {
      throw new Error('message')
    }))
  }



  render() {
    return (
      <div className="page">
        llll
      </div>
    )
  }
}
