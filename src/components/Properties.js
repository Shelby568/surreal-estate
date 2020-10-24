import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../styles/Properties.css';
import propTypes from 'prop-types';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import SideBar from './SideBar';

const Properties = ({ userID }) => {
  const initialState = {
    properties: [],
    alert: {
      message: '',
      isSuccess: false,
    },
  };

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);
  const { search } = useLocation();
  const headers = {
    'Access-Control-Allow-Origin': '*'
  };

  useEffect(() => {
    axios.get(`https://serene-savannah-44704.herokuapp.com/api/v1/PropertyLisAccess-Control-Allow-Originting${search}`, headers)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  useEffect(() => {
    axios
      .get('https://serene-savannah-44704.herokuapp.com/api/v1/PropertyListing', headers)
      .then((response) => {
        console.log(response.data, 'properties');
        setProperties(response.data);
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message: 'Server Error. Please try again later.',
        });
      });
  }, []);

  const handleSaveProperty = (propertyId) => {
    axios
      .post('https://serene-savannah-44704.herokuapp.com/api/v1/Favourite', {
        propertyListing: propertyId,
        fbUserId: userID,
      }, headers);
  };

  return (
    <div className="Properties">
      <div className="alert">
        {alert.message && (
        <Alert message={alert.message} success={alert.isSuccess} />
        )}
      </div>
      <div className="propCard">
        <SideBar />
        {
        properties.map((property) => (
          <PropertyCard
            key={property._id}
            {...property}
            userID={userID}
            onSaveProperty={handleSaveProperty}
          />
        ))
      }
      </div>
    </div>
  );
};

Properties.propTypes = {
  userID: propTypes.string.isRequired,
};

export default Properties;
