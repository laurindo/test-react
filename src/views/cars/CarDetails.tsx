import * as React from 'react';
import Details from '../../components/Details';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Label from '../../components/Label';
import Toast from '../../components/Toast';
import * as CarHelper from '../../helpers/car.helper';
import * as StorageHelper from '../../helpers/storage.helper';
import { IFavorite } from '../../interfaces/favorite.interface';
import { ICar } from '../../interfaces/car.interface';
import { KEYS } from '../../constants';

export const CarDetails = (props: IFavorite) => {

  const [showToast, setShowToast] = React.useState(false);
  const [showButtonSave, setShowButtonSave] = React.useState(true);
  const [details, setDetails] = React.useState({ location: { state: { id: 0, title: '', details: '', shortDescription: '' } } });

  React.useEffect(() => {
    if (props && props.location && props.location.state) {
      setDetails({ 
        location: { 
          state: { 
            id: props.location.state.id, 
            title: props.location.state.title, 
            details: props.location.state.details, 
            shortDescription: props.location.state .shortDescription,
          }
        } 
      });
    }
  }, []);
  
  const storeCarLocally = () => {
    console.log(props);
    setShowToast(true);
    setShowButtonSave(false);
    setTimeout(() => { setShowToast(false); }, 3000);
    CarHelper.storeCarLocally(props);
  };

  const removeFromFavorite = (filtered: [{}]) => {
    try {
      setShowButtonSave(true);
      StorageHelper.set(KEYS.favorite_cars, filtered);
    } catch (e) {}
  };

  const renderButtonSave = () => {
    if (props.location.state.id) {
      const favoriteDetail = CarHelper.checkFavoriteCar(props.location.state.id);
      
      if (showButtonSave && !favoriteDetail.hasItem ) {
        return <Button handleClick={ () => storeCarLocally() }>Save</Button>
      }
      return <Button handleClick={() => removeFromFavorite(favoriteDetail.filtered) }>Remove</Button>
    }
    return null;
  };
  
  return (
    <div>
      <Toast show={showToast} />
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
              id={details.location.state.id}
              title={details.location.state.title}
              details={''}
              shortDescription={details.location.state.shortDescription}
              />
          </div>

          <div className="col-5 container-favorite">
            <Box>
              <Label>If you like this car, click the button and save it in your collection of favourite items.</Label>
              { renderButtonSave() }
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};
