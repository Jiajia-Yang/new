
import { createAction } from 'redux-actions'
import * as common from '@apis'
import { createAjaxAction } from '@configs/common'


// login 登陆
export const requestDemo = createAction('request demo')
export const recevieDemo = createAction('receive demo')
export const demo = createAjaxAction(common.demo, requestDemo, recevieDemo)

