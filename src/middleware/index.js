
import { routerMiddleware } from 'react-router-redux'
import logger from './logger'
import history from './history'

const reduxRouterMiddleware = routerMiddleware(history)

export {
  reduxRouterMiddleware,
  logger
}
