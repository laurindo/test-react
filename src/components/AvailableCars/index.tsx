import * as React from 'react';
import './available.cars.scss';

interface Props {
    paginationSize: number,
    totalPageCars: number,
}

const AvailableCars = (props: Props) => {
    return (
        <div className="available-cars">
            <h2>Available Cars</h2>
            <h4>Showing {props.paginationSize} of {props.totalPageCars} results</h4>
        </div>
    );
};

export default AvailableCars;