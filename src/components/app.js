/**
 * Created by zenymax on 2/13/17.
 */

/*eslint-disable no-unused-vars*/
import Header from './common/header.component'
/*eslint-enable no-unused-vars*/
import React, {PropTypes} from 'react'


class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
