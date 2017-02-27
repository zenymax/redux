/**
 * Created by zenymax on 2/27/17.
 */
import React from 'react'
import expect from 'expect'
import types from '../constant'
import * as courseAction from './course.action'

import thunk from 'redux-thunk'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'


describe('Course Action', ()=>{
  describe('createCourseSuccess', ()=>{
    it('Should create a CREATE_COURSE_SUCCESS action', ()=>{
      const course = {id: 'clean-code', title: 'clean code'}
      const expectAction = {
        type: types.CREATE_COURSE_SUCCESS,
        courses: course
      }

      const action = courseAction.createCourseSuccess(course)

      expect(action).toEqual(expectAction)
    })
  })
})


const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('Async Test', ()=>{
  afterEach(()=>{
    nock.cleanAll()
  })

  it('Should create BEGIN_AJAX_REQUEST and LOAD_COURSES_SUCCESS when loading course', (done)=>{
    // real world
    // nock('http://aaaaa.com/')
    //   .get('/course')
    //   .reply(200, {body: {course: [{id:'clean-code', title:'Clean code'}]}})

    const expectedActions = [
      {type: types.BEGIN_AJAX_REQUEST},
      {type: types.LOAD_COURSES_SUCCESS, body: {course: [{id:'clean-code', title:'Clean code'}]}}
    ]

    const store = mockStore({courses: []}, expectedActions)

    store.dispatch(courseAction.loadCourse()).then(()=>{
      const actions = store.getActions()
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_REQUEST)
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS)
      done()
    })

  })
})
