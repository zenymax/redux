/**
 * Created by zenymax on 2/24/17.
 */
import types from '../constant'
import authorAction from '../api/mockAuthorApi'
import {beginAjaxRequest} from './ajax-status.action'

export function loadAuthorSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors}
}

export function loadAuthor() {
  return function(dispatch) {
    dispatch(beginAjaxRequest())
    return authorAction.getAllAuthors().then(authors => {
      dispatch(loadAuthorSuccess(authors))
    }).catch(error => {
      throw(error)
    })
  }
}
