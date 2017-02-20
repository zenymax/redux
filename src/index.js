/**
 * Created by zenymax on 2/10/17.
 */

/*eslint-disable no-unused-vars*/
import 'babel-polyfill'
import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'

/*eslint-enable no-unused-vars*/
import routes from './routes'
import './styles/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configure.store'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
)

