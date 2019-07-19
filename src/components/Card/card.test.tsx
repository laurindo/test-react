import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';

import * as React from 'react';
import {render, fireEvent, findAllByTestId} from '@testing-library/react';
import Card from './index';

it('basic example', () => {
  const { queryByText, getByLabelText, getByText } = render(
        <Card 
            id='1' 
            picture='' 
            title='Title Card' 
            shortDescription='short description'
            data={{}}
            />
    );
  expect(queryByText('Title Card3')).toBeNull();
});