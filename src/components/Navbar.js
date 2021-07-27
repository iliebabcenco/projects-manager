import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>

    <h3>COMPANY</h3>
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">RegisterForm</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
