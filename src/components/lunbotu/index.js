import React, { Component } from 'react'
import './index.less'
export default class Lunbotu extends Component {
  constructor (props) {
    super()
    this.state = {
      activeIndex: props.defaultActiveIndex || 0,
      direction: props.direction || 'right'
    }
    this.timeOuter = null
  }
  
  componentDidMount () {
    this.autoPlay()
  }

  componentWillReceiveProps () {
   
  }

  componentWillUnmount () {
    clearInterval(this.timeOuter)
    this.timeOuter = null
  }

  autoPlay () {
    if (this.props.autoPlay) {
      if (this.props.direction === 'right') {
        this.timeOuter = setInterval(this.playRight.bind(this), this.props.interval)
      } else if (this.props.direction === 'left') {
        this.timeOuter = setInterval(this.playLeft, this.props.interval)
      }
    }
  }

  playRight (indexIn) {
    let index = indexIn ? indexIn : this.state.activeIndex + 1
    if (index > this.props.number - 1) {
      index = 0
    }
    this.setState({ activeIndex: index })
  }

  playLeft (indexIn) {
    let index = indexIn ? indexIn : this.state.activeIndex - 1
    if (index < 0) {
      index = this.props.number - 1
    }
   this.setState({ activeIndex: index })
  }

  position () {
    switch (this.state.activeIndex) {
      case 0:
        return 'onePosition'
      case 1:
        return 'twoPosition'
      case 2:
        return 'therePosition'
      case 3:
        return 'fourPosition'
    }
  }

  left () {
    clearInterval(this.timeOuter)
    this.timeOuter = null
    let oldIndex = this.props.activeIndex
    this.playLeft(oldIndex + 1)
    this.autoPlay()
  }

  right () {
    clearInterval(this.timeOuter)
    this.timeOuter = null
    let oldIndex = this.props.activeIndex
    this.playRight(oldIndex - 1)
    this.autoPlay()
  }

  render () {
    // const { banners } = this.props
    const { banners } = this.props
    return <div className='content' >
      <span className='leftIcon' onClick={this.left}>left</span>
      <span className='rightIcon' onClick={this.right}>right</span>
      <ul className={this.position()}>
        {
          banners.map((item, index) => {
            return <li key={`li-${index}`} className='boxStyleLi'>
              <img src={item} />
            </li>
          })
        }
        {this.props.children}
      </ul>
    </div>
  }
}
