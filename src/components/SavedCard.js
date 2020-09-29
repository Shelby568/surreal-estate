import React from 'react';
import '../styles/SavedCard.css';
import propTypes from 'prop-types';

const SavedCard = ({
  _id,
  propertyListing,
  onRemoveProperty,
}) => (
  <div className="savedCard">
    <div className="saved-title">
      <div className="title">{propertyListing.title}</div>
    </div>
    <div className="remove"><button type="button" className="remove-button" onClick={() => onRemoveProperty(_id)}>Remove</button></div>
  </div>
);

SavedCard.propTypes = {
  _id: propTypes.string.isRequired,
  propertyListing: propTypes.string.isRequired,
  onRemoveProperty: propTypes.func.isRequired,
};

export default SavedCard;
