import * as React from 'react';
import Card from '../Card';
import './loading.scss';

interface Props {
}

const Loading = (props: Props) => {
  return (
    <div className="loading">
      <div className="avatar"></div>
      <div>
        <h4>.</h4>
        <p>.</p>
      </div>
    </div>
  );
};

export default Loading;
