import * as React from 'react';
import './box.scss';

interface Props {
  children: Object
}

const Box = (props: Props) => {
  return <div className="box">{props.children}</div>;
};

export default Box;
