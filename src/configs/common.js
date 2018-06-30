
import { hashHistory } from 'react-router'
import { message } from 'antd'
import { demo } from '@apis'

export const demo = (params, success, failure) => {
    demo(params, (response) => {
    sessionStorage.setItem('demo', response.data.token)
    localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage))
    // _fetchNav().then(() => { success() })
    if (typeof success === 'function') success(response)
  }, (response) => {
    if (typeof failure === 'function') failure(response)
  })
}


// 进入路由的判断
export const isLogin = (nextState, replaceState) => {
  if (nextState.location.query && nextState.location.query.ticket) { // 如果url自带ticket
    sessionStorage.setItem('token', 'ticket')
  }
  if (nextState.location.query && nextState.location.query.key) { // 如果url自带key
    sessionStorage.setItem('token', 'key')
  }
  const token = sessionStorage.getItem('token')
  if (!token) { // 没有token，那就返回首页
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
