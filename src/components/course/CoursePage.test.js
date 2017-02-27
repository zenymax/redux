/**
 * Created by zenymax on 2/27/17.
 */
import React from 'react'
import expect from 'expect'
import {mount, shallow} from 'enzyme'
import {CoursePage} from './CoursePage'

describe('Course Page', ()=>{
  it('Set error message when trying to save empty title', ()=>{
    const props = {
      authors: [],
      course: {id:'', watchHref: '', title: '', authorId: '', length: '', category: ''},
      actions: {saveCourse:()=>{
        return Promise.resolve()
      }}
    }

    const wrapper = mount(<CoursePage {...props}/>)
    const saveBtn = wrapper.find('input').last()
    expect(saveBtn.prop('type')).toBe('submit')
    saveBtn.simulate('click')

    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.')
  })
})
