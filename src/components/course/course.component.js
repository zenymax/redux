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
import {browserHistory} from 'react-router'

class Course extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.redirectToAddScourePage = this.redirectToAddScourePage.bind(this)
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  redirectToAddScourePage() {
    browserHistory.push('/course')
  }

  render() {
    return (
      <div>
        <h1>Course Page</h1>
        <input
          type="submit"
          value="Add Scourse"
          className="btn btn-primary"
          onClick={this.redirectToAddScourePage}/>

        <CourseList courses={this.props.course}></CourseList>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    course: typeof (state.course) === 'object' ? state.course : []
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(CourseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course)
