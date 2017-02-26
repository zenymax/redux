/**
 * Created by zenymax on 2/26/17.
 */
import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import CourseForm from './course-form.component'

function setup(saving) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    allAuthors: {},
    onSave: ()=>{},
    onChange: ()=>{}
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<CourseForm {...props}/>)
  let output = renderer.getRenderOutput()

  return {
    props, output, renderer
  }
}

describe('Course Form via React Test Util', () => {
  it('renders form and h1', () => {
    const {output} = setup()
    expect(output.type).toBe('form')

    let [h1] = output.props.children
    expect(h1.type).toBe('h1')
  })

  it('render form with - Title label', ()=>{
    const {output} = setup()
    let [h1, TextInput] = output.props.children
  })

  it('save button is labeld "Save" when not saving', ()=>{
    const {output} = setup(false)
    const submitBtn = output.props.children[5]
    expect(submitBtn.props.value).toBe('Save')
  })

  it('save button is labeld "Saving..." when not save', ()=>{
    const {output} = setup(true)
    const submitBtn = output.props.children[5]
    expect(submitBtn.props.value).toBe('Saving...')
  })

})
