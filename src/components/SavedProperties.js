import React, { useEffect, useState } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import Alert from './Alert';
import SavedCard from './SavedCard';

const SavedProperties = ({ userID }) => {
  const initialState = {
    favourites: [],
    alert: {
      message: '',
      isSuccess: false,
    },
    id: '',
  };
  const headers = {
    'Access-Control-Allow-Origin': '*'
  };

  const [favourites, setFavourite] = useState(initialState.favourites);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios.get(`https://serene-savannah-44704.herokuapp.com/api/v1/Favourite?query={"fbUserId":"${userID}"}&populate=propertyListing`, {headers})
      .then((response) => {
        console.log(response.data, 'fave');
        console.log(userID, 'userid');
        setFavourite(response.data);
      })
      .catch((error) => {
        console.log(error, 'fave-error');
        setAlert({
          message: 'Server Error. Please try again later.',
        });
      });
  }, [userID]);

  const handleRemoveProperty = (favouriteId) => {
    axios
      .delete(`https://serene-savannah-44704.herokuapp.com/api/v1/Favourite/${favouriteId}`, {headers})
      .then((response) => {
        console.log(response);
        setAlert({
          message: 'Property deleted successfully!',
          isSuccess: true,
        });
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message: 'Server Error. Please try again later.',
        });
      });
  };

  return (
    <div className="savedProperties">
      <div className="saveCard">
        {
          favourites.map((favourite) => (
            <SavedCard
              key={favourite._id}
              {...favourite}
              userID={userID}
              onRemoveProperty={handleRemoveProperty}
            />
          ))
        }
      </div>
      {alert.message && (
        <Alert message={alert.message} success={alert.isSuccess} />
      )}
    </div>
  );
};

SavedProperties.propTypes = {
  userID: propTypes.number.isRequired,
};

export default SavedProperties;
