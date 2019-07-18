import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import './nomatch.scss';

const NoMatchScreen = () => {
  return (
    <div className="nomatch">
      <Logo width="60%" />
      <h1>404 - Not Found</h1>
      <h3>Sorry, the page you are looking for does not exist.</h3>
      <h3>
        You can always go back to the <Link to="/">homepage</Link>.
      </h3>
    </div>
  );
};

export default NoMatchScreen;
