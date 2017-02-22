/**
 * Created by zenymax on 2/22/17.
 */
import React from 'react'


const CourseForm = ({course, onChange, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors}/>
      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
      />

    </form>
  )
}

