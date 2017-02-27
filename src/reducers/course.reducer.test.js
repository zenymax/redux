/**
 * Created by zenymax on 2/27/17.
 */
import expect from 'expect'
import courseReducer from './course.reducer'
import {createCourseSuccess, updateCourseSuccess} from '../actions/course.action'

describe('Course Reducer', ()=>{
  it('Should at course when CREATE_COURSE_SUCCESS', ()=>{

    const initialState= [
      {title: 'A'},
      {title: 'B'}
    ]
    const newCourse = {title: 'C'}

    const actions = createCourseSuccess(newCourse)

    const newState = courseReducer(initialState, actions)

    expect(newState.length).toEqual(3)
    expect(newState[0].title).toEqual('A')
  })

  it('Should at course when UPDATE_COURSE_SUCCESS', ()=>{

    const initialState= [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ]
    const newCourse = {id: 'C', title: 'CC'}

    const actions = updateCourseSuccess(newCourse)
    const newState = courseReducer(initialState, actions)

    const updatedState = newState.find(item => item.id == newCourse.id)
    const unTouched = newState.find(item=> item.id == 'A')

    expect(newState.length).toEqual(3)
    expect(updatedState.title).toEqual('CC')
    expect(unTouched.title).toEqual('A')

  })
})
