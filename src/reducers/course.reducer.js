import types from '../constant'

var initState = []

export default function courseReducer(state = initState, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, Object.assign({}, action.course)]

    default:
      return state
  }
}
