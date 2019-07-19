import * as React from 'react';
import {render, fireEvent, findAllByTestId} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './index';

it('<Card />', () => {
  const { queryByText, getByLabelText, getByText } = render(
      <Router>
        <Card 
            id='1' 
            picture='' 
            title='Title Card' 
            shortDescription='short description'
            data={{}}
            />
      </Router>
    );
    const title = getByText('Title Card');
  getByText((content, element) => content.startsWith('Title Card'));
  expect(title).toBeDefined();
});