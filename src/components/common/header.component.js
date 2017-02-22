/**
 * Created by zenymax on 2/13/17.
 */

/*eslint-disable no-unused-vars*/
import {Link, IndexLink} from 'react-router'
/*eslint-enable no-unused-vars*/
import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <nav>
        <IndexLink to='/' activeClassName='active'>Home</IndexLink>
        {'  |  '}
        <Link to='/about' activeClassName='active'>About</Link>
        {'  |  '}
        <Link to='/courses' activeClassName='active'>Course</Link>
      </nav>
    )
  }
}
export default Header
