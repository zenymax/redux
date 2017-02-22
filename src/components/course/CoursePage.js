import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/course.action'

class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <h1>Course Manage</h1>
        );
    }
}

CoursePage.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
