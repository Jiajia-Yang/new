
const path = '/mock'

// region
const demos = require('./apis') // 基础的接口

// endregion

module.exports = {
    [`${path}/data/demo`]: demos.demo, // 登录
}
