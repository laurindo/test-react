import * as React from 'react';
import Card from '../components/Card';
import Loading from '../components/Loading';
import * as StorageHelper from '../helpers/storage.helper';
import { KEYS } from '../constants';
import { ICar } from '../interfaces/car.interface';
import { IFavorite } from '../interfaces/favorite.interface';

const renderListCars = (cars: Array<ICar> = []) => {
    if (cars && cars.length) {
        return cars.map((car: ICar, index: number) => {
          return <Card 
                  id={car.stockNumber}
                  key={index} 
                  title={car.modelName} 
                  picture={car.pictureUrl}
                  data={car} 
                  shortDescription={ formatDetails(car) } />;
        });
    }
    return <Loading />;
};

const storeCarLocally = (props: IFavorite) => {
    const data = {
      ...props.location.state,
      createdAt: new Date().toISOString(),
    };
    const savedCarData = StorageHelper.get(KEYS.favorite_cars);
    if (savedCarData) {
      savedCarData.push(data);
      StorageHelper.set(KEYS.favorite_cars, savedCarData);
    } else {
      StorageHelper.set(KEYS.favorite_cars, [data]);
    }
};

const formatDetails = (car: ICar) => {
  return `Stock #${car.stockNumber} - ${car.mileage.number} ${car.mileage.unit} - ${car.fuelType} - ${car.color}`;
};

export { renderListCars, storeCarLocally, formatDetails };