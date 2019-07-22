import * as React from 'react';
import './button.scss';

interface Props {
  children: Object,
  handleClick: Function,
  disabled?: boolean,
}

const Button = (props: Props) => {
  return <button className={props.disabled ? 'disabled' : ''} onClick={(e) => { props.handleClick(e) }}>{props.children}</button>;
};

export default Button;
