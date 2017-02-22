import types from '../constant'
import courseAction from '../api/mockCourseApi'

// export function createCourse(courseData) {
//   return {type: types.CREATE_COURSE, course: courseData}
// }

export function loadCourseSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses}
}

export function loadCourse() {
  console.log('goi som vay ne');
  return function(dispatch) {
    return courseAction.getAllCourses().then(courses => {
      dispatch(loadCourseSuccess(courses))
    }).catch(error => {
      throw(error)
    })
  }
}
