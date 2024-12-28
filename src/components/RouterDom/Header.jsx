import React from 'react'
import { NavLink } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
About
const Header = () => {
  return (
    <div>
      <div><h1>Header</h1>
      <a href="#">sign in</a>
      <a style={{margin: "30px"}} href="#">sign up</a>
      </div>

      <div style={{padding:"30px"}}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to= '/about' >About</NavLink>
        <NavLink to= '/contact' >Contact</NavLink>
      </div>
    </div>
  )
}

export default Header
