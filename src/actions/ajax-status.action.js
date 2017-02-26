/**
 * Created by zenymax on 2/26/17.
 */
import types from '../constant'

export function beginAjaxRequest() {
  return {type: types.BEGIN_AJAX_REQUEST}
}

export function ajaxRequestError() {
  return {type: types.AJAX_REQUEST_ERROR}
}
