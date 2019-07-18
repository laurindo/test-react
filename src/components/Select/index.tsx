import * as React from 'react';
import Arrow from '../Arrow';
import './select.scss';

interface Props {
  options: string[],
  handleChange: Function,
  placeholder: string,
  value: string,
}

const Select = (props: Props) => {

  const [selectedOption, setOption] = React.useState('');
  const [isShowOptions, setShowOptions] = React.useState(false);
  
  const renderOptions = () => {
    return props.options.map((color, index) => {
      return (
        <li key={index} onClick={(e) => handleOption(e.currentTarget.innerText)}> { color} </li>
      );
    });
  };

  const showSelect = () => {
    setShowOptions(!isShowOptions);
  };

  const handleOption = (value: string) => {
    showSelect();
    setOption(value);
    props.handleChange(value);
  };

  return (
    <div className="container-select">
      <div className="select" onClick={showSelect}> 
        { selectedOption || props.placeholder} 
        <Arrow status={isShowOptions} />
      </div>
      {
        isShowOptions ?
          <ul>
            <li onClick={(e) => handleOption('')}> { props.placeholder } </li>
            { renderOptions() }
          </ul> : null
      }
    </div>
  );
};

export default Select;
