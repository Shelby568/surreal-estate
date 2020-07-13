import React from 'react';
import { render } from '@testing-library/react';
import AddProperty from '../components/AddProperty';

describe('AddProperty', () => {
  it('checks component renders correctly', () => {
    const { getByPlaceholderText } = render(<AddProperty />);

    expect(getByPlaceholderText('Title')).toBeTruthy();
    expect(getByPlaceholderText('Location')).toBeTruthy();
    expect(getByPlaceholderText('Type')).toBeTruthy();
    expect(getByPlaceholderText('No. of Bedrooms')).toBeTruthy();
    expect(getByPlaceholderText('No. of Bathrooms')).toBeTruthy();
    expect(getByPlaceholderText('£')).toBeTruthy();
    expect(getByPlaceholderText('email@email.com')).toBeTruthy();
  });
});
