import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../routes/Routes';

const Navbar = () => (
  <nav>
    <h3>COMPANY</h3>
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Reset</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
    <Routes />
  </nav>
);

export default Navbar;
