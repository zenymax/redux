/**
 * Created by zenymax on 2/13/17.
 */
/*eslint-disable no-unused-vars*/
import React from 'react'
import {Route, IndexRoute} from 'react-router'
/*eslint-enable no-unused-vars*/
import App from './components/app'
import HomePage from './components/home/home.component'
import AboutPage from './components/about/about.component'
import CoursePage from './components/course/course.component'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage}></IndexRoute>
    <Route path='/about' component={AboutPage}></Route>
    <Route path='/course' component={CoursePage}/>
  </Route>
)
