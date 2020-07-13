import React, { useState } from 'react';
import '../styles/AddProperty.css';

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
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddProperty">
      Add Property
      <form className="form" onSubmit={handleAddProperty}>
        <label htmlFor="title">
          <input type="text" id="title" name="title" placeholder="Title" value={fields.title} onChange={handleFieldChange} />
        </label>
        <label htmlFor="city">
          <select id="city-id" name="city" placeholder="Location" value={fields.city} onChange={handleFieldChange}>
            <option value="">Please select a location</option>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
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
          <input type="text" id="bedrooms-id" name="bedrooms" placeholder="No. of Bedrooms" value={fields.bedrooms} onChange={handleFieldChange} />
        </label>
        <label htmlFor="bathrooms">
          <input type="text" id="bathrooms-id" name="bathrooms" placeholder="No. of Bathrooms" value={fields.bathrooms} onChange={handleFieldChange} />
        </label>
        <label htmlFor="price">
          <input type="number" min="0.01" step="0.01" max="100000000" id="price-id" name="price" placeholder="£" value={fields.price} onChange={handleFieldChange} />
        </label>
        <label htmlFor="email">
          <input type="text" id="email-id" name="email" placeholder="email@email.com" value={fields.email} onChange={handleFieldChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddProperty;
