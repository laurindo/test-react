import * as React from 'react';
import './logo.scss';

interface Props {
  width: string,
}

const Logo = (props: Props) => {
  return (
    <div>
      <a href="#/">
        <img
          width={props.width || '100%'}
          src="https://res.cloudinary.com/luneswallet/image/upload/v1563619998/auto1/auto1-logo.png"
        />
      </a>
    </div>
  );
};

export default Logo;
