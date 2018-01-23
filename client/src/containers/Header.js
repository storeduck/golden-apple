import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import uuid from 'uuid'
import * as actions from '../actions'
import '../styles/Header.css'

function LoginButton() {
  return <a href="/login">Login</a>
}

function SignupButton() {
  return <a href="/signup">Signup</a>
}

// eslint-disable-next-line react/prop-types
function SignoutButton({ onLogout }) {
  return (
    <a onClick={onLogout} href="/api/logout">
      Signout
    </a>
  )
}

function AddShop() {
  return <a href="/shops/add">Add Shop</a>
}

function GoogleAuth() {
  return <a href="/auth/google">Google</a>
}

function Header(props) {
  function renderHeaderLinks() {
    // eslint-disable-next-line react/prop-types
    switch (props.isAuthenticated) {
      case true:
        return [
          <ul>
            <li key={uuid()}>
              <AddShop />
            </li>
            <li key={uuid()}>
              <SignoutButton onLogout={props.signoutUser} />
            </li>
          </ul>
        ]
      case false:
        return [
          <ul>
            <li key={uuid()}>
              <LoginButton />
            </li>
            <li key={uuid()}>
              <SignupButton />
            </li>
            <li key={uuid()}>
              <GoogleAuth />
            </li>
          </ul>
        ]
      default:
        return null
    }
  }
  return (
    <nav className="nav">
      <ul>
        <li key={uuid()} className="brand">
          <Link to="/">Brand</Link>
        </li>
        {renderHeaderLinks()}
      </ul>
    </nav>
  )
}

function mapStateToProps({ auth }) {
  return {
    isAuthenticated: auth.isAuthenticated
  }
}

export default connect(mapStateToProps, actions)(Header)
