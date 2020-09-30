import React from 'react';
import { render } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';

describe('Properties', () => {
  const properties = [
    {
      _id: '123a',
      title: '2 Bed Townhouse',
      type: 'Semi-Detached',
      bathrooms: '1',
      bedrooms: '2',
      price: 80000,
      city: 'Manchester',
      email: 'email1@email.com',
    },
    {
      _id: '123b',
      title: 'Period Property',
      type: 'Detached',
      bathrooms: '2',
      bedrooms: '4',
      price: 150000,
      city: 'Liverpool',
      email: 'email2@email.com',
    },
  ];
  it('checks component renders correctly', () => {
    const { asFragment } = render(<PropertyCard properties={properties} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders to correct amount of component props', () => {
    const { getAllByTestId } = render(<PropertyCard properties={properties} />);

    expect(getAllByTestId('title-id')).toHaveLength(1);
    expect(getAllByTestId('type-id')).toHaveLength(1);
    expect(getAllByTestId('bathrooms-id')).toHaveLength(1);
    expect(getAllByTestId('bedrooms-id')).toHaveLength(1);
    expect(getAllByTestId('price-id')).toHaveLength(1);
    expect(getAllByTestId('city-id')).toHaveLength(1);
    expect(getAllByTestId('email-id')).toHaveLength(1);
});
});
