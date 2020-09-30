import React from 'react';
import '../styles/PropertyCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faBath, faBed, faStar, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

const PropertyCard = ({
  _id,
  title,
  bedrooms,
  bathrooms,
  price,
  email,
  type,
  city,
  onSaveProperty,
  userID,
}) => (

  <div className="propertyCard">
      <div className="card">
        <div className="picture">
          <FontAwesomeIcon icon={faHome} size="4x" />
        </div>
        <div className="title" data-testid="title-id">{title}</div>
        <div className="type" data-testid="type-id">{type}</div>
        <div className="bathroom" data-testid="bathrooms-id">
          <FontAwesomeIcon icon={faBath} />
          {' '}
          {bathrooms}
        </div>
        <div className="bedroom" data-testid="bedrooms-id">
          <FontAwesomeIcon icon={faBed} />
          {' '}
          {bedrooms}
        </div>
        <div className="price" data-testid="price-id">
          £
          {price}
        </div>
        <div className="city" data-testid="city-id">{city}</div>
        <div className="email" data-testid="email-id">
          <button
            type="button"
            href={email}
            className="email-button"
          >
            <FontAwesomeIcon icon={faEnvelope} className="email" />
            {' '}
            Email
          </button>
        </div>
        {userID && (
        <button
          type="button"
          href="#"
          onClick={() => onSaveProperty(_id)}
          className="save-button"
        >
          <FontAwesomeIcon icon={faStar} />
          {' '}
          Save
        </button>
        )}
      </div>

  </div>
);

PropertyCard.propTypes = {
  _id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  bedrooms: propTypes.string.isRequired,
  bathrooms: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  city: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  onSaveProperty: propTypes.func.isRequired,
  userID: propTypes.string.isRequired,
};

export default PropertyCard;
