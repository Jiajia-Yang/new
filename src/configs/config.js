
export const set = 'set$'
export const brandName = 'Senga' // slogan

// 开发环境默认配置
let _serverIp = 'http://192.168.1.222'
let _port = '1111'
let _baseURL = `${_serverIp}:${_port}`
let _mockURL = 'http://localhost:1111/'



export const serverIp = _serverIp
export const path = '/mock'
export const timeout = '15000' // 接口超时限制(ms)
export const baseURL = _baseURL
export const mockURL = _mockURL
export const headnav = [
  { id: 600110232, name: '首页', url: '' },
  { id: 600110233, name: '其他', url: 'other-list' }
]
