
import { hashHistory } from 'react-router'
import { message } from 'antd'
import { demoApi } from '@apis'


// 进入路由的判断
export const isLogin = (nextState, replaceState) => {
  if (nextState.location.query && nextState.location.query.ticket) {
    sessionStorage.setItem('token', 'ticket')
  }
  if (nextState.location.query && nextState.location.query.key) {
    sessionStorage.setItem('token', 'key')
  }
  const token = sessionStorage.getItem('token')
  if (!token) {
    replaceState('/login')
  }
}

// 异步请求需要走redux的方式
export const createAjaxAction = (createdApi, startAction, endAction) => (request = {}, resolve, reject, config) => (dispatch) => {
  if (startAction) dispatch(startAction({ req: request, res: {} }))
  const _resolve = (response) => {
    if (endAction) dispatch(endAction({ req: request, res: response }))
    if (resolve) resolve(response)
  }
  return createdApi(request, _resolve, reject, config)
}
