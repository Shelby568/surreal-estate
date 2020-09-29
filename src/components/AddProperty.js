import React, { useState } from 'react';
import '../styles/AddProperty.css';
import axios from 'axios';
import propTypes from 'prop-types';
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
    <div className="addProperty">
      <form className="form" onSubmit={handleAddProperty}>
        <label htmlFor="title" className="label">
          Property Description
          <input type="text" id="title-id" name="title" className="add-input" placeholder="e.g. Two Bed Townhouse" value={fields.title} onChange={handleFieldChange} />
        </label>
        <label htmlFor="type" className="label">
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
        <label htmlFor="bedrooms" className="label">
          Bedrooms
          <input type="string" id="bedrooms-id" name="bedrooms" className="add-input" placeholder="No." value={fields.bedrooms} onChange={handleFieldChange} />
        </label>
        <label htmlFor="bathrooms" className="label">
          Bathrooms
          <input type="string" id="bathrooms-id" name="bathrooms" className="add-input" placeholder="No." value={fields.bathrooms} onChange={handleFieldChange} />
        </label>
        <label htmlFor="price" className="label">
          Price
          <input type="number" min="0.01" step="0.01" id="price-id" name="price" className="add-input" placeholder="£" value={fields.price} onChange={handleFieldChange} />
        </label>
        <label htmlFor="city" className="label">
          City
          <select id="city-id" name="city" placeholder="Location" value={fields.city} onChange={handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="email" className="label">
          Email
          <input type="text" id="email-id" name="email" className="add-input" placeholder="email@email.com" value={fields.email} onChange={handleFieldChange} />
        </label>
        <div className="add-button-div">
          <button type="submit" className="add-button">
            Add
          </button>
        </div>
        {alert.message && (
        <Alert message={alert.message} success={alert.isSuccess} />
        )}
      </form>
    </div>
  );
};

AddProperty.propTypes = {
  title: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  bedrooms: propTypes.string.isRequired,
  bathrooms: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  city: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
};

export default AddProperty;
