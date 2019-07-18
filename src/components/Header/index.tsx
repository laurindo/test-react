import * as React from 'react';
import Logo from '../Logo';
import TopMenu from '../TopMenu';
import './header.scss';

const Header = () => {
  return (
    <header>
      <Logo width="100%" />
      <TopMenu />
    </header>
  );
};

export default Header;
