/**
 * Created by zenymax on 2/10/17.
 */

/*eslint-disable no-unused-vars*/
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'

/*eslint-enable no-unused-vars*/
import routes from './routes'
import './styles/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('app')
)
