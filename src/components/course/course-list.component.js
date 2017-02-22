/**
 * Created by zenymax on 2/21/17.
 */
import React from 'react'
import CourseRow from './course-row.component'

const CourseList = ({courses: courses}) => {
  console.log('wtf ', courses);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
      {
        courses.map(course =>
          <CourseRow key={course.id} course={course}></CourseRow>
        )
      }
      </tbody>
    </table>
  )
}
export default CourseList
