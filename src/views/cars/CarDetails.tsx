import * as React from 'react';
import { Link } from 'react-router-dom';
import Details from '../../components/Details';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Label from '../../components/Label';
import * as CarHelper from '../../helpers/car.helper';
import { IFavorite } from '../../interfaces/favorite.interface';

export const CarDetails = (props: IFavorite) => {
  
  const details = props.location.state;
  
  const storeCarLocally = () => {
    console.log(props);
    CarHelper.storeCarLocally(props);
  };
  
  return (
    <div>
      <div>
        <img
          width="100%"
          src="https://cdn-images-1.medium.com/max/1024/1*BGDcxCX-Kra1E25z64WdhA.jpeg"
          alt="illustrative-banner"
        />
      </div>

      <div className="container car-details">
        <div className="row">
          <div className="col-7">
            <Details 
              id={details.id}
              title={details.title}
              details={''}
              shortDescription={details.shortDescription}
              />
          </div>

          <div className="col-5 container-favorite">
            <Box>
              <Label>If you like this car, click the button and save it in your collection of favourite items.</Label>
              <Button handleClick={ () => storeCarLocally() }>Save</Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};
