/**
 * Created by zenymax on 2/13/17.
 */

/*eslint-disable no-unused-vars*/
import {Link} from 'react-router'
/*eslint-enable no-unused-vars*/
import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className='jumbotron'>
        <h1>Admin page</h1>
        <Link to='about' className="btn btn-primary">Learn more</Link>
      </div>
    )
  }
}
export default Home
