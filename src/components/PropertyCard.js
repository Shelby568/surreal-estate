import React from 'react';
import '../styles/PropertyCard.css';

const PropertyCard = (props) => (
  <div className="PropertyCard">
    <div className="title" data-testid="title-id">{props.title}</div>
    <div className="type" data-testid="type-id">{props.type}</div>
    <div className="bathrooms" data-testid="bathrooms-id">{props.bathrooms}</div>
    <div className="bedrooms" data-testid="bedrooms-id">{props.bedrooms}</div>
    <div className="price" data-testid="price-id">{props.price}</div>
    <div className="city" data-testid="city-id">{props.city}</div>
    <div className="email" data-testid="email-id">{props.email}</div>
  </div>
);

export default PropertyCard;
