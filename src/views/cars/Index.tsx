import * as React from 'react';
import { useState } from 'react';
import Box from '../../components/Box';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Label from '../../components/Label';
import Pagination from '../../components/Pagination';
import Loading from '../../components/Loading';

import { getCars } from '../../helpers/http.helper';
import * as PaginationHelper from '../../helpers/pagination.helper';

interface Data {
  id: string,
  modelName: string,
  pictureUrl: '',
  stockNumber: string,
  fuelType: string,
  color: string,
  mileage: {
    number: string,
    unit: string
  },
}

export const Index = () => {
  let [filter, setFilter] = useState(PaginationHelper.getDefaultValues());
  let [data, setCar, loading] = getCars(filter);
  const paginationSize = PaginationHelper.getPaginationTotal(data.cars);
  const resultSize = PaginationHelper.getResultTotal(data);

  /** MOVER PARA UMA CLASSSE HELPER */
  const renderAvailableCars = () => {
    if (!loading) {
      return data.cars.map((car: Data, index: string) => {
        return <Card 
                id={car.stockNumber}
                key={index} 
                title={car.modelName} 
                picture={car.pictureUrl} 
                shortDescription={`Stock #${car.stockNumber} - ${car.mileage.number} ${car.mileage.unit} - ${car.fuelType} - ${car.color}`} />;
      });
    }
    return <Loading />;
  };

  const handleFilterCars = async () => {
    console.log(filter);
    console.log(getCars);
    setCar({ ...data });
    setFilter(filter);
    getCars(filter);
    //[data, loading] = getCars(filter);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Box>
            <div>
              <Label>Color</Label>
              <Select 
                placeholder="All colors"
                handleChange={(value: string) => setFilter({ ...filter, color: value })} 
                value={filter.color} 
                options={['blue', 'yellow']} />
            </div>

            <div>
              <Label>Manufacturer</Label>
              <Select
                placeholder="All manufacturers" 
                handleChange={(value: string) => setFilter({ ...filter, manufacturer: value })} 
                value={filter.manufacturer} 
                options={['ford', 'fiat']} />
            </div>

            <Button handleClick={() => handleFilterCars()}>Filter</Button>
          </Box>
        </div>

        <div className="col-8">
          <div>
            <h2>Available Cars</h2>
            <h4>Showing {paginationSize} of {resultSize} results</h4>
          </div>
          {renderAvailableCars()}
          <Pagination />
        </div>
      </div>
    </div>
  );
};
