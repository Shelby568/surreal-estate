import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('NavBar', () => {
  it('checks the component renders correctly', () => {
    const { getByText } = render(<BrowserRouter><NavBar /></BrowserRouter>);

    expect(getByText(/View Properties/)).toBeInTheDocument();
    expect(getByText(/Add A Property/)).toBeInTheDocument();
  });
});
