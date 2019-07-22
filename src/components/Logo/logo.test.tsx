import * as React from 'react';
import {render, fireEvent, queryByAttribute } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from './index';

describe('COMPONENT <Logo> ', () => {
    it('Testing default value', () => {
        const { container } = render(
            <Logo width="100%" />
        );
        
        expect(container.querySelector('img')).toBeDefined();
    });
});