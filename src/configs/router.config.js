import React from 'react'
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'
import { isLogin } from '@configs/common'

import pages from '@pages'

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={pages.app} onEnter={isLogin}>
      <IndexRoute component={pages.welcome} />
      <Route path="/other-list" component={pages.demo} />
    </Route>
    <Route path="/login" component={pages.login} />
    <Route path="/register" component={pages.register} />
    <Route path="*" component={pages.notfound} />
  </Router>
)


