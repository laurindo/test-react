import * as React from 'react';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Label from '../../components/Label';
import Pagination from '../../components/Pagination';
import AvailableCars from '../../components/AvailableCars';

import * as HttpHelper from '../../helpers/http.helper';
import * as PaginationHelper from '../../helpers/pagination.helper';
import * as CarHelper from '../../helpers/car.helper';

interface IManufacturer {
  name: string,
}

export const Index = () => {
  let [paginationSize, setPaginationSize] = React.useState(0);
  let [totalPageCount, setTotalPageCount] = React.useState(0);
  let [totalPageCars, setTotalPageCars] = React.useState(0);
  let [filter, setFilter] = React.useState(PaginationHelper.getDefaultValues());
  let [cars, setCar] = React.useState([]);
  let [colors, setColors] = React.useState([]);
  let [manufacturers, setManufacturers] = React.useState([]);
  let [pageNumber, setPageNumber] = React.useState(1);

  React.useEffect(() => {
    HttpHelper.getCarsEndpoint(filter).then(response => {
      setCar(response.data.cars);
      setPaginationSize(PaginationHelper.getPaginationTotal(response.data.cars));
      setTotalPageCount(PaginationHelper.getTotalPageCount(response.data));
      setTotalPageCars(PaginationHelper.getTotalCarsCount(response.data));
    });

    HttpHelper.getColorsEndpoint().then(response => {
      setColors(response.data.colors);
    });

    HttpHelper.getManufacturersEndpoint().then(response => {
      setManufacturers(response.data.manufacturers.map((manufacturer: IManufacturer) => manufacturer.name));
    });
  }, []);

  const callbackGetCars = (filter: Object) => {
    HttpHelper.getCarsEndpoint(filter).then(response => {
      setCar(response.data.cars);
    });
  };

  const handleSortCars = async (value: string) => {
    const newFilter = { ...filter, sort: PaginationHelper.getSortValue(value)};
    setFilter(newFilter);
    callbackGetCars(newFilter);
  };

  const handleFirstPage = async (value: number) => {
    const newFilter = { ...PaginationHelper.handleFirstPage(value) };
    setPageNumber(newFilter.page);
    setFilter(newFilter);
    callbackGetCars(newFilter);
  };

  const handleLastPage = async (value: number) => {
    const newFilter = PaginationHelper.handleLastPage(value);
    setPageNumber(newFilter.page);
    setFilter(newFilter);
    callbackGetCars(newFilter);
  };

  const handlePreviousPage = async () => {
    const newFilter = PaginationHelper.handlePreviousPage(pageNumber);
    setPageNumber(newFilter.page);
    setFilter(newFilter);
    callbackGetCars(newFilter);
  };

  const handleNextPage = async () => {
    const newFilter = PaginationHelper.handleNextPage(pageNumber);
    setPageNumber(newFilter.page);
    setFilter(newFilter);
    callbackGetCars(newFilter);
  };

  return (
    <div className="container">
      <div className="row">
        <div id="navfilter" className="col-4">
          <Box>
            <div>
              <Label>Color</Label>
              <Select 
                placeholder="All colors"
                handleChange={(value: string) => setFilter({ ...filter, color: value })} 
                value={filter.color} 
                options={colors} />
            </div>

            <div>
              <Label>Manufacturer</Label>
              <Select
                placeholder="All manufacturers" 
                handleChange={(value: string) => setFilter({ ...filter, manufacturer: value })} 
                value={filter.manufacturer} 
                options={manufacturers} />
            </div>

            <Button handleClick={() => PaginationHelper.handleFilterCars(callbackGetCars, filter)}>Filter</Button>
          </Box>
        </div>

        <div className="col-8">
          <div className="row">
            <div className="col-8 available-cars">
              <AvailableCars 
                paginationSize={paginationSize} 
                totalPageCars={totalPageCars} />
            </div>
            <div id="sort-select" className="col-4">
              <Label>Sort by</Label>
              <Select 
                placeholder="None"
                handleChange={(value: string) => handleSortCars(value)} 
                value={filter.sort}
                options={['Mileage - Ascending', 'Mileage - Descending']} />
            </div>
          </div>

          { CarHelper.renderListCars(cars) }

          <Pagination
            handleFirstPage={() => handleFirstPage(1)} 
            handleLastPage={() => handleLastPage(totalPageCount)} 
            handlePreviousPage={() => handlePreviousPage()}
            handleNextPage={() => handleNextPage()}
            pageNumber={pageNumber}
            pageTotal={totalPageCount}
          />

        </div>
      </div>
    </div>
  );
};
