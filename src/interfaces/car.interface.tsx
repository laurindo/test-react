export interface ICar {
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
};