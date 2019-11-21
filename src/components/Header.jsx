import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link> | <Link to="/Error">ERROR</Link> | <Link to="/Admin">ADMIN</Link>
    </div>
  );
}

export default Header;