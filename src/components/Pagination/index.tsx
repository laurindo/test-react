import * as React from 'react';
import { Link } from 'react-router-dom';
import './pagination.scss';

const Pagination = () => {
  return (
    <nav className="pagination">
      <ul>
        <li>
          <Link to="">First</Link>
        </li>
        <li>
          <Link to="">Previous</Link>
        </li>
        <li>Page 2 of 10</li>
        <li>
          <Link to="">Next</Link>
        </li>
        <li>
          <Link to="">Last</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
