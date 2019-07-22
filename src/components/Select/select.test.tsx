import * as React from 'react';
import {render, fireEvent, queryByAttribute } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Select from './index';

describe('COMPONENT <Select> ', () => {
    it('Testing default value', () => {
        const filter = {
            color: '',
        };
    
        const handleSortCars= (value: string) => {};
    
        const { queryByText, getByLabelText, getByText } = render(
            <Select 
                options={['blue', 'green']}
                placeholder="Select Example"
                handleChange={(value: string) => handleSortCars(value)} 
                value={filter.color}
                />
        );
        
        getByText((content, element) => content.startsWith('Select Example'));
    });

    it('Testing selected value', () => {
        const getById = queryByAttribute.bind(null, 'id');
        
        const filter = {
            color: '',
        };
    
        const handleSortCars= (value: string) => {};
    
        const { container } = render(
            <Select 
                options={['blue', 'green']}
                placeholder="Select Example"
                handleChange={(value: string) => handleSortCars(value)} 
                value={filter.color}
                />
        );

        const select = getById(container, 'select-field');
        
        expect(select.innerHTML).toMatch('Select Example');

        fireEvent.click(select);

        const optionsUL = getById(container, 'select-field-options');

        expect(optionsUL.children[0].innerHTML).toMatch('');
        expect(optionsUL.children[1].innerHTML).toMatch('blue');
        expect(optionsUL.children[2].innerHTML).toMatch('green');
    });
});