import types from '../constant'
import courseAction from '../api/mockCourseApi'
import {beginAjaxRequest, ajaxRequestError} from './ajax-status.action'

export function loadCourseSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses}
}

export function createCourseSuccess(courses) {
  return {type: types.CREATE_COURSE_SUCCESS, courses}
}

export function updateCourseSuccess(courses) {
  return {type: types.UPDATE_COURSE_SUCCESS, courses}
}


export function loadCourse() {
  return function(dispatch) {
    dispatch(beginAjaxRequest())
    return courseAction.getAllCourses().then(courses => {
      dispatch(loadCourseSuccess(courses))
    }).catch(error => {
      throw(error)
    })
  }
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxRequest())
    return courseAction.saveCourse(course).then(savedCourse => {
      course.id ?  dispatch(updateCourseSuccess(savedCourse)): dispatch(createCourseSuccess(savedCourse))
    }).catch(error => {
      // call a dispatch here like A+. or catch in caller. for render error page, loadign screen...
      dispatch(ajaxRequestError())
      throw(error)
    })
  }
}
