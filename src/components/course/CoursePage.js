import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/course.action'
import CourseForm from './course-form.component'

class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          course: Object.assign({}, this.props.course),
          errors: {}
        }
    }

    render() {
        return (
          <CourseForm
            course={this.state.course}
            allAuthors={[]}
            errors={this.state.errors}
          >
          </CourseForm>
        );
    }
}

// CoursePage.propTypes = {
//     //myProp: PropTypes.string.isRequired
// };

function mapStateToProps(state, ownProps) {
    let course = {id:'', watchHref: '', title: '', authorId: '', length: '', category: ''}
    return {
      course: course
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
