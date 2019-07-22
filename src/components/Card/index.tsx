import * as React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

interface Props {
  id: String,
  picture: '',
  title: String,
  shortDescription: String,
  isFavorite: false,
  data: Object,
}

const Card = (props: Props) => {

  const renderImageFavorite = () => {
    if (props.isFavorite) {
      return <img src="https://res.cloudinary.com/luneswallet/image/upload/v1563810629/auto1/favorite-heart-button.png" />;
    }
    return <img src="https://res.cloudinary.com/luneswallet/image/upload/v1563810629/auto1/heart.png" />
  };

  const renderLabelFavorite = () => {
    return (
      <label className="favorite">
        { renderImageFavorite() }
      </label>
    );
  };

  return (
    <div className="card">
      <div className="avatar">
        <img width="100%" src={props.picture} />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.shortDescription}</p>
        <Link to={{
          pathname: `/car/${props.id}`,
          state: {
            ...props,
            ...props.data,
          },
        }}>View Details</Link>
      </div>
    </div>
  );
};

export default Card;
