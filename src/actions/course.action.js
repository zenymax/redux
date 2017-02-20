import types from '../constant'

export function createCourse(courseData) {
  return {type: types.CREATE_COURSE, course: courseData}
}
