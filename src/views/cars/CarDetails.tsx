import * as React from 'react';
import { Link } from 'react-router-dom';
//import './card.scss';

export const CarDetails = () => {
  return (
    <div>
      <div>
        <img
          width="100%"
          src="https://cdn-images-1.medium.com/max/1024/1*BGDcxCX-Kra1E25z64WdhA.jpeg"
          alt="kj"
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-7">
            <h1>Corsa 2015</h1>
            <h3>Stock #2345 Stock #2345 - Petrol Yellow</h3>
            <p>kjkjh jkh kjh jkh jkh k jkh</p>
          </div>

          <div className="col-5">test</div>
        </div>
      </div>
    </div>
  );
};
