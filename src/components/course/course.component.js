/**
 * Created by zenymax on 2/13/17.
 */

/*eslint-disable no-unused-vars*/
import {Link} from 'react-router'
/*eslint-enable no-unused-vars*/
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as CourseActions from '../../actions/course.action'
import CourseList from './course-list.component'

class Course extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    return (
      <div>
        <h1>Course Page</h1>
        <CourseList courses={this.props.course}></CourseList>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    course: state.course
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(CourseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course)
