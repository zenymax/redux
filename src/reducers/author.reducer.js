/**
 * Created by zenymax on 2/24/17.
 */
import types from '../constant'
import initialState from './initialState'

export default function authorReducer(state = initialState.author, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors

    default:
      return state
  }
}
