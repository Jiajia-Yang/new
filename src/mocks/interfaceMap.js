
const path = '/mock'

// region
const demos = require('./data') // 基础的接口

// endregion

module.exports = {
    [`${path}/data/demo`]: demos.demoData, // 登录
}
