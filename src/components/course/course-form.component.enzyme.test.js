/**
 * Created by zenymax on 2/26/17.
 */
import expect from 'expect'
import React from 'react'
import {mount, shallow} from 'enzyme'
import CourseFrom from './course-form.component'
import TextInput from '../common/textinput.component'

function setup(saving) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    allAuthors: {},
    onSave: ()=>{},
    onChange: ()=>{}
  }

  return shallow(<CourseFrom {...props}/>)
}

describe('Course Form via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup()
    expect(wrapper.find('form').length).toBe(1)
    expect(wrapper.find('h1').text()).toEqual('Manage Course')
  })

  it('save button is labeld "Save" when not saving', ()=>{
    const wrapper = setup(false)
    expect(wrapper.find('input').props().value).toBe('Save')
  })

  it('save button is labeld "Saving..." when not save', ()=>{
    const wrapper = setup(true)
    expect(wrapper.find('input').props().value).toBe('Saving...')
  })

  it('Have text title', ()=>{
    const wrapper = setup()
    var test =  wrapper.find(TextInput).at(0).props().label
    expect(test).toEqual('Title')
  })
})
