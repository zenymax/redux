/**
 * Created by zenymax on 2/22/17.
 */
import React from 'react'
import TextInput from '../common/textinput.component'
import SelectInput from '../common/selectinput.component'

const CourseForm = ({loading, course, allAuthors, onChange, onSave, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}/>
      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}/>
      <TextInput
        name="Category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}/>
      <TextInput
        name="Length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}/>
      <input
        type="submit"
        disabled={loading}
        value={loading? 'Saving...':'Save'}
        className="btn btn-primary"
        onClick={onSave}/>

    </form>
  )
}

export default CourseForm

