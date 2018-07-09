import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import * as demo from './demo'

const rootReducer = combineReducers({
  routing,
  config: (state = {}) => state,
  ...demo
})

export default rootReducer
