import * as React from 'react';
import { withRouter } from 'react-router';
import { Link, Route, Router, Redirect } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import { RouterApp } from './router.app';

function renderWithRouter(
    ui: any,
    {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
) {
    return {
        ...render(<Router history={history}>{ui}</Router>),
        // adding `history` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        history,
    }
}

test('full app rendering/navigating', () => {
    const { container, getByText } = renderWithRouter(<RouterApp />);
    expect(container.innerHTML).toMatch('Available Cars');

    const leftClick = { button: 0 };
    fireEvent.click(getByText(/My Orders/i), leftClick);
    expect(container.innerHTML).toMatch('My Orders');
});