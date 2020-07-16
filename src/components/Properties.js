import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../styles/Properties.css';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import SideBar from './SideBar';

const Properties = () => {
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

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/v1/PropertyListing')
      .then((response) => {
        console.log(response.data);
        setProperties(response.data);
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message: 'Oops, something went wrong. Please try again later.',
        });
      });
  }, []);

  return (
    <div className="Properties">
      {
    properties.map((property) => (
      <PropertyCard
        key={property._id}
        title={property.title}
        type={property.type}
        bathrooms={property.bathrooms}
        bedrooms={property.bedrooms}
        price={property.price}
        city={property.city}
        email={property.email}
      />
    ))
}
      {alert.message && (
        <Alert message={alert.message} success={alert.isSuccess} />
      )}
      <SideBar />
    </div>
  );
};

export default Properties;
