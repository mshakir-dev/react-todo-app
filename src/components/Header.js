import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{textAlign: 'center'}}>
      <h1 style={{marginBottom: '15px'}}>TodoList</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;