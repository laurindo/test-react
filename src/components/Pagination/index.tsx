import * as React from 'react';
import { Link } from 'react-router-dom';
import './pagination.scss';

interface IProps {
  handleFirstPage: Function,
  handleLastPage: Function,
  handlePreviousPage: Function,
  handleNextPage: Function,
  pageNumber: number,
  pageTotal: number,
};

const Pagination = (props: IProps) => {
  return (
    <nav className="pagination">
      <ul>
        <li>
          <p onClick={() => props.handleFirstPage()}>First</p>
        </li>
        <li>
          <p onClick={() => props.handlePreviousPage()}>Previous</p>
        </li>
        <li>Page {props.pageNumber} of {props.pageTotal}</li>
        <li>
          <p onClick={() => props.handleNextPage()}>Next</p>
        </li>
        <li>
        <p onClick={() => props.handleLastPage()}>Last</p>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
