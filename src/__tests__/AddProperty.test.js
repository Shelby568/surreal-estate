import React from 'react';
import { render } from '@testing-library/react';
import AddProperty from '../components/AddProperty';

describe('AddProperty', () => {
  it('checks component renders correctly', () => {
    const { getByLabelText } = render(<AddProperty />);

    expect(getByLabelText('Property Description')).toBeTruthy();
    expect(getByLabelText('Type')).toBeTruthy();
    expect(getByLabelText('Bedrooms')).toBeTruthy();
    expect(getByLabelText('Bathrooms')).toBeTruthy();
    expect(getByLabelText('Price')).toBeTruthy();
    expect(getByLabelText('City')).toBeTruthy();
    expect(getByLabelText('Email')).toBeTruthy();
  });
});
