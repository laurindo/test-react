import * as React from 'react';
import {render, fireEvent, findAllByTestId} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopMenu from './index';

describe('TESTING <TopMenu />', () => {
  it('<TopMenu />', () => {
    const { queryByText, getByLabelText, getByText } = render(
      <Router>
        <TopMenu />
      </Router>
    );
    const textPurchase = getByText('Purchase');
    const textMyOrders = getByText('My Orders');
    const textSell = getByText('Sell');
    expect(textPurchase).toBeDefined();
    expect(textMyOrders).toBeDefined();
    expect(textSell).toBeDefined();
  });
});
