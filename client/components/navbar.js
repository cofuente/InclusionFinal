import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom' // consider using NavLink instead?
import {logout} from '../store'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.renderLogin = this.renderLogin.bind(this)
    this.renderLogout = this.renderLogout.bind(this)
  }

  render() {
    const {isLoggedIn, handleClick} = this.props
    return (
      <div>
        <Link to="/">
          <h1>EXCLUSION</h1>
        </Link>
        <nav>
          {isLoggedIn ? this.renderLogout(handleClick) : this.renderLogin()}
        </nav>
        <hr />
      </div>
    )
  }

  renderLogin() {
    return (
      <div>
        {/* The navbar will show these links when an admin is not logged in */}
        <Link to="/login">Login for admins</Link>
      </div>
    )
  }

  renderLogout(handleClick) {
    return (
      <div>
        {/* The navbar will show these links when an admin is logged in */}
        <Link to="/home">Home</Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
