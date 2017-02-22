import types from '../constant'

var initState = []

export default function courseReducer(state = initState, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses

      default:
        return state
    }
}
