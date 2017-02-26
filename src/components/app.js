/**
 * Created by zenymax on 2/13/17.
 */

/*eslint-disable no-unused-vars*/
import Header from './common/header.component'
/*eslint-enable no-unused-vars*/
import React, {PropTypes} from 'react'
import {connect} from 'react-redux'


class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    )
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  console.log('state.ajaxCallInProgress ', state);
  return {
    loading: state.ajaxCallInProgress > 0
  }
}

export default connect(mapStateToProps)(App)
