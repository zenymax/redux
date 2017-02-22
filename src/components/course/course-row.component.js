/**
 * Created by zenymax on 2/21/17.
 */
import React from 'react'
import {Link} from 'react-router'

const CourseRow = ({course: course}) => {
  console.log('aaa ', course);
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/'+course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  )
}

export default CourseRow
