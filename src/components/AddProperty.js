import React, { useState } from 'react';
import '../styles/AddProperty.css';
import axios from 'axios';
import Alert from './Alert';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      city: 'Manchester',
      type: '',
      bedrooms: '',
      bathrooms: '',
      price: '',
      email: '',
    },
    alert: {
      message: '',
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: '', isSuccess: false });

    axios
      .post('http://localhost:4000/api/v1/PropertyListing', fields)
      .then((response) => {
        console.log(fields, 'fields');
        console.log(response, 'response');
        console.log(response.data, 'data');
        setAlert({
          message: 'Yay, your property was successfully added!',
          isSuccess: true,
        });
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message: 'Oops, something went wrong. Please try again later.',
          isSuccess: false,
        });
      });
  };

  return (
    <div className="AddProperty">
      Add Property
      <form className="form" onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Property Description
          <input type="text" id="title-id" name="title" placeholder="e.g. Two Bed Townhouse" value={fields.title} onChange={handleFieldChange} />
        </label>
        <label htmlFor="type">
          Type
          <select id="type-id" name="type" placeholder="Type" value={fields.type} onChange={handleFieldChange}>
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <input type="number" id="bedrooms-id" name="bedrooms" placeholder="No." value={fields.bedrooms} onChange={handleFieldChange} />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <input type="number" id="bathrooms-id" name="bathrooms" placeholder="No." value={fields.bathrooms} onChange={handleFieldChange} />
        </label>
        <label htmlFor="price">
          Price
          <input type="number" min="0.01" step="0.01" max="100000000" id="price-id" name="price" placeholder="£" value={fields.price} onChange={handleFieldChange} />
        </label>
        <label htmlFor="city">
          City
          <select id="city-id" name="city" placeholder="Location" value={fields.city} onChange={handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="email">
          Email
          <input type="text" id="email-id" name="email" placeholder="email@email.com" value={fields.email} onChange={handleFieldChange} />
        </label>
        <input type="submit" value="Add" />
        {alert.message && (
        <Alert message={alert.message} success={alert.isSuccess} />
        )}
      </form>
    </div>
  );
};

export default AddProperty;
