import * as React from 'react';
import './button.scss';

interface Props {
  children: Object,
  handleClick: Function,
}

const Button = (props: Props) => {
  return <button onClick={(e) => { props.handleClick(e) }}>{props.children}</button>;
};

export default Button;
