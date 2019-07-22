import * as React from 'react';
import {render, fireEvent, queryByAttribute } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from '../../components/Card';
import { Index } from './index';
import AvailableCars from '../../components/AvailableCars';
import { RouterApp } from '../../router.app';

describe('<Index />', () => {
  it('should render <Header />', () => {
    const { container, getByText } = render(<RouterApp />);
    const header = container.querySelector('header');
    expect(header).toBeDefined();
  });

  it('should render <Footer /> at the bottom', () => {
    const { container, getByText } = render(<RouterApp />);
    const Footer = container.querySelector('footer');
    expect(Footer).toBeDefined();
  });

  it('should render <NavFilter />', () => {
    const { container, getByText } = render(<RouterApp />);
    const navfilter = container.querySelector('.navfilter');
    expect(navfilter).toBeDefined();
  });

  it('should render sort <Select /> by manufacturer or color', () => {
    const { container, getByText } = render(<RouterApp />);
    const sortSelect = container.querySelector('#sort-select');
    expect(sortSelect).toBeDefined();
  });

  it('should render "10 of 100 results"', () => {
    const { getByText } = render(<AvailableCars paginationSize={10} totalPageCars={100} />);
    getByText(/Showing 10 of 100 results/);
  });

  it('should render list <Card /> of cars', () => {
    const { queryByText, getAllByText, getByText } = render(
        <Router>
          <Card 
              id='1' 
              picture='' 
              title='Audi' 
              shortDescription='Audi'
              data={{}}
              />
        </Router>
      );
    const title = getAllByText('Audi');
    expect(title).toBeDefined();
  });

  it('should render cars stock number, mileage, fuel type and color', () => {
    const car = {
      stockNumber: '123',
      mileage: {
        number: '5500',
        unit: 'km',
      },
      fuelType: 'diesel',
      color: 'red'
    };
    const { queryByText, getByLabelText, getByText } = render(
      <Router>
        <Card 
            id='1' 
            picture='' 
            title='Audi' 
            shortDescription={`Stock #${car.stockNumber} - ${car.mileage.number} ${car.mileage.unit} - ${car.fuelType} - ${car.color}`}
            data={{}}
            />
      </Router>
    );
    const title = getByText(/Stock #123 - 5500 km - diesel - red/);
  });
});
