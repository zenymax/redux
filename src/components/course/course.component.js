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

class Course extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      course: {title: ''}
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)

  }

  onTitleChange(event) {
    const course = this.state.course
    course.title = event.target.value
    this.setState({course: course})
  }

  onClickSave(event) {
    this.props.actions.createCourse(this.state.course)
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    debugger
    return (
      <div>
        <h1>Course Page</h1>
        {this.props.course.map(this.courseRow)}
        <h2>Add Course</h2>
        <input type="input" onChange={this.onTitleChange} value={this.state.course.title}/>
        <input type="submit" onClick={this.onClickSave} value="Save"/>

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
    actions: bindActionCreators(CourseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course)
