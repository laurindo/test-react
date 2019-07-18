import * as React from 'react';
import * as StorageHelper from '../../helpers/storage.helper';
import * as CarHelper from '../../helpers/car.helper';
import { KEYS } from '../../constants';

export const MyOrders = () => {
  const renderOrders = () => {
      const cars = StorageHelper.get(KEYS.favorite_cars);
      return CarHelper.renderAvailableCars(cars);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>My Orders</h1>
          { renderOrders() }
        </div>
      </div>
    </div>
  );
};
