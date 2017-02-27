import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/course.action'
import CourseForm from './course-form.component'
import {authorsFormattedForDropdown} from '../../selectors/selectors'
import Toastr from 'toastr'

export class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          course: Object.assign({}, props.course),
          errors: {},
          saving: false
        }

        this.updateCourseState = this.updateCourseState.bind(this)
        this.saveCourseClick = this.saveCourseClick.bind(this)
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.course.id !== nextProps.course.id) {
        this.setState({course: Object.assign({}, nextProps.course)})
      }
    }

    updateCourseState(event) {
      const field = event.target.name
      let course = this.state.course
      course[field] = event.target.value
      return this.setState({course: course})
    }

    courseFormIsValid() {
      let formIsValid = true
      let errors = {}

      if (this.state.course.title.length < 5) {
        errors.title = 'Title must be at least 5 characters.'
        formIsValid = false
      }
      this.setState({errors})
      return formIsValid
    }

    saveCourseClick(event) {
      event.preventDefault()
      if (!this.courseFormIsValid()) {
        return
      }

      this.setState({saving: true})
      this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error => {
          Toastr.error(error)
          this.setState({saving: false})
        })
    }

    redirect() {
      this.setState({saving: false})
      Toastr.success("Thanh cong roi nha")
      this.context.router.push('/courses')
    }

    render() {
        return (
          <CourseForm
            course={this.state.course}
            errors={this.state.errors}
            saving={this.state.saving}
            onChange={this.updateCourseState}
            onSave={this.saveCourseClick}
            allAuthors={this.props.authors}>
          </CourseForm>
        );
    }
}

CoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

CoursePage.contextTypes = {
  router: PropTypes.object
}


function getCourseById(courses, id) {
  const course = courses.filter(course => course.id === id)
  if (course.length > 0) {
    return course[0]
  }
  return null
}

function mapStateToProps(state, ownProps) {
    let course = {id:'', watchHref: '', title: '', authorId: '', length: '', category: ''}

    const courseId = ownProps.params.id // from path: /course/:id
    if (courseId && state.course.length > 0) {
      course = getCourseById(typeof (state.course) === 'object' ? state.course : [], courseId)
    }

    return {
      course: course,
      authors: authorsFormattedForDropdown(state.authors)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
