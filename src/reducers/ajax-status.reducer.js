/**
 * Created by zenymax on 2/26/17.
 */
import types from '../constant'
import initialState from './initialState'

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS'
}

export default function ajaxStatusReducer(state = initialState.ajaxCallInProgress, action) {
  if (action.type === types.BEGIN_AJAX_REQUEST) {
    return state + 1
  } else if (actionTypeEndsInSuccess(action.type) || action.type === types.AJAX_REQUEST_ERROR) {
    return state - 1
  }

  return state
}
