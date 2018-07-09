import React, { Component } from 'react'
import { demoApi } from '@apis/index'
import { demo } from '@actions/demo'

export default class app extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div className="page">
        示范页面
      </div>
    )
  }
}
