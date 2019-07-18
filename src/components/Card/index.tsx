import * as React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

interface Props {
  id: String,
  picture: '',
  title: String,
  shortDescription: String,
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <div className="avatar">
        <img width="100%" src={props.picture} />
      </div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.shortDescription}</p>
        <Link to={`/car/${props.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default Card;
