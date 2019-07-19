import * as React from 'react';
import { Link } from 'react-router-dom';
import './top.menu.scss';

const TopMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Purchase</Link>
        </li>
        <li>
          <Link to="/my-orders">My Orders</Link>
        </li>
        <li>
          <Link to="/sell">Sell</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;
