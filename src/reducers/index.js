import {combineReducers} from 'redux'

import course from './course.reducer'
import author from './author.reducer'
import ajaxCallInProgress from './ajax-status.reducer'

const rootReducer = combineReducers({
  course,
  author,
  ajaxCallInProgress
})

export default rootReducer
