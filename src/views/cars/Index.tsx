import * as React from 'react';
import Box from '../../components/Box';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Label from '../../components/Label';
import Pagination from '../../components/Pagination';
import Loading from '../../components/Loading';

import * as HttpHelper from '../../helpers/http.helper';
import * as PaginationHelper from '../../helpers/pagination.helper';
import { ICar } from '../../interfaces/car.interface';

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

  const renderAvailableCars = () => {
    if (cars && cars.length) {
      return cars.map((car: ICar, index: number) => {
        return <Card 
                id={car.stockNumber}
                key={index} 
                title={car.modelName} 
                picture={car.pictureUrl}
                data={car}
                shortDescription={`Stock #${car.stockNumber} - ${car.mileage.number} ${car.mileage.unit} - ${car.fuelType} - ${car.color}`} />;
        });
    }
  return <Loading />;
  };

  const handleFilterCars = async () => {
    HttpHelper.getCarsEndpoint(filter).then(response => {
      setCar(response.data.cars);
    });
  };

  const handleSortCars = async (value: string) => {
    setFilter({ ...filter, sort: PaginationHelper.getSortValue(value)});
    HttpHelper.getCarsEndpoint(filter).then(response => {
      setCar(response.data.cars);
    });
  };

  const handleFirstPage = async (value: number) => {
    const newFilter = { ...filter, page: value};
    setFilter(newFilter);
    HttpHelper.getCarsEndpoint(newFilter).then(response => {
      setCar(response.data.cars);
    });
  };

  const handleLastPage = async (value: number) => {
    const newFilter = { ...filter, page: value};
    setFilter(newFilter);
    HttpHelper.getCarsEndpoint(newFilter).then(response => {
      setCar(response.data.cars);
    });
  };

  const handlePreviousPage = async () => {
    const newPageNumber = pageNumber - 1;
    setPageNumber(newPageNumber);
    const newFilter = { ...filter, page: newPageNumber};

    setFilter(newFilter);
    HttpHelper.getCarsEndpoint(newFilter).then(response => {
      setCar(response.data.cars);
    });
  };

  const handleNextPage = async () => {
    const newPageNumber = pageNumber + 1;
    setPageNumber(newPageNumber);
    const newFilter = { ...filter, page: newPageNumber};

    setFilter(newFilter);
    HttpHelper.getCarsEndpoint(newFilter).then(response => {
      setCar(response.data.cars);
    });
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

            <Button handleClick={() => handleFilterCars()}>Filter</Button>
          </Box>
        </div>

        <div className="col-8">
          <div className="row">
            <div className="col-8">
              <h2>Available Cars</h2>
              <h4>Showing {paginationSize} of {totalPageCars} results</h4>
            </div>
            <div className="col-4">
              <Label>Sort by</Label>
              <Select 
                placeholder="None"
                handleChange={(value: string) => handleSortCars(value)} 
                value={filter.color} 
                options={['Mileage - Ascending', 'Mileage - Descending']} />
            </div>
          </div>

          {renderAvailableCars()}
          <Pagination
            handleFirstPage={() => handleFirstPage(1)} 
            handleLastPage={() => handleLastPage(10)} 
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
