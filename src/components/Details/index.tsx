import * as React from 'react';
import './details.scss';
import Label from '../Label';

interface IProps {
    id: number,
    title: string,
    details: string,
    shortDescription: string,
}

const Details = (props: IProps) => {
    return (
        <div className="container car-details">
            <h1>{ props.title }</h1>
            <h3>{ props.details }</h3>
            <p>{ props.shortDescription }</p>
            <Label>This car is currently available and can be delivered as soon as tomorrow morning. 
                Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.</Label>
        </div>
    );
};

export default Details;