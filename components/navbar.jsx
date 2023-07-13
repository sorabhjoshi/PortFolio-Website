import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import "./navbar.css"
import { useState } from 'react';


class Navbar extends Component {
    state= {clicked:false};
    handleClick =() =>{
        this.setState({clicked: !this.state.clicked})
    }
  render(){
  return (
    <nav id='main-nav' >
       <div className='logo'>
        <NavLink to="/"><h2>SJ</h2></NavLink>
       </div>
       <div id='menu-link'  >
        <ul style={{right: this.state.clicked ?'0px':'-350px'}}>
            <li>
                <NavLink  to="/" id='h'>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" id='h'>About</NavLink>
            </li>
            <li>
                <NavLink to="/work" id='h'>Portfolio</NavLink>
            </li>
            <li>
                <NavLink to="/contact" id='h'>Contact</NavLink>
            </li>
        </ul>
        {/* hamburger menu */}
        <div className='hamburger-menu' onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
       </div>
    </nav>
  )
}
}

export default Navbar