/**
 * Created by zenymax on 2/13/17.
 */

/*eslint-disable no-unused-vars*/
import {Link, IndexLink} from 'react-router'
/*eslint-enable no-unused-vars*/
import React from 'react'
import Loading from './loading.component'

class Header extends React.Component {

  render() {
    console.log('this.props.loading ', this.props.loading);
    return (
      <nav>
        <IndexLink to='/' activeClassName='active'>Home</IndexLink>
        {'  |  '}
        <Link to='/about' activeClassName='active'>About</Link>
        {'  |  '}
        <Link to='/courses' activeClassName='active'>Course</Link>
        { this.props.loading && <Loading interval={100} dots={20}></Loading>}
      </nav>
    )
  }
}
export default Header
