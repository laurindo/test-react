import * as React from 'react';
import { Fragment } from 'react';

interface Props {
  options: string[],
  handleChange: Function,
  placeholder: string,
  value: string,
}

const Select = (props: Props) => {
  const renderOptions = (options: string[] = []) => {
    return options.map((color, index) => {
      return (
          <option key={index} value={color}>
            {' '}
            {color}{' '}
          </option>
      );
    });
  };

  return <select 
            value={props.value}
            onChange={(e) => { 
              console.log(e.target.value);
              props.handleChange(e.target.value); 
            }}>
            <option value=''>{ props.placeholder }</option>
            {renderOptions(props.options)}
        </select>;
};

export default Select;
