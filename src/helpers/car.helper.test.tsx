import { ICar } from '../interfaces/car.interface';
import { IFavorite } from '../interfaces/favorite.interface';
import * as CarHelper from './car.helper';
import * as StorageHelper from '../helpers/storage.helper';
import { KEYS } from '../constants';

describe('TEST CAR HELPER', () => {
    it('should return formatDetails of car', () => {
        const car: ICar = {
            id: '123',
            modelName: 'Mercedez-Benz',
            pictureUrl: '',
            stockNumber: '61184',
            fuelType: 'diesel',
            color: 'red',
            mileage: {
                number: '500',
                unit: 'km',
            },
        };
        const result = CarHelper.formatDetails(car);
        expect(result).toBe('Stock #61184 - 500 km - diesel - red');
    });

    it('Should save car on local storage', () => {
        const props: IFavorite = {
            location: {
                state: {
                    id: 123,
                    title: 'Info Car',
                    details: 'Details Car',
                    shortDescription: 'Shor Description Car',
                },
            },
        };
        CarHelper.storeCarLocally(props);
        const result = StorageHelper.get(KEYS.favorite_cars);
        expect(result.length).toBe(1);
        expect(result[0].id).toBe(123);
    });
});