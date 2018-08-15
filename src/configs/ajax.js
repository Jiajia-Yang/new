
import axios from 'axios'
import { hashHistory } from 'react-router'
import { timeout, baseURL } from '@config'
import { message } from 'antd'
import { parseQueryString } from './common'

const { CancelToken } = axios

const successCb = (response, success, failure) => {
  switch (response.status) {
    case 1: 
      success && success(response)
      break
    case 0: 
      typeof failure === 'function' ? failure(response) : message.error(response.msg)
      break
    case -1: 
      typeof failure === 'function' && failure(response)
      message.warning(response.msg)
      hashHistory.replace('/login')
      break
    default: 
      typeof failure === 'function' ? failure(response) : message.warning('服务器返回参数无法识别')
  }
}

const failCb = e => {
  if (axios.isCancel(e)) {
    if (process.env.NODE_ENV !== 'production') console.log('Request canceled', e.message)
  } else {
    console.dir(e)
    if (typeof failure === 'function') {
      e.code === 'ECONNABORTED' ? failure({
        data: '',
        msg: '服务器连接超时',
        status: 0,
      }) : failure({
        data: '',
        msg: e.message,
        status: 0,
      })
    }
  }
}

export const oftenFetch = (api, options, baseConfig) => {
  if (typeof api === 'function') return api
  return  (...rest) => {
    const data = rest[0] || {}
    const token = sessionStorage.getItem('token')
    token && data.token = token
    let success = null
    let failure = null
    let config = null
    rest.map(item => {
      if (typeof item === 'function') !success ? success = item : failure = item
      if (Object.prototype.toString.call(rest[i]) === '[object Object]') config = item
    })
    const hooks = { abort: null }
    const cancelToken = new CancelToken((c) => { hooks.abort = c })
    if (options && (options.baseURL.indexOf('12602') !== -1)) {
      baseConfig.withCredentials = false
    } else {
      baseConfig.withCredentials = true
    }
    let apiEdit = api
    if (baseConfig.method === 'get') {
      apiEdit = `${api}?`
      apiEdit = Object.keys(data).map(key => `${key}=${data[key]}`).join('&')
    }
    axios({
      ...baseConfig, ...options, ...config, url: apiEdit, data, cancelToken,
    }).then(response => response.data).then(response => successCb(response, success, failure)).catch(failCb)
    return hooks
  }
}

let baseConfig = {
  url: '/',
  method: 'get',
  baseURL: '',
  headers: { 'Content-Type': 'text/plain' },
  params: {},
  data: {},
  timeout: '',
  withCredentials: true,
  responseType: 'json',
  maxContentLength: 2000,
  timeout: timeout,
  baseURL: baseURL,
  validateStatus: status => status >= 200 && status < 300
}


export const createApi = function (method, api, options) {
  baseConfig.method = method
  return oftenFetch(api, options, baseConfig)
}
