import * as React from 'react';
import './label.scss';

interface Props {
  children: Object,
}

const Label = (props: Props) => {
  return <label>{props.children}</label>;
};

export default Label;
