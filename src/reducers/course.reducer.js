import types from '../constant'
import initialState from './course.reducer'

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses

    case types.CREATE_COURSE_SUCCESS:
      // return [...state, Object.assign({}, action.courses)]
      return [...state, action.courses]

    case types.UPDATE_COURSE_SUCCESS:
      // return [...state.filter(course => course.id !== action.courses.id), Object.assign({}, action.course)]
      return [...state.filter(course => course.id !== action.courses.id), action.courses]

      default:
        return state
    }
}

